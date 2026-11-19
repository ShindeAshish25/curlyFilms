import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slideUp">
      <div className="flex items-center space-x-3 bg-[#252525] text-[#F8F6F2] border border-[#B59B78] px-5 py-3.5 rounded shadow-2xl backdrop-blur-md max-w-md">
        {type === 'success' && <CheckCircle className="w-5 h-5 text-[#B59B78] shrink-0" />}
        {type === 'error' && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}
        {type === 'info' && <Info className="w-5 h-5 text-[#B59B78] shrink-0" />}

        <div className="text-xs font-sans font-light tracking-wide flex-1">
          {message}
        </div>

        <button
          onClick={onClose}
          className="text-white/40 hover:text-white transition-colors ml-2"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
