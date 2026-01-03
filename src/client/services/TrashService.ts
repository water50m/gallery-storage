/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkIdsDto } from '../models/BulkIdsDto';
import type { TrashResponseDto } from '../models/TrashResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TrashService {
    /**
     * Empty trash
     * Permanently delete all items in the trash.
     * @returns TrashResponseDto
     * @throws ApiError
     */
    public static emptyTrash(): CancelablePromise<TrashResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/trash/empty',
        });
    }
    /**
     * Restore trash
     * Restore all items in the trash.
     * @returns TrashResponseDto
     * @throws ApiError
     */
    public static restoreTrash(): CancelablePromise<TrashResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/trash/restore',
        });
    }
    /**
     * Restore assets
     * Restore specific assets from the trash.
     * @param requestBody
     * @returns TrashResponseDto
     * @throws ApiError
     */
    public static restoreAssets(
        requestBody: BulkIdsDto,
    ): CancelablePromise<TrashResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/trash/restore/assets',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
