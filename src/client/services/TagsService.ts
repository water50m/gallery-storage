/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkIdResponseDto } from '../models/BulkIdResponseDto';
import type { BulkIdsDto } from '../models/BulkIdsDto';
import type { TagBulkAssetsDto } from '../models/TagBulkAssetsDto';
import type { TagBulkAssetsResponseDto } from '../models/TagBulkAssetsResponseDto';
import type { TagCreateDto } from '../models/TagCreateDto';
import type { TagResponseDto } from '../models/TagResponseDto';
import type { TagUpdateDto } from '../models/TagUpdateDto';
import type { TagUpsertDto } from '../models/TagUpsertDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TagsService {
    /**
     * Retrieve tags
     * Retrieve a list of all tags.
     * @returns TagResponseDto
     * @throws ApiError
     */
    public static getAllTags(): CancelablePromise<Array<TagResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tags',
        });
    }
    /**
     * Create a tag
     * Create a new tag by providing a name and optional color.
     * @param requestBody
     * @returns TagResponseDto
     * @throws ApiError
     */
    public static createTag(
        requestBody: TagCreateDto,
    ): CancelablePromise<TagResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tags',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Upsert tags
     * Create or update multiple tags in a single request.
     * @param requestBody
     * @returns TagResponseDto
     * @throws ApiError
     */
    public static upsertTags(
        requestBody: TagUpsertDto,
    ): CancelablePromise<Array<TagResponseDto>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/tags',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Tag assets
     * Add multiple tags to multiple assets in a single request.
     * @param requestBody
     * @returns TagBulkAssetsResponseDto
     * @throws ApiError
     */
    public static bulkTagAssets(
        requestBody: TagBulkAssetsDto,
    ): CancelablePromise<TagBulkAssetsResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/tags/assets',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a tag
     * Delete a specific tag by its ID.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteTag(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/tags/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Retrieve a tag
     * Retrieve a specific tag by its ID.
     * @param id
     * @returns TagResponseDto
     * @throws ApiError
     */
    public static getTagById(
        id: string,
    ): CancelablePromise<TagResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tags/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a tag
     * Update an existing tag identified by its ID.
     * @param id
     * @param requestBody
     * @returns TagResponseDto
     * @throws ApiError
     */
    public static updateTag(
        id: string,
        requestBody: TagUpdateDto,
    ): CancelablePromise<TagResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/tags/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Untag assets
     * Remove a tag from all the specified assets.
     * @param id
     * @param requestBody
     * @returns BulkIdResponseDto
     * @throws ApiError
     */
    public static untagAssets(
        id: string,
        requestBody: BulkIdsDto,
    ): CancelablePromise<Array<BulkIdResponseDto>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/tags/{id}/assets',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Tag assets
     * Add a tag to all the specified assets.
     * @param id
     * @param requestBody
     * @returns BulkIdResponseDto
     * @throws ApiError
     */
    public static tagAssets(
        id: string,
        requestBody: BulkIdsDto,
    ): CancelablePromise<Array<BulkIdResponseDto>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/tags/{id}/assets',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
