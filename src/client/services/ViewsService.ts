/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetResponseDto } from '../models/AssetResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ViewsService {
    /**
     * Retrieve assets by original path
     * Retrieve assets that are children of a specific folder.
     * @param path
     * @returns AssetResponseDto
     * @throws ApiError
     */
    public static getAssetsByOriginalPath(
        path: string,
    ): CancelablePromise<Array<AssetResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/view/folder',
            query: {
                'path': path,
            },
        });
    }
    /**
     * Retrieve unique paths
     * Retrieve a list of unique folder paths from asset original paths.
     * @returns string
     * @throws ApiError
     */
    public static getUniqueOriginalPaths(): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/view/folder/unique-paths',
        });
    }
}
