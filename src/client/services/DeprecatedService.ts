/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetDeltaSyncDto } from '../models/AssetDeltaSyncDto';
import type { AssetDeltaSyncResponseDto } from '../models/AssetDeltaSyncResponseDto';
import type { AssetFullSyncDto } from '../models/AssetFullSyncDto';
import type { AssetMediaReplaceDto } from '../models/AssetMediaReplaceDto';
import type { AssetMediaResponseDto } from '../models/AssetMediaResponseDto';
import type { AssetResponseDto } from '../models/AssetResponseDto';
import type { PartnerResponseDto } from '../models/PartnerResponseDto';
import type { QueueCommandDto } from '../models/QueueCommandDto';
import type { QueueName } from '../models/QueueName';
import type { QueueResponseLegacyDto } from '../models/QueueResponseLegacyDto';
import type { QueuesResponseLegacyDto } from '../models/QueuesResponseLegacyDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DeprecatedService {
    /**
     * @deprecated
     * Retrieve assets by device ID
     * Get all asset of a device that are in the database, ID only.
     * @param deviceId
     * @returns string
     * @throws ApiError
     */
    public static getAllUserAssetsByDeviceId(
        deviceId: string,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assets/device/{deviceId}',
            path: {
                'deviceId': deviceId,
            },
        });
    }
    /**
     * @deprecated
     * Get random assets
     * Retrieve a specified number of random assets for the authenticated user.
     * @param count
     * @returns AssetResponseDto
     * @throws ApiError
     */
    public static getRandom(
        count?: number,
    ): CancelablePromise<Array<AssetResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assets/random',
            query: {
                'count': count,
            },
        });
    }
    /**
     * @deprecated
     * Replace asset
     * Replace the asset with new file, without changing its id.
     * @param id
     * @param formData
     * @param key
     * @param slug
     * @returns AssetMediaResponseDto
     * @throws ApiError
     */
    public static replaceAsset(
        id: string,
        formData: AssetMediaReplaceDto,
        key?: string,
        slug?: string,
    ): CancelablePromise<AssetMediaResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/assets/{id}/original',
            path: {
                'id': id,
            },
            query: {
                'key': key,
                'slug': slug,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @deprecated
     * Retrieve queue counts and status
     * Retrieve the counts of the current queue, as well as the current status.
     * @returns QueuesResponseLegacyDto
     * @throws ApiError
     */
    public static getQueuesLegacy(): CancelablePromise<QueuesResponseLegacyDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/jobs',
        });
    }
    /**
     * @deprecated
     * Run jobs
     * Queue all assets for a specific job type. Defaults to only queueing assets that have not yet been processed, but the force command can be used to re-process all assets.
     * @param name
     * @param requestBody
     * @returns QueueResponseLegacyDto
     * @throws ApiError
     */
    public static runQueueCommandLegacy(
        name: QueueName,
        requestBody: QueueCommandDto,
    ): CancelablePromise<QueueResponseLegacyDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/jobs/{name}',
            path: {
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @deprecated
     * Create a partner
     * Create a new partner to share assets with.
     * @param id
     * @returns PartnerResponseDto
     * @throws ApiError
     */
    public static createPartnerDeprecated(
        id: string,
    ): CancelablePromise<PartnerResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/partners/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @deprecated
     * Get delta sync for user
     * Retrieve changed assets since the last sync for the authenticated user.
     * @param requestBody
     * @returns AssetDeltaSyncResponseDto
     * @throws ApiError
     */
    public static getDeltaSync(
        requestBody: AssetDeltaSyncDto,
    ): CancelablePromise<AssetDeltaSyncResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sync/delta-sync',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @deprecated
     * Get full sync for user
     * Retrieve all assets for a full synchronization for the authenticated user.
     * @param requestBody
     * @returns AssetResponseDto
     * @throws ApiError
     */
    public static getFullSyncForUser(
        requestBody: AssetFullSyncDto,
    ): CancelablePromise<Array<AssetResponseDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sync/full-sync',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
