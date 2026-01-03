/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetMetadataUpsertItemDto } from './AssetMetadataUpsertItemDto';
import type { AssetVisibility } from './AssetVisibility';
export type AssetMediaCreateDto = {
    assetData: Blob;
    deviceAssetId: string;
    deviceId: string;
    duration?: string;
    fileCreatedAt: string;
    fileModifiedAt: string;
    filename?: string;
    isFavorite?: boolean;
    livePhotoVideoId?: string;
    metadata: Array<AssetMetadataUpsertItemDto>;
    sidecarData?: Blob;
    visibility?: AssetVisibility;
};

