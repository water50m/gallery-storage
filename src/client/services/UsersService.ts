/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProfileImageDto } from '../models/CreateProfileImageDto';
import type { CreateProfileImageResponseDto } from '../models/CreateProfileImageResponseDto';
import type { LicenseKeyDto } from '../models/LicenseKeyDto';
import type { LicenseResponseDto } from '../models/LicenseResponseDto';
import type { OnboardingDto } from '../models/OnboardingDto';
import type { OnboardingResponseDto } from '../models/OnboardingResponseDto';
import type { UserAdminResponseDto } from '../models/UserAdminResponseDto';
import type { UserPreferencesResponseDto } from '../models/UserPreferencesResponseDto';
import type { UserPreferencesUpdateDto } from '../models/UserPreferencesUpdateDto';
import type { UserResponseDto } from '../models/UserResponseDto';
import type { UserUpdateMeDto } from '../models/UserUpdateMeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * Get all users
     * Retrieve a list of all users on the server.
     * @returns UserResponseDto
     * @throws ApiError
     */
    public static searchUsers(): CancelablePromise<Array<UserResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
        });
    }
    /**
     * Get current user
     * Retrieve information about the user making the API request.
     * @returns UserAdminResponseDto
     * @throws ApiError
     */
    public static getMyUser(): CancelablePromise<UserAdminResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me',
        });
    }
    /**
     * Update current user
     * Update the current user making teh API request.
     * @param requestBody
     * @returns UserAdminResponseDto
     * @throws ApiError
     */
    public static updateMyUser(
        requestBody: UserUpdateMeDto,
    ): CancelablePromise<UserAdminResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/me',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete user product key
     * Delete the registered product key for the current user.
     * @returns void
     * @throws ApiError
     */
    public static deleteUserLicense(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/me/license',
        });
    }
    /**
     * Retrieve user product key
     * Retrieve information about whether the current user has a registered product key.
     * @returns LicenseResponseDto
     * @throws ApiError
     */
    public static getUserLicense(): CancelablePromise<LicenseResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me/license',
        });
    }
    /**
     * Set user product key
     * Register a product key for the current user.
     * @param requestBody
     * @returns LicenseResponseDto
     * @throws ApiError
     */
    public static setUserLicense(
        requestBody: LicenseKeyDto,
    ): CancelablePromise<LicenseResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/me/license',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete user onboarding
     * Delete the onboarding status of the current user.
     * @returns void
     * @throws ApiError
     */
    public static deleteUserOnboarding(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/me/onboarding',
        });
    }
    /**
     * Retrieve user onboarding
     * Retrieve the onboarding status of the current user.
     * @returns OnboardingResponseDto
     * @throws ApiError
     */
    public static getUserOnboarding(): CancelablePromise<OnboardingResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me/onboarding',
        });
    }
    /**
     * Update user onboarding
     * Update the onboarding status of the current user.
     * @param requestBody
     * @returns OnboardingResponseDto
     * @throws ApiError
     */
    public static setUserOnboarding(
        requestBody: OnboardingDto,
    ): CancelablePromise<OnboardingResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/me/onboarding',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get my preferences
     * Retrieve the preferences for the current user.
     * @returns UserPreferencesResponseDto
     * @throws ApiError
     */
    public static getMyPreferences(): CancelablePromise<UserPreferencesResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me/preferences',
        });
    }
    /**
     * Update my preferences
     * Update the preferences of the current user.
     * @param requestBody
     * @returns UserPreferencesResponseDto
     * @throws ApiError
     */
    public static updateMyPreferences(
        requestBody: UserPreferencesUpdateDto,
    ): CancelablePromise<UserPreferencesResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/me/preferences',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete user profile image
     * Delete the profile image of the current user.
     * @returns void
     * @throws ApiError
     */
    public static deleteProfileImage(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/profile-image',
        });
    }
    /**
     * Create user profile image
     * Upload and set a new profile image for the current user.
     * @param formData A new avatar for the user
     * @returns CreateProfileImageResponseDto
     * @throws ApiError
     */
    public static createProfileImage(
        formData: CreateProfileImageDto,
    ): CancelablePromise<CreateProfileImageResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/profile-image',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * Retrieve a user
     * Retrieve a specific user by their ID.
     * @param id
     * @returns UserResponseDto
     * @throws ApiError
     */
    public static getUser(
        id: string,
    ): CancelablePromise<UserResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Retrieve user profile image
     * Retrieve the profile image file for a user.
     * @param id
     * @returns binary
     * @throws ApiError
     */
    public static getProfileImage(
        id: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}/profile-image',
            path: {
                'id': id,
            },
        });
    }
}
