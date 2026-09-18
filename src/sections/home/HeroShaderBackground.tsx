import React, { useEffect, useRef } from 'react';

export const HeroShaderBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext('webgl') ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);
    if (!gl) return;

    let animationFrameId: number;
    let resizeObserver: ResizeObserver | null = null;

    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);
        vec2 mouseNorm = (u_mouse - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);
        
        vec3 col = vec3(0.012, 0.035, 0.08); // Base deep dark navy
        
        float mouseDist = length(uv - mouseNorm);
        float mouseGlow = smoothstep(0.45, 0.0, mouseDist);
        
        vec2 gridUv = uv * 2.8;
        gridUv.y += 0.35;
        
        float t = u_time * 0.25;
        
        vec2 gPos = gridUv * 6.0;
        gPos.x += sin(gPos.y * 0.35 + t * 0.4) * 0.25;
        gPos.y += t * 0.6;
        
        vec2 f = abs(fract(gPos - 0.5) - 0.5) / fwidth(gPos);
        float line = min(f.x, f.y);
        float gridIntensity = 1.0 - min(line, 1.0);
        
        float gridFade = smoothstep(-1.2, 0.4, -uv.y) * 0.18;
        col += vec3(0.02, 0.15, 0.35) * gridIntensity * gridFade;
        
        for (float i = 1.0; i <= 4.0; i++) {
          float speed = t * (0.35 + i * 0.18);
          float yOffset = sin(uv.x * (1.5 + i * 0.6) + speed + i * 1.57) * (0.2 + i * 0.06);
          yOffset += cos(uv.x * 3.0 - speed * 0.8) * 0.05;
          
          float distToBeam = abs(uv.y - yOffset - (i - 2.5) * 0.18);
          float beam = 0.0035 / (distToBeam + 0.015);
          
          vec3 beamColor = (mod(i, 2.0) == 0.0) 
            ? vec3(0.0, 0.64, 1.0)   // Electric Cyan
            : vec3(0.06, 0.72, 0.50); // Emerald Green
              
          float pulse = sin(uv.x * 8.0 - t * (2.5 + i * 1.2)) * 0.5 + 0.5;
          pulse = pow(pulse, 4.0);
          
          col += beamColor * beam * (0.35 + 0.65 * pulse) * 0.65;
        }
        
        vec2 sparkCell = floor(gridUv * 4.0 + vec2(t * 0.2, 0.0));
        float sparkRand = hash(sparkCell);
        if (sparkRand > 0.82) {
          vec2 sparkPos = (sparkCell + 0.5) / 4.0 - vec2(t * 0.05, 0.0);
          float dSpark = length(gridUv - sparkPos * 4.0);
          float sparkGlow = smoothstep(0.12, 0.0, dSpark);
          float sparkBlink = sin(u_time * 2.5 + sparkRand * 6.28) * 0.5 + 0.5;
          col += vec3(0.1, 0.85, 0.55) * sparkGlow * sparkBlink * 0.45;
        }
        
        col += vec3(0.0, 0.55, 0.95) * mouseGlow * 0.22;
        col += vec3(0.06, 0.8, 0.5) * pow(mouseGlow, 2.5) * 0.35;
        
        float vignette = smoothstep(1.6, 0.3, length(uv));
        col *= (0.65 + 0.35 * vignette);
        
        gl_FragColor = vec4(col, 0.85);
      }
    `;

    function compileShader(type: number, src: string): WebGLShader | null {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.warn(gl.getShaderInfoLog(s));
        gl.deleteShader(s);
        return null;
      }
      return s;
    }

    const vertexShader = compileShader(gl.VERTEX_SHADER, vs);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fs);
    if (!vertexShader || !fragmentShader) return;

    const prog = gl.createProgram();
    if (!prog) return;

    gl.attachShader(prog, vertexShader);
    gl.attachShader(prog, fragmentShader);
    gl.linkProgram(prog);

    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.warn(gl.getProgramInfoLog(prog));
      return;
    }

    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    function render(t: number) {
      if (!gl || !canvas) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (resizeObserver && canvas) {
        resizeObserver.unobserve(canvas);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-80 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
