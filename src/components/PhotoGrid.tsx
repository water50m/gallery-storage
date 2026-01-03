import { ImmichAsset, GridSize, GRID_STYLES } from '@/types/gallery';
import { PlayCircle } from 'lucide-react';

interface PhotoGridProps {
  assets: ImmichAsset[];
  gridSize: GridSize;
  onAssetClick: (index: number) => void;
}

export default function PhotoGrid({ assets, gridSize, onAssetClick }: PhotoGridProps) {
  if (assets.length === 0) {
    return <div className="text-center py-20 text-gray-500">No photos or videos found.</div>;
  }

  return (
    <div className={`grid gap-1 ${GRID_STYLES[gridSize]} auto-rows-fr`}>
      {assets.map((asset, index) => (
        <div 
          key={asset.id} 
          onClick={() => onAssetClick(index)}
          className="relative aspect-square group cursor-pointer overflow-hidden bg-gray-200 dark:bg-gray-800 rounded-lg hover:opacity-90 transition-opacity"
        >
          <img 
             src={`/api/immich/assets/${asset.id}/thumbnail`}
            alt={asset.originalFileName}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Video Indicator */}
          {asset.type === 'VIDEO' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <PlayCircle className="w-10 h-10 text-white opacity-80" />
            </div>
          )}
          
          {/* Overlay Date (Optional) */}
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-xs text-white truncate">{new Date(asset.fileCreatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
}