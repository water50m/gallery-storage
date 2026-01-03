/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddUsersDto } from '../models/AddUsersDto';
import type { AlbumResponseDto } from '../models/AlbumResponseDto';
import type { AlbumsAddAssetsDto } from '../models/AlbumsAddAssetsDto';
import type { AlbumsAddAssetsResponseDto } from '../models/AlbumsAddAssetsResponseDto';
import type { AlbumStatisticsResponseDto } from '../models/AlbumStatisticsResponseDto';
import type { BulkIdResponseDto } from '../models/BulkIdResponseDto';
import type { BulkIdsDto } from '../models/BulkIdsDto';
import type { CreateAlbumDto } from '../models/CreateAlbumDto';
import type { UpdateAlbumDto } from '../models/UpdateAlbumDto';
import type { UpdateAlbumUserDto } from '../models/UpdateAlbumUserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AlbumsService {
    /**
     * List all albums
     * Retrieve a list of albums available to the authenticated user.
     * @param assetId Only returns albums that contain the asset
     * Ignores the shared parameter
     * undefined: get all albums
     * @param shared
     * @returns AlbumResponseDto
     * @throws ApiError
     */
    public static getAllAlbums(
        assetId?: string,
        shared?: boolean,
    ): CancelablePromise<Array<AlbumResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/albums',
            query: {
                'assetId': assetId,
                'shared': shared,
            },
        });
    }
    /**
     * Create an album
     * Create a new album. The album can also be created with initial users and assets.
     * @param requestBody
     * @returns AlbumResponseDto
     * @throws ApiError
     */
    public static createAlbum(
        requestBody: CreateAlbumDto,
    ): CancelablePromise<AlbumResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/albums',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Add assets to albums
     * Send a list of asset IDs and album IDs to add each asset to each album.
     * @param requestBody
     * @param key
     * @param slug
     * @returns AlbumsAddAssetsResponseDto
     * @throws ApiError
     */
    public static addAssetsToAlbums(
        requestBody: AlbumsAddAssetsDto,
        key?: string,
        slug?: string,
    ): CancelablePromise<AlbumsAddAssetsResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/albums/assets',
            query: {
                'key': key,
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve album statistics
     * Returns statistics about the albums available to the authenticated user.
     * @returns AlbumStatisticsResponseDto
     * @throws ApiError
     */
    public static getAlbumStatistics(): CancelablePromise<AlbumStatisticsResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/albums/statistics',
        });
    }
    /**
     * Delete an album
     * Delete a specific album by its ID. Note the album is initially trashed and then immediately scheduled for deletion, but relies on a background job to complete the process.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteAlbum(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/albums/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Retrieve an album
     * Retrieve information about a specific album by its ID.
     * @param id
     * @param key
     * @param slug
     * @param withoutAssets
     * @returns AlbumResponseDto
     * @throws ApiError
     */
    public static getAlbumInfo(
        id: string,
        key?: string,
        slug?: string,
        withoutAssets?: boolean,
    ): CancelablePromise<AlbumResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/albums/{id}',
            path: {
                'id': id,
            },
            query: {
                'key': key,
                'slug': slug,
                'withoutAssets': withoutAssets,
            },
        });
    }
    /**
     * Update an album
     * Update the information of a specific album by its ID. This endpoint can be used to update the album name, description, sort order, etc. However, it is not used to add or remove assets or users from the album.
     * @param id
     * @param requestBody
     * @returns AlbumResponseDto
     * @throws ApiError
     */
    public static updateAlbumInfo(
        id: string,
        requestBody: UpdateAlbumDto,
    ): CancelablePromise<AlbumResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/albums/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove assets from an album
     * Remove multiple assets from a specific album by its ID.
     * @param id
     * @param requestBody
     * @returns BulkIdResponseDto
     * @throws ApiError
     */
    public static removeAssetFromAlbum(
        id: string,
        requestBody: BulkIdsDto,
    ): CancelablePromise<Array<BulkIdResponseDto>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/albums/{id}/assets',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Add assets to an album
     * Add multiple assets to a specific album by its ID.
     * @param id
     * @param requestBody
     * @param key
     * @param slug
     * @returns BulkIdResponseDto
     * @throws ApiError
     */
    public static addAssetsToAlbum(
        id: string,
        requestBody: BulkIdsDto,
        key?: string,
        slug?: string,
    ): CancelablePromise<Array<BulkIdResponseDto>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/albums/{id}/assets',
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
     * Remove user from album
     * Remove a user from an album. Use an ID of "me" to leave a shared album.
     * @param id
     * @param userId
     * @returns void
     * @throws ApiError
     */
    public static removeUserFromAlbum(
        id: string,
        userId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/albums/{id}/user/{userId}',
            path: {
                'id': id,
                'userId': userId,
            },
        });
    }
    /**
     * Update user role
     * Change the role for a specific user in a specific album.
     * @param id
     * @param userId
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateAlbumUser(
        id: string,
        userId: string,
        requestBody: UpdateAlbumUserDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/albums/{id}/user/{userId}',
            path: {
                'id': id,
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Share album with users
     * Share an album with multiple users. Each user can be given a specific role in the album.
     * @param id
     * @param requestBody
     * @returns AlbumResponseDto
     * @throws ApiError
     */
    public static addUsersToAlbum(
        id: string,
        requestBody: AddUsersDto,
    ): CancelablePromise<AlbumResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/albums/{id}/users',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
