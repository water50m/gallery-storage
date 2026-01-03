/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkIdsDto } from '../models/BulkIdsDto';
import type { DuplicateResponseDto } from '../models/DuplicateResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DuplicatesService {
    /**
     * Delete duplicates
     * Delete multiple duplicate assets specified by their IDs.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static deleteDuplicates(
        requestBody: BulkIdsDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/duplicates',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve duplicates
     * Retrieve a list of duplicate assets available to the authenticated user.
     * @returns DuplicateResponseDto
     * @throws ApiError
     */
    public static getAssetDuplicates(): CancelablePromise<Array<DuplicateResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/duplicates',
        });
    }
    /**
     * Delete a duplicate
     * Delete a single duplicate asset specified by its ID.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteDuplicate(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/duplicates/{id}',
            path: {
                'id': id,
            },
        });
    }
}
