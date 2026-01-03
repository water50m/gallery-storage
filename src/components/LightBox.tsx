'use client';
import { ImmichAsset } from '@/types/gallery';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useEffect, useCallback } from 'react';

interface LightboxProps {
  asset: ImmichAsset;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export default function Lightbox({ asset, isOpen, onClose, onNext, onPrev, hasPrev, hasNext }: LightboxProps) {
  // จัดการ Keyboard (กดปุ่มลูกศร)
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    if (e.key === 'ArrowRight' && hasNext) onNext();
  }, [onClose, onNext, onPrev, hasPrev, hasNext]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm">
      {/* Close Button */}
      <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-50">
        <X className="w-8 h-8" />
      </button>

      {/* Prev Button */}
      {hasPrev && (
        <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 z-50 transition-colors">
          <ChevronLeft className="w-10 h-10" />
        </button>
      )}

      {/* Content */}
      <div className="w-full h-full flex items-center justify-center p-4">
        {asset.type === 'VIDEO' ? (
          <video 
             src={`/api/immich/assets/${asset.id}/original`}
            controls 
            autoPlay 
            className="max-h-[90vh] max-w-full rounded shadow-2xl"
          />
        ) : (
          <img 
             src={`/api/immich/assets/${asset.id}/original`}
            alt="Full view" 
            className="max-h-[90vh] max-w-full object-contain rounded shadow-2xl"
          />
        )}
      </div>

      {/* Next Button */}
      {hasNext && (
        <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 z-50 transition-colors">
          <ChevronRight className="w-10 h-10" />
        </button>
      )}

      {/* Info Bar */}
      <div className="absolute bottom-4 left-0 w-full text-center text-white/60 text-sm">
        {new Date(asset.fileCreatedAt).toLocaleString()} • {asset.type}
      </div>
    </div>
  );
}