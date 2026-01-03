/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkIdsDto } from '../models/BulkIdsDto';
import type { StackCreateDto } from '../models/StackCreateDto';
import type { StackResponseDto } from '../models/StackResponseDto';
import type { StackUpdateDto } from '../models/StackUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StacksService {
    /**
     * Delete stacks
     * Delete multiple stacks by providing a list of stack IDs.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static deleteStacks(
        requestBody: BulkIdsDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stacks',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve stacks
     * Retrieve a list of stacks.
     * @param primaryAssetId
     * @returns StackResponseDto
     * @throws ApiError
     */
    public static searchStacks(
        primaryAssetId?: string,
    ): CancelablePromise<Array<StackResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stacks',
            query: {
                'primaryAssetId': primaryAssetId,
            },
        });
    }
    /**
     * Create a stack
     * Create a new stack by providing a name and a list of asset IDs to include in the stack. If any of the provided asset IDs are primary assets of an existing stack, the existing stack will be merged into the newly created stack.
     * @param requestBody
     * @returns StackResponseDto
     * @throws ApiError
     */
    public static createStack(
        requestBody: StackCreateDto,
    ): CancelablePromise<StackResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stacks',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a stack
     * Delete a specific stack by its ID.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteStack(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stacks/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Retrieve a stack
     * Retrieve a specific stack by its ID.
     * @param id
     * @returns StackResponseDto
     * @throws ApiError
     */
    public static getStack(
        id: string,
    ): CancelablePromise<StackResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stacks/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a stack
     * Update an existing stack by its ID.
     * @param id
     * @param requestBody
     * @returns StackResponseDto
     * @throws ApiError
     */
    public static updateStack(
        id: string,
        requestBody: StackUpdateDto,
    ): CancelablePromise<StackResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stacks/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove an asset from a stack
     * Remove a specific asset from a stack by providing the stack ID and asset ID.
     * @param assetId
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static removeAssetFromStack(
        assetId: string,
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stacks/{id}/assets/{assetId}',
            path: {
                'assetId': assetId,
                'id': id,
            },
        });
    }
}
