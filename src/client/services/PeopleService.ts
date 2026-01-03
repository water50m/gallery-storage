/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetFaceUpdateDto } from '../models/AssetFaceUpdateDto';
import type { BulkIdResponseDto } from '../models/BulkIdResponseDto';
import type { BulkIdsDto } from '../models/BulkIdsDto';
import type { MergePersonDto } from '../models/MergePersonDto';
import type { PeopleResponseDto } from '../models/PeopleResponseDto';
import type { PeopleUpdateDto } from '../models/PeopleUpdateDto';
import type { PersonCreateDto } from '../models/PersonCreateDto';
import type { PersonResponseDto } from '../models/PersonResponseDto';
import type { PersonStatisticsResponseDto } from '../models/PersonStatisticsResponseDto';
import type { PersonUpdateDto } from '../models/PersonUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PeopleService {
    /**
     * Delete people
     * Bulk delete a list of people at once.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static deletePeople(
        requestBody: BulkIdsDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/people',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get all people
     * Retrieve a list of all people.
     * @param closestAssetId
     * @param closestPersonId
     * @param page Page number for pagination
     * @param size Number of items per page
     * @param withHidden
     * @returns PeopleResponseDto
     * @throws ApiError
     */
    public static getAllPeople(
        closestAssetId?: string,
        closestPersonId?: string,
        page: number = 1,
        size: number = 500,
        withHidden?: boolean,
    ): CancelablePromise<PeopleResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/people',
            query: {
                'closestAssetId': closestAssetId,
                'closestPersonId': closestPersonId,
                'page': page,
                'size': size,
                'withHidden': withHidden,
            },
        });
    }
    /**
     * Create a person
     * Create a new person that can have multiple faces assigned to them.
     * @param requestBody
     * @returns PersonResponseDto
     * @throws ApiError
     */
    public static createPerson(
        requestBody: PersonCreateDto,
    ): CancelablePromise<PersonResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/people',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update people
     * Bulk update multiple people at once.
     * @param requestBody
     * @returns BulkIdResponseDto
     * @throws ApiError
     */
    public static updatePeople(
        requestBody: PeopleUpdateDto,
    ): CancelablePromise<Array<BulkIdResponseDto>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/people',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete person
     * Delete an individual person.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deletePerson(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/people/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a person
     * Retrieve a person by id.
     * @param id
     * @returns PersonResponseDto
     * @throws ApiError
     */
    public static getPerson(
        id: string,
    ): CancelablePromise<PersonResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/people/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update person
     * Update an individual person.
     * @param id
     * @param requestBody
     * @returns PersonResponseDto
     * @throws ApiError
     */
    public static updatePerson(
        id: string,
        requestBody: PersonUpdateDto,
    ): CancelablePromise<PersonResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/people/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Merge people
     * Merge a list of people into the person specified in the path parameter.
     * @param id
     * @param requestBody
     * @returns BulkIdResponseDto
     * @throws ApiError
     */
    public static mergePerson(
        id: string,
        requestBody: MergePersonDto,
    ): CancelablePromise<Array<BulkIdResponseDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/people/{id}/merge',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Reassign faces
     * Bulk reassign a list of faces to a different person.
     * @param id
     * @param requestBody
     * @returns PersonResponseDto
     * @throws ApiError
     */
    public static reassignFaces(
        id: string,
        requestBody: AssetFaceUpdateDto,
    ): CancelablePromise<Array<PersonResponseDto>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/people/{id}/reassign',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get person statistics
     * Retrieve statistics about a specific person.
     * @param id
     * @returns PersonStatisticsResponseDto
     * @throws ApiError
     */
    public static getPersonStatistics(
        id: string,
    ): CancelablePromise<PersonStatisticsResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/people/{id}/statistics',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get person thumbnail
     * Retrieve the thumbnail file for a person.
     * @param id
     * @returns binary
     * @throws ApiError
     */
    public static getPersonThumbnail(
        id: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/people/{id}/thumbnail',
            path: {
                'id': id,
            },
        });
    }
}
