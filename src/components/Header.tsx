'use client';
import { Search, Upload, Grid3X3, Grid, Square, Sun, Moon, Loader2 } from 'lucide-react';
import { GridSize } from '@/types/gallery';
import { useRef, useState } from 'react';

interface HeaderProps {
  onSearch: (term: string) => void;
  onUpload: (file: File) => Promise<void>;
  gridSize: GridSize;
  setGridSize: (size: GridSize) => void;
  isUploading: boolean;
}

export default function Header({ onSearch, onUpload, gridSize, setGridSize, isUploading }: HeaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    for (const file of Array.from(files)) {
      onUpload(file); // เรียก handleUpload ทีละไฟล์
    }

    e.target.value = ''; // reset input (เลือกไฟล์เดิมซ้ำได้)
  };
  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 px-4 py-3 shadow-sm">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-purple-600 p-1.5 rounded-lg"><Grid3X3 className="text-white w-5 h-5" /></div>
          <h1 className="font-bold text-xl hidden sm:block">My Gallery</h1>
        </div>

        {/* Search */}
        <div className="relative flex-1 max-w-md w-full">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search date or name..." 
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          {/* Grid Toggles */}
          <button onClick={() => setGridSize('small')} className={`p-1.5 rounded ${gridSize === 'small' ? 'bg-white dark:bg-gray-700 shadow' : 'text-gray-500'}`}><Grid3X3 className="w-4 h-4" /></button>
          <button onClick={() => setGridSize('medium')} className={`p-1.5 rounded ${gridSize === 'medium' ? 'bg-white dark:bg-gray-700 shadow' : 'text-gray-500'}`}><Grid className="w-4 h-4" /></button>
          <button onClick={() => setGridSize('large')} className={`p-1.5 rounded ${gridSize === 'large' ? 'bg-white dark:bg-gray-700 shadow' : 'text-gray-500'}`}><Square className="w-4 h-4" /></button>
        </div>

        {/* Upload Button */}
        <button 
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors disabled:opacity-50"
        >
          {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
          <span>Upload</span>
        </button>
        <input ref={fileInputRef} type="file" accept="image/*,video/*" onChange={handleFileChange} className="hidden" />
      </div>
    </header>
  );
}