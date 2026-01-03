export interface ImmichAsset {
  id: string;
  originalFileName: string;
  type: 'IMAGE' | 'VIDEO';
  fileCreatedAt: string;
  duration?: string; // สำหรับวิดีโอ
}

export type GridSize = 'small' | 'medium' | 'large';

export const GRID_STYLES = {
  small: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8',
  medium: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
  large: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
};