/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { APIKeyCreateDto } from '../models/APIKeyCreateDto';
import type { APIKeyCreateResponseDto } from '../models/APIKeyCreateResponseDto';
import type { APIKeyResponseDto } from '../models/APIKeyResponseDto';
import type { APIKeyUpdateDto } from '../models/APIKeyUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApiKeysService {
    /**
     * List all API keys
     * Retrieve all API keys of the current user.
     * @returns APIKeyResponseDto
     * @throws ApiError
     */
    public static getApiKeys(): CancelablePromise<Array<APIKeyResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api-keys',
        });
    }
    /**
     * Create an API key
     * Creates a new API key. It will be limited to the permissions specified.
     * @param requestBody
     * @returns APIKeyCreateResponseDto
     * @throws ApiError
     */
    public static createApiKey(
        requestBody: APIKeyCreateDto,
    ): CancelablePromise<APIKeyCreateResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api-keys',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve the current API key
     * Retrieve the API key that is used to access this endpoint.
     * @returns APIKeyResponseDto
     * @throws ApiError
     */
    public static getMyApiKey(): CancelablePromise<APIKeyResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api-keys/me',
        });
    }
    /**
     * Delete an API key
     * Deletes an API key identified by its ID. The current user must own this API key.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteApiKey(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api-keys/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Retrieve an API key
     * Retrieve an API key by its ID. The current user must own this API key.
     * @param id
     * @returns APIKeyResponseDto
     * @throws ApiError
     */
    public static getApiKey(
        id: string,
    ): CancelablePromise<APIKeyResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api-keys/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update an API key
     * Updates the name and permissions of an API key by its ID. The current user must own this API key.
     * @param id
     * @param requestBody
     * @returns APIKeyResponseDto
     * @throws ApiError
     */
    public static updateApiKey(
        id: string,
        requestBody: APIKeyUpdateDto,
    ): CancelablePromise<APIKeyResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api-keys/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
