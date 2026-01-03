/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PluginResponseDto } from '../models/PluginResponseDto';
import type { PluginTriggerResponseDto } from '../models/PluginTriggerResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PluginsService {
    /**
     * List all plugins
     * Retrieve a list of plugins available to the authenticated user.
     * @returns PluginResponseDto
     * @throws ApiError
     */
    public static getPlugins(): CancelablePromise<Array<PluginResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plugins',
        });
    }
    /**
     * List all plugin triggers
     * Retrieve a list of all available plugin triggers.
     * @returns PluginTriggerResponseDto
     * @throws ApiError
     */
    public static getPluginTriggers(): CancelablePromise<Array<PluginTriggerResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plugins/triggers',
        });
    }
    /**
     * Retrieve a plugin
     * Retrieve information about a specific plugin by its ID.
     * @param id
     * @returns PluginResponseDto
     * @throws ApiError
     */
    public static getPlugin(
        id: string,
    ): CancelablePromise<PluginResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plugins/{id}',
            path: {
                'id': id,
            },
        });
    }
}
