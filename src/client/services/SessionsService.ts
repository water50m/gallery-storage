/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SessionCreateDto } from '../models/SessionCreateDto';
import type { SessionCreateResponseDto } from '../models/SessionCreateResponseDto';
import type { SessionResponseDto } from '../models/SessionResponseDto';
import type { SessionUpdateDto } from '../models/SessionUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SessionsService {
    /**
     * Delete all sessions
     * Delete all sessions for the user. This will not delete the current session.
     * @returns void
     * @throws ApiError
     */
    public static deleteAllSessions(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sessions',
        });
    }
    /**
     * Retrieve sessions
     * Retrieve a list of sessions for the user.
     * @returns SessionResponseDto
     * @throws ApiError
     */
    public static getSessions(): CancelablePromise<Array<SessionResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sessions',
        });
    }
    /**
     * Create a session
     * Create a session as a child to the current session. This endpoint is used for casting.
     * @param requestBody
     * @returns SessionCreateResponseDto
     * @throws ApiError
     */
    public static createSession(
        requestBody: SessionCreateDto,
    ): CancelablePromise<SessionCreateResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sessions',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a session
     * Delete a specific session by id.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteSession(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sessions/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a session
     * Update a specific session identified by id.
     * @param id
     * @param requestBody
     * @returns SessionResponseDto
     * @throws ApiError
     */
    public static updateSession(
        id: string,
        requestBody: SessionUpdateDto,
    ): CancelablePromise<SessionResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sessions/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Lock a session
     * Lock a specific session by id.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static lockSession(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sessions/{id}/lock',
            path: {
                'id': id,
            },
        });
    }
}
