/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetFaceCreateDto } from '../models/AssetFaceCreateDto';
import type { AssetFaceDeleteDto } from '../models/AssetFaceDeleteDto';
import type { AssetFaceResponseDto } from '../models/AssetFaceResponseDto';
import type { FaceDto } from '../models/FaceDto';
import type { PersonResponseDto } from '../models/PersonResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FacesService {
    /**
     * Retrieve faces for asset
     * Retrieve all faces belonging to an asset.
     * @param id
     * @returns AssetFaceResponseDto
     * @throws ApiError
     */
    public static getFaces(
        id: string,
    ): CancelablePromise<Array<AssetFaceResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/faces',
            query: {
                'id': id,
            },
        });
    }
    /**
     * Create a face
     * Create a new face that has not been discovered by facial recognition. The content of the bounding box is considered a face.
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static createFace(
        requestBody: AssetFaceCreateDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/faces',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a face
     * Delete a face identified by the id. Optionally can be force deleted.
     * @param id
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static deleteFace(
        id: string,
        requestBody: AssetFaceDeleteDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/faces/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Re-assign a face to another person
     * Re-assign the face provided in the body to the person identified by the id in the path parameter.
     * @param id
     * @param requestBody
     * @returns PersonResponseDto
     * @throws ApiError
     */
    public static reassignFacesById(
        id: string,
        requestBody: FaceDto,
    ): CancelablePromise<PersonResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/faces/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
