/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetOrder } from './AssetOrder';
import type { AssetTypeEnum } from './AssetTypeEnum';
import type { AssetVisibility } from './AssetVisibility';
export type MetadataSearchDto = {
    albumIds?: Array<string>;
    checksum?: string;
    city?: string | null;
    country?: string | null;
    createdAfter?: string;
    createdBefore?: string;
    description?: string;
    deviceAssetId?: string;
    deviceId?: string;
    encodedVideoPath?: string;
    id?: string;
    isEncoded?: boolean;
    isFavorite?: boolean;
    isMotion?: boolean;
    isNotInAlbum?: boolean;
    isOffline?: boolean;
    lensModel?: string | null;
    libraryId?: string | null;
    make?: string;
    model?: string | null;
    ocr?: string;
    order?: AssetOrder;
    originalFileName?: string;
    originalPath?: string;
    page?: number;
    personIds?: Array<string>;
    previewPath?: string;
    rating?: number;
    size?: number;
    state?: string | null;
    tagIds?: Array<string> | null;
    takenAfter?: string;
    takenBefore?: string;
    thumbnailPath?: string;
    trashedAfter?: string;
    trashedBefore?: string;
    type?: AssetTypeEnum;
    updatedAfter?: string;
    updatedBefore?: string;
    visibility?: AssetVisibility;
    withDeleted?: boolean;
    withExif?: boolean;
    withPeople?: boolean;
    withStacked?: boolean;
};

