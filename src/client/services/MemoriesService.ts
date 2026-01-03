/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkIdResponseDto } from '../models/BulkIdResponseDto';
import type { BulkIdsDto } from '../models/BulkIdsDto';
import type { MemoryCreateDto } from '../models/MemoryCreateDto';
import type { MemoryResponseDto } from '../models/MemoryResponseDto';
import type { MemorySearchOrder } from '../models/MemorySearchOrder';
import type { MemoryStatisticsResponseDto } from '../models/MemoryStatisticsResponseDto';
import type { MemoryType } from '../models/MemoryType';
import type { MemoryUpdateDto } from '../models/MemoryUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MemoriesService {
    /**
     * Retrieve memories
     * Retrieve a list of memories. Memories are sorted descending by creation date by default, although they can also be sorted in ascending order, or randomly.
     * @param _for
     * @param isSaved
     * @param isTrashed
     * @param order
     * @param size Number of memories to return
     * @param type
     * @returns MemoryResponseDto
     * @throws ApiError
     */
    public static searchMemories(
        _for?: string,
        isSaved?: boolean,
        isTrashed?: boolean,
        order?: MemorySearchOrder,
        size?: number,
        type?: MemoryType,
    ): CancelablePromise<Array<MemoryResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/memories',
            query: {
                'for': _for,
                'isSaved': isSaved,
                'isTrashed': isTrashed,
                'order': order,
                'size': size,
                'type': type,
            },
        });
    }
    /**
     * Create a memory
     * Create a new memory by providing a name, description, and a list of asset IDs to include in the memory.
     * @param requestBody
     * @returns MemoryResponseDto
     * @throws ApiError
     */
    public static createMemory(
        requestBody: MemoryCreateDto,
    ): CancelablePromise<MemoryResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/memories',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve memories statistics
     * Retrieve statistics about memories, such as total count and other relevant metrics.
     * @param _for
     * @param isSaved
     * @param isTrashed
     * @param order
     * @param size Number of memories to return
     * @param type
     * @returns MemoryStatisticsResponseDto
     * @throws ApiError
     */
    public static memoriesStatistics(
        _for?: string,
        isSaved?: boolean,
        isTrashed?: boolean,
        order?: MemorySearchOrder,
        size?: number,
        type?: MemoryType,
    ): CancelablePromise<MemoryStatisticsResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/memories/statistics',
            query: {
                'for': _for,
                'isSaved': isSaved,
                'isTrashed': isTrashed,
                'order': order,
                'size': size,
                'type': type,
            },
        });
    }
    /**
     * Delete a memory
     * Delete a specific memory by its ID.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteMemory(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/memories/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Retrieve a memory
     * Retrieve a specific memory by its ID.
     * @param id
     * @returns MemoryResponseDto
     * @throws ApiError
     */
    public static getMemory(
        id: string,
    ): CancelablePromise<MemoryResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/memories/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a memory
     * Update an existing memory by its ID.
     * @param id
     * @param requestBody
     * @returns MemoryResponseDto
     * @throws ApiError
     */
    public static updateMemory(
        id: string,
        requestBody: MemoryUpdateDto,
    ): CancelablePromise<MemoryResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/memories/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove assets from a memory
     * Remove a list of asset IDs from a specific memory.
     * @param id
     * @param requestBody
     * @returns BulkIdResponseDto
     * @throws ApiError
     */
    public static removeMemoryAssets(
        id: string,
        requestBody: BulkIdsDto,
    ): CancelablePromise<Array<BulkIdResponseDto>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/memories/{id}/assets',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Add assets to a memory
     * Add a list of asset IDs to a specific memory.
     * @param id
     * @param requestBody
     * @returns BulkIdResponseDto
     * @throws ApiError
     */
    public static addMemoryAssets(
        id: string,
        requestBody: BulkIdsDto,
    ): CancelablePromise<Array<BulkIdResponseDto>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/memories/{id}/assets',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
