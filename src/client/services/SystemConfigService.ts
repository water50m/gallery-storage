/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SystemConfigDto } from '../models/SystemConfigDto';
import type { SystemConfigTemplateStorageOptionDto } from '../models/SystemConfigTemplateStorageOptionDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SystemConfigService {
    /**
     * Get system configuration
     * Retrieve the current system configuration.
     * @returns SystemConfigDto
     * @throws ApiError
     */
    public static getConfig(): CancelablePromise<SystemConfigDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/system-config',
        });
    }
    /**
     * Update system configuration
     * Update the system configuration with a new system configuration.
     * @param requestBody
     * @returns SystemConfigDto
     * @throws ApiError
     */
    public static updateConfig(
        requestBody: SystemConfigDto,
    ): CancelablePromise<SystemConfigDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/system-config',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get system configuration defaults
     * Retrieve the default values for the system configuration.
     * @returns SystemConfigDto
     * @throws ApiError
     */
    public static getConfigDefaults(): CancelablePromise<SystemConfigDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/system-config/defaults',
        });
    }
    /**
     * Get storage template options
     * Retrieve exemplary storage template options.
     * @returns SystemConfigTemplateStorageOptionDto
     * @throws ApiError
     */
    public static getStorageTemplateOptions(): CancelablePromise<SystemConfigTemplateStorageOptionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/system-config/storage-template-options',
        });
    }
}
