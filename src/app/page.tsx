'use client';
import { useState, useEffect, useMemo } from 'react';
import Header from '@/components/Header';
import PhotoGrid from '@/components/PhotoGrid';
import Lightbox from '@/components/LightBox';
import { ImmichAsset, GridSize } from '@/types/gallery';

export default function Home() {
  const [assets, setAssets] = useState<ImmichAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [gridSize, setGridSize] = useState<GridSize>('medium');
  const [uploading, setUploading] = useState(false);
  
  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // 1. Fetch Data
  const fetchAssets = async () => {
    try {
      setLoading(true);

      const res = await fetch('/api/immich/assets', {
        method: 'GET',
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const data = await res.json();

      if (Array.isArray(data)) {
        setAssets(data);
        console.log('✅ Loaded assets:', data.length);
      } else {
        console.error('❌ Invalid data format:', data);
        setAssets([]);
      }
    } catch (err) {
      console.error('❌ Fetch assets failed:', err);
      setAssets([]);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => { fetchAssets(); }, []);

  // 2. Upload Logic
  const handleUpload = async (file: File) => {
    setUploading(true);

    const formData = new FormData();
    const timestamp = new Date().toISOString();

    formData.append('deviceAssetId', `${Date.now()}-${file.name}`);
    formData.append('deviceId', 'WEB');
    formData.append('fileCreatedAt', timestamp);
    formData.append('fileModifiedAt', timestamp);
    formData.append('assetData', file);

    try {
      const res = await fetch('/api/immich/assets', {
        method: 'POST',
        body: formData, // ❗ ห้ามใส่ headers
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      alert('✅ Upload successful');
      fetchAssets(); // โหลดรูปใหม่

    } catch (err) {
      console.error(err);
      alert('❌ Upload failed');
    } finally {
      setUploading(false);
    }
  };

  

  // 3. Sorting & Filtering
  const filteredAssets = useMemo(() => {
    let result = [...assets];
    
    // Sort by Date (Newest first)
    result.sort((a, b) => new Date(b.fileCreatedAt).getTime() - new Date(a.fileCreatedAt).getTime());

    // Filter by Search
    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      result = result.filter(a => 
        a.originalFileName.toLowerCase().includes(lower) || 
        a.fileCreatedAt.includes(lower)
      );
    }
    return result;
  }, [assets, searchTerm]);

  // Lightbox Handlers
  const currentAsset = lightboxIndex !== null ? filteredAssets[lightboxIndex] : null;
  const handleNext = () => lightboxIndex !== null && setLightboxIndex((prev) => (prev! + 1) % filteredAssets.length);
  const handlePrev = () => lightboxIndex !== null && setLightboxIndex((prev) => (prev! - 1 + filteredAssets.length) % filteredAssets.length);

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 pb-20">
      <Header 
        onSearch={setSearchTerm} 
        onUpload={handleUpload} 
        gridSize={gridSize} 
        setGridSize={setGridSize}
        isUploading={uploading}
      />

      <div className="container mx-auto px-4 py-6">
        {loading ? (
          <div className="flex justify-center pt-20"><span className="animate-pulse">Loading gallery...</span></div>
        ) : (
          <>
            <div className="mb-4 text-sm text-gray-500">
              {filteredAssets.length} items found
            </div>
            <PhotoGrid 
              assets={filteredAssets} 
              gridSize={gridSize} 
              onAssetClick={(index) => setLightboxIndex(index)}
            />
          </>
        )}
      </div>

      {/* Lightbox Overlay */}
      {currentAsset && (
        <Lightbox 
          asset={currentAsset}
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={filteredAssets.length > 1}
          hasPrev={filteredAssets.length > 1}
        />
      )}
    </main>
  );
}