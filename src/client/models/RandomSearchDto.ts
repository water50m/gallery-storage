/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetTypeEnum } from './AssetTypeEnum';
import type { AssetVisibility } from './AssetVisibility';
export type RandomSearchDto = {
    albumIds?: Array<string>;
    city?: string | null;
    country?: string | null;
    createdAfter?: string;
    createdBefore?: string;
    deviceId?: string;
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
    personIds?: Array<string>;
    rating?: number;
    size?: number;
    state?: string | null;
    tagIds?: Array<string> | null;
    takenAfter?: string;
    takenBefore?: string;
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

