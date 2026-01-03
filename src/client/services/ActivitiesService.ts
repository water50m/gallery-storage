/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityCreateDto } from '../models/ActivityCreateDto';
import type { ActivityResponseDto } from '../models/ActivityResponseDto';
import type { ActivityStatisticsResponseDto } from '../models/ActivityStatisticsResponseDto';
import type { ReactionLevel } from '../models/ReactionLevel';
import type { ReactionType } from '../models/ReactionType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ActivitiesService {
    /**
     * List all activities
     * Returns a list of activities for the selected asset or album. The activities are returned in sorted order, with the oldest activities appearing first.
     * @param albumId
     * @param assetId
     * @param level
     * @param type
     * @param userId
     * @returns ActivityResponseDto
     * @throws ApiError
     */
    public static getActivities(
        albumId: string,
        assetId?: string,
        level?: ReactionLevel,
        type?: ReactionType,
        userId?: string,
    ): CancelablePromise<Array<ActivityResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activities',
            query: {
                'albumId': albumId,
                'assetId': assetId,
                'level': level,
                'type': type,
                'userId': userId,
            },
        });
    }
    /**
     * Create an activity
     * Create a like or a comment for an album, or an asset in an album.
     * @param requestBody
     * @returns ActivityResponseDto
     * @throws ApiError
     */
    public static createActivity(
        requestBody: ActivityCreateDto,
    ): CancelablePromise<ActivityResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activities',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve activity statistics
     * Returns the number of likes and comments for a given album or asset in an album.
     * @param albumId
     * @param assetId
     * @returns ActivityStatisticsResponseDto
     * @throws ApiError
     */
    public static getActivityStatistics(
        albumId: string,
        assetId?: string,
    ): CancelablePromise<ActivityStatisticsResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activities/statistics',
            query: {
                'albumId': albumId,
                'assetId': assetId,
            },
        });
    }
    /**
     * Delete an activity
     * Removes a like or comment from a given album or asset in an album.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteActivity(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/activities/{id}',
            path: {
                'id': id,
            },
        });
    }
}
