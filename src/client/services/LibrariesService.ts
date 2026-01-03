/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateLibraryDto } from '../models/CreateLibraryDto';
import type { LibraryResponseDto } from '../models/LibraryResponseDto';
import type { LibraryStatsResponseDto } from '../models/LibraryStatsResponseDto';
import type { UpdateLibraryDto } from '../models/UpdateLibraryDto';
import type { ValidateLibraryDto } from '../models/ValidateLibraryDto';
import type { ValidateLibraryResponseDto } from '../models/ValidateLibraryResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LibrariesService {
    /**
     * Retrieve libraries
     * Retrieve a list of external libraries.
     * @returns LibraryResponseDto
     * @throws ApiError
     */
    public static getAllLibraries(): CancelablePromise<Array<LibraryResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/libraries',
        });
    }
    /**
     * Create a library
     * Create a new external library.
     * @param requestBody
     * @returns LibraryResponseDto
     * @throws ApiError
     */
    public static createLibrary(
        requestBody: CreateLibraryDto,
    ): CancelablePromise<LibraryResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/libraries',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a library
     * Delete an external library by its ID.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteLibrary(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/libraries/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Retrieve a library
     * Retrieve an external library by its ID.
     * @param id
     * @returns LibraryResponseDto
     * @throws ApiError
     */
    public static getLibrary(
        id: string,
    ): CancelablePromise<LibraryResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/libraries/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a library
     * Update an existing external library.
     * @param id
     * @param requestBody
     * @returns LibraryResponseDto
     * @throws ApiError
     */
    public static updateLibrary(
        id: string,
        requestBody: UpdateLibraryDto,
    ): CancelablePromise<LibraryResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/libraries/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Scan a library
     * Queue a scan for the external library to find and import new assets.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static scanLibrary(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/libraries/{id}/scan',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Retrieve library statistics
     * Retrieve statistics for a specific external library, including number of videos, images, and storage usage.
     * @param id
     * @returns LibraryStatsResponseDto
     * @throws ApiError
     */
    public static getLibraryStatistics(
        id: string,
    ): CancelablePromise<LibraryStatsResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/libraries/{id}/statistics',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Validate library settings
     * Validate the settings of an external library.
     * @param id
     * @param requestBody
     * @returns ValidateLibraryResponseDto
     * @throws ApiError
     */
    public static validate(
        id: string,
        requestBody: ValidateLibraryDto,
    ): CancelablePromise<ValidateLibraryResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/libraries/{id}/validate',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
