/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartnerCreateDto } from '../models/PartnerCreateDto';
import type { PartnerDirection } from '../models/PartnerDirection';
import type { PartnerResponseDto } from '../models/PartnerResponseDto';
import type { PartnerUpdateDto } from '../models/PartnerUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PartnersService {
    /**
     * Retrieve partners
     * Retrieve a list of partners with whom assets are shared.
     * @param direction
     * @returns PartnerResponseDto
     * @throws ApiError
     */
    public static getPartners(
        direction: PartnerDirection,
    ): CancelablePromise<Array<PartnerResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/partners',
            query: {
                'direction': direction,
            },
        });
    }
    /**
     * Create a partner
     * Create a new partner to share assets with.
     * @param requestBody
     * @returns PartnerResponseDto
     * @throws ApiError
     */
    public static createPartner(
        requestBody: PartnerCreateDto,
    ): CancelablePromise<PartnerResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/partners',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove a partner
     * Stop sharing assets with a partner.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static removePartner(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/partners/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @deprecated
     * Create a partner
     * Create a new partner to share assets with.
     * @param id
     * @returns PartnerResponseDto
     * @throws ApiError
     */
    public static createPartnerDeprecated(
        id: string,
    ): CancelablePromise<PartnerResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/partners/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a partner
     * Specify whether a partner's assets should appear in the user's timeline.
     * @param id
     * @param requestBody
     * @returns PartnerResponseDto
     * @throws ApiError
     */
    public static updatePartner(
        id: string,
        requestBody: PartnerUpdateDto,
    ): CancelablePromise<PartnerResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/partners/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
