/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetDeltaSyncDto } from '../models/AssetDeltaSyncDto';
import type { AssetDeltaSyncResponseDto } from '../models/AssetDeltaSyncResponseDto';
import type { AssetFullSyncDto } from '../models/AssetFullSyncDto';
import type { AssetResponseDto } from '../models/AssetResponseDto';
import type { SyncAckDeleteDto } from '../models/SyncAckDeleteDto';
import type { SyncAckDto } from '../models/SyncAckDto';
import type { SyncAckSetDto } from '../models/SyncAckSetDto';
import type { SyncStreamDto } from '../models/SyncStreamDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SyncService {
    /**
     * Delete acknowledgements
     * Delete specific synchronization acknowledgments.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static deleteSyncAck(
        requestBody: SyncAckDeleteDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sync/ack',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve acknowledgements
     * Retrieve the synchronization acknowledgments for the current session.
     * @returns SyncAckDto
     * @throws ApiError
     */
    public static getSyncAck(): CancelablePromise<Array<SyncAckDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sync/ack',
        });
    }
    /**
     * Acknowledge changes
     * Send a list of synchronization acknowledgements to confirm that the latest changes have been received.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static sendSyncAck(
        requestBody: SyncAckSetDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sync/ack',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @deprecated
     * Get delta sync for user
     * Retrieve changed assets since the last sync for the authenticated user.
     * @param requestBody
     * @returns AssetDeltaSyncResponseDto
     * @throws ApiError
     */
    public static getDeltaSync(
        requestBody: AssetDeltaSyncDto,
    ): CancelablePromise<AssetDeltaSyncResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sync/delta-sync',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @deprecated
     * Get full sync for user
     * Retrieve all assets for a full synchronization for the authenticated user.
     * @param requestBody
     * @returns AssetResponseDto
     * @throws ApiError
     */
    public static getFullSyncForUser(
        requestBody: AssetFullSyncDto,
    ): CancelablePromise<Array<AssetResponseDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sync/full-sync',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Stream sync changes
     * Retrieve a JSON lines streamed response of changes for synchronization. This endpoint is used by the mobile app to efficiently stay up to date with changes.
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static getSyncStream(
        requestBody: SyncStreamDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sync/stream',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
