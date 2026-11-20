import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default'); // 'default', 'hover', 'view', 'play', 'explore', 'prev', 'next'
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer and no reduced motion
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Determine element under cursor
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorType(target.getAttribute('data-cursor') || 'hover');
      } else if (e.target.closest('button, a, input, select, textarea, [role="button"]')) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth physics-based trailing interpolation
  useEffect(() => {
    let animationFrameId;
    const smoothFollow = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      animationFrameId = requestAnimationFrame(smoothFollow);
    };
    animationFrameId = requestAnimationFrame(smoothFollow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  const isView = cursorType === 'view';
  const isPlay = cursorType === 'play';
  const isExplore = cursorType === 'explore';
  const isPrev = cursorType === 'prev';
  const isNext = cursorType === 'next';
  const isHover = cursorType === 'hover';

  let cursorClasses = "w-2.5 h-2.5 bg-[#B59B78] border-none";
  let ringClasses = "w-8 h-8 border border-[#B59B78]/40";

  if (isHover) {
    ringClasses = "w-14 h-14 border border-[#B59B78] bg-[#B59B78]/10 scale-110";
  } else if (isView || isPlay || isExplore || isPrev || isNext) {
    ringClasses = "w-20 h-20 bg-[#252525]/90 text-[#F8F6F2] backdrop-blur-sm border border-[#B59B78] shadow-2xl flex items-center justify-center";
  }

  const isTextBadge = isView || isPlay || isExplore || isPrev || isNext;

  return (
    <>
      {/* Outer Lag Ring / Badge */}
      <div
        className={`custom-cursor pointer-events-none fixed z-[9999] rounded-full transition-all duration-200 ease-out flex items-center justify-center ${ringClasses}`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      >
        {isView && (
          <span className="text-[10px] uppercase font-sans tracking-[0.2em] font-medium text-[#B59B78]">
            View
          </span>
        )}
        {isPlay && (
          <div className="flex items-center space-x-1">
            <svg className="w-3.5 h-3.5 text-[#B59B78] fill-current" viewBox="0 0 24 24">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span className="text-[10px] uppercase font-sans tracking-[0.15em] font-medium text-[#F8F6F2]">
              Play
            </span>
          </div>
        )}
        {isExplore && (
          <span className="text-[9px] uppercase font-sans tracking-[0.18em] font-medium text-[#B59B78]">
            Explore
          </span>
        )}
        {isPrev && (
          <span className="text-sm font-sans font-bold text-[#B59B78]">
            ←
          </span>
        )}
        {isNext && (
          <span className="text-sm font-sans font-bold text-[#B59B78]">
            →
          </span>
        )}
      </div>

      {/* Center Precise Dot (hidden when showing badges) */}
      {!isTextBadge && (
        <div
          className={`custom-cursor pointer-events-none fixed z-[10000] rounded-full transition-opacity duration-150 ${cursorClasses}`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        />
      )}
    </>
  );
}
