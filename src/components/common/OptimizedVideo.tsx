import React, { useEffect, useRef, useState } from 'react';

interface OptimizedVideoProps {
  src: string;
  poster: string;
  alt?: string;
  className?: string;
  aspectRatio?: string;
  title?: string;
}

export const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  poster,
  alt = 'Industrial engineering and civil contracting operations',
  className = '',
  aspectRatio = 'aspect-[4/3]',
  title = 'Universal Spark Executive Site Operations',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Lazy load video stream ONLY when user scrolls near the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // Once loaded, keep loaded
          }
        });
      },
      {
        rootMargin: '200px', // Trigger 200px before section comes into viewport
        threshold: 0.01,
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Click on the video toggles: [Play + Sound ON] <-> [Pause + Mute]
  const handleTogglePlayMute = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      // Pause and mute
      videoRef.current.pause();
      videoRef.current.muted = true;
      setIsPlaying(false);
      setIsMuted(true);
    } else {
      // Play with sound on
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
      setIsMuted(false);
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleTogglePlayMute}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          handleTogglePlayMute();
        }
      }}
      className={`relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl bg-slate-950 cursor-pointer select-none ${aspectRatio} ${className}`}
      title={isPlaying ? 'Click to Pause & Mute' : 'Click to Play with Sound'}
      aria-label={isPlaying ? 'Pause and Mute Video' : 'Play Video with Sound'}
    >
      {/* Video element with lazy loading - No hover zoom */}
      <video
        ref={videoRef}
        poster={poster}
        playsInline
        muted={isMuted}
        autoPlay
        loop
        preload="none"
        onLoadedData={() => setHasLoaded(true)}
        className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
        title={title}
        aria-label={alt}
      >
        {isInView && <source src={src} type="video/webm" />}
        Your browser does not support HTML5 video playback.
      </video>

      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-obsidian/20 pointer-events-none" />

      {/* Top Floating Badge */}
      <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] shadow-lg pointer-events-none z-10">
        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
        <span className="tracking-wider font-semibold text-white">
          {hasLoaded ? 'LIVE FIELD OPERATIONS REEL' : 'CLASS-A GENERAL CONTRACTOR'}
        </span>
      </div>
    </div>
  );
};
