/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetBulkDeleteDto } from '../models/AssetBulkDeleteDto';
import type { AssetBulkUpdateDto } from '../models/AssetBulkUpdateDto';
import type { AssetBulkUploadCheckDto } from '../models/AssetBulkUploadCheckDto';
import type { AssetBulkUploadCheckResponseDto } from '../models/AssetBulkUploadCheckResponseDto';
import type { AssetCopyDto } from '../models/AssetCopyDto';
import type { AssetJobsDto } from '../models/AssetJobsDto';
import type { AssetMediaCreateDto } from '../models/AssetMediaCreateDto';
import type { AssetMediaReplaceDto } from '../models/AssetMediaReplaceDto';
import type { AssetMediaResponseDto } from '../models/AssetMediaResponseDto';
import type { AssetMediaSize } from '../models/AssetMediaSize';
import type { AssetMetadataKey } from '../models/AssetMetadataKey';
import type { AssetMetadataResponseDto } from '../models/AssetMetadataResponseDto';
import type { AssetMetadataUpsertDto } from '../models/AssetMetadataUpsertDto';
import type { AssetOcrResponseDto } from '../models/AssetOcrResponseDto';
import type { AssetResponseDto } from '../models/AssetResponseDto';
import type { AssetStatsResponseDto } from '../models/AssetStatsResponseDto';
import type { AssetVisibility } from '../models/AssetVisibility';
import type { CheckExistingAssetsDto } from '../models/CheckExistingAssetsDto';
import type { CheckExistingAssetsResponseDto } from '../models/CheckExistingAssetsResponseDto';
import type { UpdateAssetDto } from '../models/UpdateAssetDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AssetsService {
    /**
     * Delete assets
     * Deletes multiple assets at the same time.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static deleteAssets(
        requestBody: AssetBulkDeleteDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/assets',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Upload asset
     * Uploads a new asset to the server.
     * @param formData Asset Upload Information
     * @param key
     * @param slug
     * @param xImmichChecksum sha1 checksum that can be used for duplicate detection before the file is uploaded
     * @returns AssetMediaResponseDto
     * @throws ApiError
     */
    public static uploadAsset(
        formData: AssetMediaCreateDto,
        key?: string,
        slug?: string,
        xImmichChecksum?: string,
    ): CancelablePromise<AssetMediaResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/assets',
            headers: {
                'x-immich-checksum': xImmichChecksum,
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
     * Update assets
     * Updates multiple assets at the same time.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateAssets(
        requestBody: AssetBulkUpdateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/assets',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Check bulk upload
     * Determine which assets have already been uploaded to the server based on their SHA1 checksums.
     * @param requestBody
     * @returns AssetBulkUploadCheckResponseDto
     * @throws ApiError
     */
    public static checkBulkUpload(
        requestBody: AssetBulkUploadCheckDto,
    ): CancelablePromise<AssetBulkUploadCheckResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/assets/bulk-upload-check',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Copy asset
     * Copy asset information like albums, tags, etc. from one asset to another.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static copyAsset(
        requestBody: AssetCopyDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/assets/copy',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
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
     * Check existing assets
     * Checks if multiple assets exist on the server and returns all existing - used by background backup
     * @param requestBody
     * @returns CheckExistingAssetsResponseDto
     * @throws ApiError
     */
    public static checkExistingAssets(
        requestBody: CheckExistingAssetsDto,
    ): CancelablePromise<CheckExistingAssetsResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/assets/exist',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Run an asset job
     * Run a specific job on a set of assets.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static runAssetJobs(
        requestBody: AssetJobsDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/assets/jobs',
            body: requestBody,
            mediaType: 'application/json',
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
     * Get asset statistics
     * Retrieve various statistics about the assets owned by the authenticated user.
     * @param isFavorite
     * @param isTrashed
     * @param visibility
     * @returns AssetStatsResponseDto
     * @throws ApiError
     */
    public static getAssetStatistics(
        isFavorite?: boolean,
        isTrashed?: boolean,
        visibility?: AssetVisibility,
    ): CancelablePromise<AssetStatsResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assets/statistics',
            query: {
                'isFavorite': isFavorite,
                'isTrashed': isTrashed,
                'visibility': visibility,
            },
        });
    }
    /**
     * Retrieve an asset
     * Retrieve detailed information about a specific asset.
     * @param id
     * @param key
     * @param slug
     * @returns AssetResponseDto
     * @throws ApiError
     */
    public static getAssetInfo(
        id: string,
        key?: string,
        slug?: string,
    ): CancelablePromise<AssetResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assets/{id}',
            path: {
                'id': id,
            },
            query: {
                'key': key,
                'slug': slug,
            },
        });
    }
    /**
     * Update an asset
     * Update information of a specific asset.
     * @param id
     * @param requestBody
     * @returns AssetResponseDto
     * @throws ApiError
     */
    public static updateAsset(
        id: string,
        requestBody: UpdateAssetDto,
    ): CancelablePromise<AssetResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/assets/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get asset metadata
     * Retrieve all metadata key-value pairs associated with the specified asset.
     * @param id
     * @returns AssetMetadataResponseDto
     * @throws ApiError
     */
    public static getAssetMetadata(
        id: string,
    ): CancelablePromise<Array<AssetMetadataResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assets/{id}/metadata',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update asset metadata
     * Update or add metadata key-value pairs for the specified asset.
     * @param id
     * @param requestBody
     * @returns AssetMetadataResponseDto
     * @throws ApiError
     */
    public static updateAssetMetadata(
        id: string,
        requestBody: AssetMetadataUpsertDto,
    ): CancelablePromise<Array<AssetMetadataResponseDto>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/assets/{id}/metadata',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete asset metadata by key
     * Delete a specific metadata key-value pair associated with the specified asset.
     * @param id
     * @param key
     * @returns void
     * @throws ApiError
     */
    public static deleteAssetMetadata(
        id: string,
        key: AssetMetadataKey,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/assets/{id}/metadata/{key}',
            path: {
                'id': id,
                'key': key,
            },
        });
    }
    /**
     * Retrieve asset metadata by key
     * Retrieve the value of a specific metadata key associated with the specified asset.
     * @param id
     * @param key
     * @returns AssetMetadataResponseDto
     * @throws ApiError
     */
    public static getAssetMetadataByKey(
        id: string,
        key: AssetMetadataKey,
    ): CancelablePromise<AssetMetadataResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assets/{id}/metadata/{key}',
            path: {
                'id': id,
                'key': key,
            },
        });
    }
    /**
     * Retrieve asset OCR data
     * Retrieve all OCR (Optical Character Recognition) data associated with the specified asset.
     * @param id
     * @returns AssetOcrResponseDto
     * @throws ApiError
     */
    public static getAssetOcr(
        id: string,
    ): CancelablePromise<Array<AssetOcrResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assets/{id}/ocr',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Download original asset
     * Downloads the original file of the specified asset.
     * @param id
     * @param key
     * @param slug
     * @returns binary
     * @throws ApiError
     */
    public static downloadAsset(
        id: string,
        key?: string,
        slug?: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assets/{id}/original',
            path: {
                'id': id,
            },
            query: {
                'key': key,
                'slug': slug,
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
     * View asset thumbnail
     * Retrieve the thumbnail image for the specified asset.
     * @param id
     * @param key
     * @param size
     * @param slug
     * @returns binary
     * @throws ApiError
     */
    public static viewAsset(
        id: string,
        key?: string,
        size?: AssetMediaSize,
        slug?: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assets/{id}/thumbnail',
            path: {
                'id': id,
            },
            query: {
                'key': key,
                'size': size,
                'slug': slug,
            },
        });
    }
    /**
     * Play asset video
     * Streams the video file for the specified asset. This endpoint also supports byte range requests.
     * @param id
     * @param key
     * @param slug
     * @returns binary
     * @throws ApiError
     */
    public static playAssetVideo(
        id: string,
        key?: string,
        slug?: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assets/{id}/video/playback',
            path: {
                'id': id,
            },
            query: {
                'key': key,
                'slug': slug,
            },
        });
    }
}
