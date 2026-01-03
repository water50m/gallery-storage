/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetStatsResponseDto } from '../models/AssetStatsResponseDto';
import type { AssetVisibility } from '../models/AssetVisibility';
import type { SessionResponseDto } from '../models/SessionResponseDto';
import type { UserAdminCreateDto } from '../models/UserAdminCreateDto';
import type { UserAdminDeleteDto } from '../models/UserAdminDeleteDto';
import type { UserAdminResponseDto } from '../models/UserAdminResponseDto';
import type { UserAdminUpdateDto } from '../models/UserAdminUpdateDto';
import type { UserPreferencesResponseDto } from '../models/UserPreferencesResponseDto';
import type { UserPreferencesUpdateDto } from '../models/UserPreferencesUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersAdminService {
    /**
     * Search users
     * Search for users.
     * @param id
     * @param withDeleted
     * @returns UserAdminResponseDto
     * @throws ApiError
     */
    public static searchUsersAdmin(
        id?: string,
        withDeleted?: boolean,
    ): CancelablePromise<Array<UserAdminResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/users',
            query: {
                'id': id,
                'withDeleted': withDeleted,
            },
        });
    }
    /**
     * Create a user
     * Create a new user.
     * @param requestBody
     * @returns UserAdminResponseDto
     * @throws ApiError
     */
    public static createUserAdmin(
        requestBody: UserAdminCreateDto,
    ): CancelablePromise<UserAdminResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a user
     * Delete a user.
     * @param id
     * @param requestBody
     * @returns UserAdminResponseDto
     * @throws ApiError
     */
    public static deleteUserAdmin(
        id: string,
        requestBody: UserAdminDeleteDto,
    ): CancelablePromise<UserAdminResponseDto> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve a user
     * Retrieve  a specific user by their ID.
     * @param id
     * @returns UserAdminResponseDto
     * @throws ApiError
     */
    public static getUserAdmin(
        id: string,
    ): CancelablePromise<UserAdminResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/users/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a user
     * Update an existing user.
     * @param id
     * @param requestBody
     * @returns UserAdminResponseDto
     * @throws ApiError
     */
    public static updateUserAdmin(
        id: string,
        requestBody: UserAdminUpdateDto,
    ): CancelablePromise<UserAdminResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve user preferences
     * Retrieve the preferences of a specific user.
     * @param id
     * @returns UserPreferencesResponseDto
     * @throws ApiError
     */
    public static getUserPreferencesAdmin(
        id: string,
    ): CancelablePromise<UserPreferencesResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/users/{id}/preferences',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update user preferences
     * Update the preferences of a specific user.
     * @param id
     * @param requestBody
     * @returns UserPreferencesResponseDto
     * @throws ApiError
     */
    public static updateUserPreferencesAdmin(
        id: string,
        requestBody: UserPreferencesUpdateDto,
    ): CancelablePromise<UserPreferencesResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/users/{id}/preferences',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Restore a deleted user
     * Restore a previously deleted user.
     * @param id
     * @returns UserAdminResponseDto
     * @throws ApiError
     */
    public static restoreUserAdmin(
        id: string,
    ): CancelablePromise<UserAdminResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/users/{id}/restore',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Retrieve user sessions
     * Retrieve all sessions for a specific user.
     * @param id
     * @returns SessionResponseDto
     * @throws ApiError
     */
    public static getUserSessionsAdmin(
        id: string,
    ): CancelablePromise<Array<SessionResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/users/{id}/sessions',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Retrieve user statistics
     * Retrieve asset statistics for a specific user.
     * @param id
     * @param isFavorite
     * @param isTrashed
     * @param visibility
     * @returns AssetStatsResponseDto
     * @throws ApiError
     */
    public static getUserStatisticsAdmin(
        id: string,
        isFavorite?: boolean,
        isTrashed?: boolean,
        visibility?: AssetVisibility,
    ): CancelablePromise<AssetStatsResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/users/{id}/statistics',
            path: {
                'id': id,
            },
            query: {
                'isFavorite': isFavorite,
                'isTrashed': isTrashed,
                'visibility': visibility,
            },
        });
    }
}
