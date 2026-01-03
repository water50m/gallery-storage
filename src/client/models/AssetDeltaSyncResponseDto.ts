/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetResponseDto } from './AssetResponseDto';
export type AssetDeltaSyncResponseDto = {
    deleted: Array<string>;
    needsFullSync: boolean;
    upserted: Array<AssetResponseDto>;
};

