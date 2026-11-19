import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Camera, MapPin, Share2, Info } from 'lucide-react';

export default function LightboxModal({ photos, activeIndex, onClose, onPrev, onNext, showToast }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [showDetails, setShowDetails] = useState(true);

  const currentPhoto = photos[activeIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        setIsZoomed(false);
        onPrev();
      }
      if (e.key === 'ArrowRight') {
        setIsZoomed(false);
        onNext();
      }
      if (e.key === 'z' || e.key === 'Z') setIsZoomed((prev) => !prev);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!currentPhoto) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    if (showToast) showToast('Link copied to clipboard');
  };

  const handlePrev = () => {
    setIsZoomed(false);
    onPrev();
  };

  const handleNext = () => {
    setIsZoomed(false);
    onNext();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fadeIn select-none">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center space-x-4">
          <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#B59B78]">
            {activeIndex + 1} / {photos.length}
          </span>
          <span className="hidden sm:inline text-xs text-white/40">|</span>
          <span className="hidden sm:inline font-serif text-sm text-white/90">
            {currentPhoto.title}
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 text-white/70 hover:text-white rounded-full bg-black/40 hover:bg-black/80 transition-colors"
            title={isZoomed ? 'Zoom Out' : 'Zoom In'}
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className={`p-2 rounded-full transition-colors ${
              showDetails ? 'bg-[#B59B78] text-white' : 'text-white/70 hover:text-white bg-black/40'
            }`}
            title="Toggle Metadata"
          >
            <Info className="w-4 h-4" />
          </button>

          <button
            onClick={handleShare}
            className="p-2 text-white/70 hover:text-white rounded-full bg-black/40 hover:bg-black/80 transition-colors"
            title="Share Photo"
          >
            <Share2 className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-full bg-black/40 hover:bg-black/80 transition-colors ml-2"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 z-20 p-3 rounded-full bg-black/40 hover:bg-[#B59B78] text-white transition-all hover:scale-110 focus:outline-none"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 z-20 p-3 rounded-full bg-black/40 hover:bg-[#B59B78] text-white transition-all hover:scale-110 focus:outline-none"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Stage */}
      <div className="w-full h-full flex items-center justify-center p-4 sm:p-12 overflow-hidden">
        <div
          className={`relative max-w-full max-h-[82vh] transition-transform duration-300 ease-out cursor-pointer ${
            isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            key={currentPhoto.id}
            src={currentPhoto.imageUrl}
            alt={currentPhoto.title}
            className="max-w-full max-h-[80vh] object-contain mx-auto shadow-2xl rounded-sm"
          />
        </div>
      </div>

      {/* Bottom Information Card (Collapsible) */}
      {showDetails && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-[#1E1E1E]/90 backdrop-blur-md border border-[#B59B78]/30 px-6 py-3.5 rounded-lg shadow-2xl max-w-xl w-[90%] sm:w-auto transition-all animate-slideUp">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <h4 className="font-serif text-sm text-[#F8F6F2] font-semibold">
                {currentPhoto.title}
              </h4>
              <div className="flex items-center space-x-2 text-[#B59B78] mt-0.5 font-sans text-[11px]">
                <MapPin className="w-3 h-3" />
                <span>{currentPhoto.location}</span>
                <span>•</span>
                <span>{currentPhoto.category}</span>
                {currentPhoto.client && (
                  <>
                    <span>•</span>
                    <span className="text-white/60">{currentPhoto.client}</span>
                  </>
                )}
              </div>
            </div>

            {/* Camera Specs */}
            {(currentPhoto.camera || currentPhoto.lens) && (
              <div className="border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-0 sm:pl-4 flex items-center space-x-2 text-[11px] text-white/70 font-mono">
                <Camera className="w-3.5 h-3.5 text-[#B59B78]" />
                <div>
                  <div className="text-white/90">{currentPhoto.camera}</div>
                  <div className="text-[#B59B78] text-[10px]">{currentPhoto.lens} {currentPhoto.exif ? `• ${currentPhoto.exif}` : ''}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
