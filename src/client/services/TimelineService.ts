/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetOrder } from '../models/AssetOrder';
import type { AssetVisibility } from '../models/AssetVisibility';
import type { TimeBucketAssetResponseDto } from '../models/TimeBucketAssetResponseDto';
import type { TimeBucketsResponseDto } from '../models/TimeBucketsResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TimelineService {
    /**
     * Get time bucket
     * Retrieve a string of all asset ids in a given time bucket.
     * @param timeBucket Time bucket identifier in YYYY-MM-DD format (e.g., "2024-01-01" for January 2024)
     * @param albumId Filter assets belonging to a specific album
     * @param isFavorite Filter by favorite status (true for favorites only, false for non-favorites only)
     * @param isTrashed Filter by trash status (true for trashed assets only, false for non-trashed only)
     * @param key
     * @param order Sort order for assets within time buckets (ASC for oldest first, DESC for newest first)
     * @param personId Filter assets containing a specific person (face recognition)
     * @param slug
     * @param tagId Filter assets with a specific tag
     * @param userId Filter assets by specific user ID
     * @param visibility Filter by asset visibility status (ARCHIVE, TIMELINE, HIDDEN, LOCKED)
     * @param withCoordinates Include location data in the response
     * @param withPartners Include assets shared by partners
     * @param withStacked Include stacked assets in the response. When true, only primary assets from stacks are returned.
     * @returns TimeBucketAssetResponseDto
     * @throws ApiError
     */
    public static getTimeBucket(
        timeBucket: string,
        albumId?: string,
        isFavorite?: boolean,
        isTrashed?: boolean,
        key?: string,
        order?: AssetOrder,
        personId?: string,
        slug?: string,
        tagId?: string,
        userId?: string,
        visibility?: AssetVisibility,
        withCoordinates?: boolean,
        withPartners?: boolean,
        withStacked?: boolean,
    ): CancelablePromise<TimeBucketAssetResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/timeline/bucket',
            query: {
                'albumId': albumId,
                'isFavorite': isFavorite,
                'isTrashed': isTrashed,
                'key': key,
                'order': order,
                'personId': personId,
                'slug': slug,
                'tagId': tagId,
                'timeBucket': timeBucket,
                'userId': userId,
                'visibility': visibility,
                'withCoordinates': withCoordinates,
                'withPartners': withPartners,
                'withStacked': withStacked,
            },
        });
    }
    /**
     * Get time buckets
     * Retrieve a list of all minimal time buckets.
     * @param albumId Filter assets belonging to a specific album
     * @param isFavorite Filter by favorite status (true for favorites only, false for non-favorites only)
     * @param isTrashed Filter by trash status (true for trashed assets only, false for non-trashed only)
     * @param key
     * @param order Sort order for assets within time buckets (ASC for oldest first, DESC for newest first)
     * @param personId Filter assets containing a specific person (face recognition)
     * @param slug
     * @param tagId Filter assets with a specific tag
     * @param userId Filter assets by specific user ID
     * @param visibility Filter by asset visibility status (ARCHIVE, TIMELINE, HIDDEN, LOCKED)
     * @param withCoordinates Include location data in the response
     * @param withPartners Include assets shared by partners
     * @param withStacked Include stacked assets in the response. When true, only primary assets from stacks are returned.
     * @returns TimeBucketsResponseDto
     * @throws ApiError
     */
    public static getTimeBuckets(
        albumId?: string,
        isFavorite?: boolean,
        isTrashed?: boolean,
        key?: string,
        order?: AssetOrder,
        personId?: string,
        slug?: string,
        tagId?: string,
        userId?: string,
        visibility?: AssetVisibility,
        withCoordinates?: boolean,
        withPartners?: boolean,
        withStacked?: boolean,
    ): CancelablePromise<Array<TimeBucketsResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/timeline/buckets',
            query: {
                'albumId': albumId,
                'isFavorite': isFavorite,
                'isTrashed': isTrashed,
                'key': key,
                'order': order,
                'personId': personId,
                'slug': slug,
                'tagId': tagId,
                'userId': userId,
                'visibility': visibility,
                'withCoordinates': withCoordinates,
                'withPartners': withPartners,
                'withStacked': withStacked,
            },
        });
    }
}
