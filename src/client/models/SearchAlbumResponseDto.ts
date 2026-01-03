/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AlbumResponseDto } from './AlbumResponseDto';
import type { SearchFacetResponseDto } from './SearchFacetResponseDto';
export type SearchAlbumResponseDto = {
    count: number;
    facets: Array<SearchFacetResponseDto>;
    items: Array<AlbumResponseDto>;
    total: number;
};

