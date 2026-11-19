import React, { useEffect, useRef, useState, useCallback } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';

export default function VideoPlayerModal({ film, onClose }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');
  const containerRef = useRef(null);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [isPlaying]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, togglePlay]);

  if (!film) return null;

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const dur = videoRef.current.duration;
    if (dur) {
      setProgress((current / dur) * 100);
      setCurrentTime(formatTime(current));
      setDuration(formatTime(dur));
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8 animate-fadeIn">
      {/* Container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#B59B78]/30 shadow-2xl flex flex-col"
      >
        {/* Top Bar with Title and Close */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0 right-0 z-20">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-[#B59B78] animate-pulse" />
            <h3 className="font-serif text-lg md:text-xl text-[#F8F6F2]">
              {film.title}
            </h3>
            <span className="text-xs px-2 py-0.5 rounded bg-[#B59B78]/20 text-[#B59B78] font-sans">
              {film.category} • {film.resolution || '4K UHD'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-full bg-black/40 hover:bg-black/80 transition-colors"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src={film.videoUrl}
            poster={film.coverUrl}
            autoPlay
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onClick={togglePlay}
            className="w-full h-full object-contain cursor-pointer"
          />

          {/* Large Center Play Overlay if Paused */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute w-20 h-20 rounded-full bg-[#B59B78]/90 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
            >
              <Play className="w-8 h-8 fill-current ml-1" />
            </button>
          )}
        </div>

        {/* Video Controls Bar */}
        <div className="bg-[#1A1A1A] px-6 py-4 border-t border-white/10 space-y-3">
          {/* Progress Bar / Scrubber */}
          <div
            onClick={handleSeek}
            className="w-full h-1.5 bg-white/15 hover:h-2.5 rounded-full cursor-pointer relative transition-all group"
          >
            <div
              className="h-full bg-[#B59B78] rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Bottom Controls Row */}
          <div className="flex items-center justify-between text-xs text-white/80 font-sans">
            <div className="flex items-center space-x-4">
              <button
                onClick={togglePlay}
                className="hover:text-[#B59B78] transition-colors p-1"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>

              <button
                onClick={toggleMute}
                className="hover:text-[#B59B78] transition-colors p-1"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <span className="text-white/60">
                {currentTime} / {duration || film.duration}
              </span>
            </div>

            <div className="hidden sm:flex items-center space-x-4 text-white/50 text-[11px]">
              {film.director && <span>Dir: {film.director}</span>}
              {film.camera && <span className="text-[#B59B78]">| {film.camera}</span>}
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={toggleFullscreen}
                className="hover:text-[#B59B78] transition-colors p-1"
                title="Fullscreen"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
