import React, { useState } from 'react';
import { X, Upload, Image as ImageIcon, RotateCcw, Check } from 'lucide-react';
import { portfolioData } from '../portfolioData';

interface PhotoCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
  onUpdatePhoto: (newPhoto: string) => void;
  onResetPhoto: () => void;
}

export const PhotoCustomizerModal: React.FC<PhotoCustomizerModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onUpdatePhoto,
  onResetPhoto,
}) => {
  const [photoUrlInput, setPhotoUrlInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please select an image file (.jpg, .png, .webp).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        onUpdatePhoto(result);
        onClose();
      }
    };
    reader.readAsDataURL(file);
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoUrlInput.trim()) return;

    onUpdatePhoto(photoUrlInput.trim());
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="photo-modal-title"
    >
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-teal-500" />
            <h3 id="photo-modal-title" className="text-base font-bold text-slate-900 dark:text-white">
              Profile Photo Settings
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Current preview */}
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="w-28 h-28 rounded-full border-2 border-teal-400/50 p-1 shadow-lg overflow-hidden bg-slate-950">
              <img
                src={currentPhoto}
                alt="Current profile preview"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
              Active Circular Hero Photo
            </p>
          </div>

          {/* Option 1: Upload from Device */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
              Upload from Device
            </label>
            <label className="w-full py-3 px-4 border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-teal-500 rounded-xl cursor-pointer flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-teal-500 transition-colors">
              <Upload className="w-4 h-4" />
              <span>Select image from computer</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
            {errorMsg && <p className="text-xs text-red-500">{errorMsg}</p>}
          </div>

          {/* Option 2: Image URL */}
          <form onSubmit={handleUrlSubmit} className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
              Or Enter Direct Image URL
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                value={photoUrlInput}
                onChange={(e) => setPhotoUrlInput(e.target.value)}
                placeholder="https://example.com/photo.jpg"
                className="flex-1 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs rounded-xl transition-colors"
              >
                Apply
              </button>
            </div>
          </form>

          {/* Option 3: Reset to Default Photo */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <button
              onClick={() => {
                onResetPhoto();
                onClose();
              }}
              className="text-xs font-semibold text-slate-500 hover:text-teal-500 flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Default Portrait</span>
            </button>

            <span className="text-[11px] text-slate-400">
              Also editable in <code className="font-mono">portfolioData.ts</code>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
