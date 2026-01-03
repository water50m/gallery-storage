/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetResponseDto } from './AssetResponseDto';
import type { SearchFacetResponseDto } from './SearchFacetResponseDto';
export type SearchAssetResponseDto = {
    count: number;
    facets: Array<SearchFacetResponseDto>;
    items: Array<AssetResponseDto>;
    nextPage: string | null;
    total: number;
};

