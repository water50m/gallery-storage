/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetTypeEnum } from './AssetTypeEnum';
import type { AssetVisibility } from './AssetVisibility';
export type SyncAssetV1 = {
    checksum: string;
    deletedAt: string | null;
    duration: string | null;
    fileCreatedAt: string | null;
    fileModifiedAt: string | null;
    id: string;
    isFavorite: boolean;
    libraryId: string | null;
    livePhotoVideoId: string | null;
    localDateTime: string | null;
    originalFileName: string;
    ownerId: string;
    stackId: string | null;
    thumbhash: string | null;
    type: AssetTypeEnum;
    visibility: AssetVisibility;
};

