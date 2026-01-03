/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LicenseKeyDto } from '../models/LicenseKeyDto';
import type { LicenseResponseDto } from '../models/LicenseResponseDto';
import type { ServerAboutResponseDto } from '../models/ServerAboutResponseDto';
import type { ServerApkLinksDto } from '../models/ServerApkLinksDto';
import type { ServerConfigDto } from '../models/ServerConfigDto';
import type { ServerFeaturesDto } from '../models/ServerFeaturesDto';
import type { ServerMediaTypesResponseDto } from '../models/ServerMediaTypesResponseDto';
import type { ServerPingResponse } from '../models/ServerPingResponse';
import type { ServerStatsResponseDto } from '../models/ServerStatsResponseDto';
import type { ServerStorageResponseDto } from '../models/ServerStorageResponseDto';
import type { ServerThemeDto } from '../models/ServerThemeDto';
import type { ServerVersionHistoryResponseDto } from '../models/ServerVersionHistoryResponseDto';
import type { ServerVersionResponseDto } from '../models/ServerVersionResponseDto';
import type { VersionCheckStateResponseDto } from '../models/VersionCheckStateResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ServerService {
    /**
     * Get server information
     * Retrieve a list of information about the server.
     * @returns ServerAboutResponseDto
     * @throws ApiError
     */
    public static getAboutInfo(): CancelablePromise<ServerAboutResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server/about',
        });
    }
    /**
     * Get APK links
     * Retrieve links to the APKs for the current server version.
     * @returns ServerApkLinksDto
     * @throws ApiError
     */
    public static getApkLinks(): CancelablePromise<ServerApkLinksDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server/apk-links',
        });
    }
    /**
     * Get config
     * Retrieve the current server configuration.
     * @returns ServerConfigDto
     * @throws ApiError
     */
    public static getServerConfig(): CancelablePromise<ServerConfigDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server/config',
        });
    }
    /**
     * Get features
     * Retrieve available features supported by this server.
     * @returns ServerFeaturesDto
     * @throws ApiError
     */
    public static getServerFeatures(): CancelablePromise<ServerFeaturesDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server/features',
        });
    }
    /**
     * Delete server product key
     * Delete the currently set server product key.
     * @returns void
     * @throws ApiError
     */
    public static deleteServerLicense(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/server/license',
        });
    }
    /**
     * Get product key
     * Retrieve information about whether the server currently has a product key registered.
     * @returns LicenseResponseDto
     * @throws ApiError
     */
    public static getServerLicense(): CancelablePromise<LicenseResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server/license',
        });
    }
    /**
     * Set server product key
     * Validate and set the server product key if successful.
     * @param requestBody
     * @returns LicenseResponseDto
     * @throws ApiError
     */
    public static setServerLicense(
        requestBody: LicenseKeyDto,
    ): CancelablePromise<LicenseResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/server/license',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get supported media types
     * Retrieve all media types supported by the server.
     * @returns ServerMediaTypesResponseDto
     * @throws ApiError
     */
    public static getSupportedMediaTypes(): CancelablePromise<ServerMediaTypesResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server/media-types',
        });
    }
    /**
     * Ping
     * Pong
     * @returns ServerPingResponse
     * @throws ApiError
     */
    public static pingServer(): CancelablePromise<ServerPingResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server/ping',
        });
    }
    /**
     * Get statistics
     * Retrieve statistics about the entire Immich instance such as asset counts.
     * @returns ServerStatsResponseDto
     * @throws ApiError
     */
    public static getServerStatistics(): CancelablePromise<ServerStatsResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server/statistics',
        });
    }
    /**
     * Get storage
     * Retrieve the current storage utilization information of the server.
     * @returns ServerStorageResponseDto
     * @throws ApiError
     */
    public static getStorage(): CancelablePromise<ServerStorageResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server/storage',
        });
    }
    /**
     * Get theme
     * Retrieve the custom CSS, if existent.
     * @returns ServerThemeDto
     * @throws ApiError
     */
    public static getTheme(): CancelablePromise<ServerThemeDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server/theme',
        });
    }
    /**
     * Get server version
     * Retrieve the current server version in semantic versioning (semver) format.
     * @returns ServerVersionResponseDto
     * @throws ApiError
     */
    public static getServerVersion(): CancelablePromise<ServerVersionResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server/version',
        });
    }
    /**
     * Get version check status
     * Retrieve information about the last time the version check ran.
     * @returns VersionCheckStateResponseDto
     * @throws ApiError
     */
    public static getVersionCheck(): CancelablePromise<VersionCheckStateResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server/version-check',
        });
    }
    /**
     * Get version history
     * Retrieve a list of past versions the server has been on.
     * @returns ServerVersionHistoryResponseDto
     * @throws ApiError
     */
    public static getVersionHistory(): CancelablePromise<Array<ServerVersionHistoryResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server/version-history',
        });
    }
}
