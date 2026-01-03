/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetIdsDto } from '../models/AssetIdsDto';
import type { AssetIdsResponseDto } from '../models/AssetIdsResponseDto';
import type { SharedLinkCreateDto } from '../models/SharedLinkCreateDto';
import type { SharedLinkEditDto } from '../models/SharedLinkEditDto';
import type { SharedLinkResponseDto } from '../models/SharedLinkResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SharedLinksService {
    /**
     * Retrieve all shared links
     * Retrieve a list of all shared links.
     * @param albumId
     * @param id
     * @returns SharedLinkResponseDto
     * @throws ApiError
     */
    public static getAllSharedLinks(
        albumId?: string,
        id?: string,
    ): CancelablePromise<Array<SharedLinkResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shared-links',
            query: {
                'albumId': albumId,
                'id': id,
            },
        });
    }
    /**
     * Create a shared link
     * Create a new shared link.
     * @param requestBody
     * @returns SharedLinkResponseDto
     * @throws ApiError
     */
    public static createSharedLink(
        requestBody: SharedLinkCreateDto,
    ): CancelablePromise<SharedLinkResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/shared-links',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve current shared link
     * Retrieve the current shared link associated with authentication method.
     * @param key
     * @param password
     * @param slug
     * @param token
     * @returns SharedLinkResponseDto
     * @throws ApiError
     */
    public static getMySharedLink(
        key?: string,
        password?: string,
        slug?: string,
        token?: string,
    ): CancelablePromise<SharedLinkResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shared-links/me',
            query: {
                'key': key,
                'password': password,
                'slug': slug,
                'token': token,
            },
        });
    }
    /**
     * Delete a shared link
     * Delete a specific shared link by its ID.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static removeSharedLink(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/shared-links/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Retrieve a shared link
     * Retrieve a specific shared link by its ID.
     * @param id
     * @returns SharedLinkResponseDto
     * @throws ApiError
     */
    public static getSharedLinkById(
        id: string,
    ): CancelablePromise<SharedLinkResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shared-links/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a shared link
     * Update an existing shared link by its ID.
     * @param id
     * @param requestBody
     * @returns SharedLinkResponseDto
     * @throws ApiError
     */
    public static updateSharedLink(
        id: string,
        requestBody: SharedLinkEditDto,
    ): CancelablePromise<SharedLinkResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/shared-links/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove assets from a shared link
     * Remove assets from a specific shared link by its ID. This endpoint is only relevant for shared link of type individual.
     * @param id
     * @param requestBody
     * @param key
     * @param slug
     * @returns AssetIdsResponseDto
     * @throws ApiError
     */
    public static removeSharedLinkAssets(
        id: string,
        requestBody: AssetIdsDto,
        key?: string,
        slug?: string,
    ): CancelablePromise<Array<AssetIdsResponseDto>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/shared-links/{id}/assets',
            path: {
                'id': id,
            },
            query: {
                'key': key,
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Add assets to a shared link
     * Add assets to a specific shared link by its ID. This endpoint is only relevant for shared link of type individual.
     * @param id
     * @param requestBody
     * @param key
     * @param slug
     * @returns AssetIdsResponseDto
     * @throws ApiError
     */
    public static addSharedLinkAssets(
        id: string,
        requestBody: AssetIdsDto,
        key?: string,
        slug?: string,
    ): CancelablePromise<Array<AssetIdsResponseDto>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/shared-links/{id}/assets',
            path: {
                'id': id,
            },
            query: {
                'key': key,
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
