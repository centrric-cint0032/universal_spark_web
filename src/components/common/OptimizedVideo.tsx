import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

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

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      ref={containerRef}
      className={`relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl bg-slate-950 group ${aspectRatio} ${className}`}
    >
      {/* Video element with lazy loading */}
      <video
        ref={videoRef}
        poster={poster}
        playsInline
        muted={isMuted}
        autoPlay
        loop
        preload="none"
        onLoadedData={() => setHasLoaded(true)}
        className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
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

      {/* Video Interactive Controls (Play/Pause & Sound Toggle) */}
      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        <button
          type="button"
          onClick={togglePlay}
          className="w-9 h-9 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white/90 hover:text-white backdrop-blur-md border border-white/15 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-md"
          title={isPlaying ? 'Pause Reel' : 'Play Reel'}
          aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          className="w-9 h-9 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white/90 hover:text-white backdrop-blur-md border border-white/15 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-md"
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
