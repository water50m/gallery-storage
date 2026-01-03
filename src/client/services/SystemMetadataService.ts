/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminOnboardingUpdateDto } from '../models/AdminOnboardingUpdateDto';
import type { ReverseGeocodingStateResponseDto } from '../models/ReverseGeocodingStateResponseDto';
import type { VersionCheckStateResponseDto } from '../models/VersionCheckStateResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SystemMetadataService {
    /**
     * Retrieve admin onboarding
     * Retrieve the current admin onboarding status.
     * @returns AdminOnboardingUpdateDto
     * @throws ApiError
     */
    public static getAdminOnboarding(): CancelablePromise<AdminOnboardingUpdateDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/system-metadata/admin-onboarding',
        });
    }
    /**
     * Update admin onboarding
     * Update the admin onboarding status.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateAdminOnboarding(
        requestBody: AdminOnboardingUpdateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/system-metadata/admin-onboarding',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve reverse geocoding state
     * Retrieve the current state of the reverse geocoding import.
     * @returns ReverseGeocodingStateResponseDto
     * @throws ApiError
     */
    public static getReverseGeocodingState(): CancelablePromise<ReverseGeocodingStateResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/system-metadata/reverse-geocoding-state',
        });
    }
    /**
     * Retrieve version check state
     * Retrieve the current state of the version check process.
     * @returns VersionCheckStateResponseDto
     * @throws ApiError
     */
    public static getVersionCheckState(): CancelablePromise<VersionCheckStateResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/system-metadata/version-check-state',
        });
    }
}
