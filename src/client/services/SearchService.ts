/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetResponseDto } from '../models/AssetResponseDto';
import type { AssetTypeEnum } from '../models/AssetTypeEnum';
import type { AssetVisibility } from '../models/AssetVisibility';
import type { MetadataSearchDto } from '../models/MetadataSearchDto';
import type { PersonResponseDto } from '../models/PersonResponseDto';
import type { PlacesResponseDto } from '../models/PlacesResponseDto';
import type { RandomSearchDto } from '../models/RandomSearchDto';
import type { SearchExploreResponseDto } from '../models/SearchExploreResponseDto';
import type { SearchResponseDto } from '../models/SearchResponseDto';
import type { SearchStatisticsResponseDto } from '../models/SearchStatisticsResponseDto';
import type { SearchSuggestionType } from '../models/SearchSuggestionType';
import type { SmartSearchDto } from '../models/SmartSearchDto';
import type { StatisticsSearchDto } from '../models/StatisticsSearchDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SearchService {
    /**
     * Retrieve assets by city
     * Retrieve a list of assets with each asset belonging to a different city. This endpoint is used on the places pages to show a single thumbnail for each city the user has assets in.
     * @returns AssetResponseDto
     * @throws ApiError
     */
    public static getAssetsByCity(): CancelablePromise<Array<AssetResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/search/cities',
        });
    }
    /**
     * Retrieve explore data
     * Retrieve data for the explore section, such as popular people and places.
     * @returns SearchExploreResponseDto
     * @throws ApiError
     */
    public static getExploreData(): CancelablePromise<Array<SearchExploreResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/search/explore',
        });
    }
    /**
     * Search large assets
     * Search for assets that are considered large based on specified criteria.
     * @param albumIds
     * @param city
     * @param country
     * @param createdAfter
     * @param createdBefore
     * @param deviceId
     * @param isEncoded
     * @param isFavorite
     * @param isMotion
     * @param isNotInAlbum
     * @param isOffline
     * @param lensModel
     * @param libraryId
     * @param make
     * @param minFileSize
     * @param model
     * @param ocr
     * @param personIds
     * @param rating
     * @param size
     * @param state
     * @param tagIds
     * @param takenAfter
     * @param takenBefore
     * @param trashedAfter
     * @param trashedBefore
     * @param type
     * @param updatedAfter
     * @param updatedBefore
     * @param visibility
     * @param withDeleted
     * @param withExif
     * @returns AssetResponseDto
     * @throws ApiError
     */
    public static searchLargeAssets(
        albumIds?: Array<string>,
        city?: string | null,
        country?: string | null,
        createdAfter?: string,
        createdBefore?: string,
        deviceId?: string,
        isEncoded?: boolean,
        isFavorite?: boolean,
        isMotion?: boolean,
        isNotInAlbum?: boolean,
        isOffline?: boolean,
        lensModel?: string | null,
        libraryId?: string | null,
        make?: string,
        minFileSize?: number,
        model?: string | null,
        ocr?: string,
        personIds?: Array<string>,
        rating?: number,
        size?: number,
        state?: string | null,
        tagIds?: Array<string> | null,
        takenAfter?: string,
        takenBefore?: string,
        trashedAfter?: string,
        trashedBefore?: string,
        type?: AssetTypeEnum,
        updatedAfter?: string,
        updatedBefore?: string,
        visibility?: AssetVisibility,
        withDeleted?: boolean,
        withExif?: boolean,
    ): CancelablePromise<Array<AssetResponseDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/search/large-assets',
            query: {
                'albumIds': albumIds,
                'city': city,
                'country': country,
                'createdAfter': createdAfter,
                'createdBefore': createdBefore,
                'deviceId': deviceId,
                'isEncoded': isEncoded,
                'isFavorite': isFavorite,
                'isMotion': isMotion,
                'isNotInAlbum': isNotInAlbum,
                'isOffline': isOffline,
                'lensModel': lensModel,
                'libraryId': libraryId,
                'make': make,
                'minFileSize': minFileSize,
                'model': model,
                'ocr': ocr,
                'personIds': personIds,
                'rating': rating,
                'size': size,
                'state': state,
                'tagIds': tagIds,
                'takenAfter': takenAfter,
                'takenBefore': takenBefore,
                'trashedAfter': trashedAfter,
                'trashedBefore': trashedBefore,
                'type': type,
                'updatedAfter': updatedAfter,
                'updatedBefore': updatedBefore,
                'visibility': visibility,
                'withDeleted': withDeleted,
                'withExif': withExif,
            },
        });
    }
    /**
     * Search assets by metadata
     * Search for assets based on various metadata criteria.
     * @param requestBody
     * @returns SearchResponseDto
     * @throws ApiError
     */
    public static searchAssets(
        requestBody: MetadataSearchDto,
    ): CancelablePromise<SearchResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/search/metadata',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Search people
     * Search for people by name.
     * @param name
     * @param withHidden
     * @returns PersonResponseDto
     * @throws ApiError
     */
    public static searchPerson(
        name: string,
        withHidden?: boolean,
    ): CancelablePromise<Array<PersonResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/search/person',
            query: {
                'name': name,
                'withHidden': withHidden,
            },
        });
    }
    /**
     * Search places
     * Search for places by name.
     * @param name
     * @returns PlacesResponseDto
     * @throws ApiError
     */
    public static searchPlaces(
        name: string,
    ): CancelablePromise<Array<PlacesResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/search/places',
            query: {
                'name': name,
            },
        });
    }
    /**
     * Search random assets
     * Retrieve a random selection of assets based on the provided criteria.
     * @param requestBody
     * @returns AssetResponseDto
     * @throws ApiError
     */
    public static searchRandom(
        requestBody: RandomSearchDto,
    ): CancelablePromise<Array<AssetResponseDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/search/random',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Smart asset search
     * Perform a smart search for assets by using machine learning vectors to determine relevance.
     * @param requestBody
     * @returns SearchResponseDto
     * @throws ApiError
     */
    public static searchSmart(
        requestBody: SmartSearchDto,
    ): CancelablePromise<SearchResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/search/smart',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Search asset statistics
     * Retrieve statistical data about assets based on search criteria, such as the total matching count.
     * @param requestBody
     * @returns SearchStatisticsResponseDto
     * @throws ApiError
     */
    public static searchAssetStatistics(
        requestBody: StatisticsSearchDto,
    ): CancelablePromise<SearchStatisticsResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/search/statistics',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve search suggestions
     * Retrieve search suggestions based on partial input. This endpoint is used for typeahead search features.
     * @param type
     * @param country
     * @param includeNull
     * @param lensModel
     * @param make
     * @param model
     * @param state
     * @returns string
     * @throws ApiError
     */
    public static getSearchSuggestions(
        type: SearchSuggestionType,
        country?: string,
        includeNull?: boolean,
        lensModel?: string,
        make?: string,
        model?: string,
        state?: string,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/search/suggestions',
            query: {
                'country': country,
                'includeNull': includeNull,
                'lensModel': lensModel,
                'make': make,
                'model': model,
                'state': state,
                'type': type,
            },
        });
    }
}
