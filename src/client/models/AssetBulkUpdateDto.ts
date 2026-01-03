/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetVisibility } from './AssetVisibility';
export type AssetBulkUpdateDto = {
    dateTimeOriginal?: string;
    dateTimeRelative?: number;
    description?: string;
    duplicateId?: string | null;
    ids: Array<string>;
    isFavorite?: boolean;
    latitude?: number;
    longitude?: number;
    rating?: number;
    timeZone?: string;
    visibility?: AssetVisibility;
};

