/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetIdsDto } from '../models/AssetIdsDto';
import type { DownloadInfoDto } from '../models/DownloadInfoDto';
import type { DownloadResponseDto } from '../models/DownloadResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DownloadService {
    /**
     * Download asset archive
     * Download a ZIP archive containing the specified assets. The assets must have been previously requested via the "getDownloadInfo" endpoint.
     * @param requestBody
     * @param key
     * @param slug
     * @returns binary
     * @throws ApiError
     */
    public static downloadArchive(
        requestBody: AssetIdsDto,
        key?: string,
        slug?: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/download/archive',
            query: {
                'key': key,
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve download information
     * Retrieve information about how to request a download for the specified assets or album. The response includes groups of assets that can be downloaded together.
     * @param requestBody
     * @param key
     * @param slug
     * @returns DownloadResponseDto
     * @throws ApiError
     */
    public static getDownloadInfo(
        requestBody: DownloadInfoDto,
        key?: string,
        slug?: string,
    ): CancelablePromise<DownloadResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/download/info',
            query: {
                'key': key,
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
