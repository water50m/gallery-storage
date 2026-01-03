/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JobCreateDto } from '../models/JobCreateDto';
import type { QueueCommandDto } from '../models/QueueCommandDto';
import type { QueueName } from '../models/QueueName';
import type { QueueResponseLegacyDto } from '../models/QueueResponseLegacyDto';
import type { QueuesResponseLegacyDto } from '../models/QueuesResponseLegacyDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class JobsService {
    /**
     * @deprecated
     * Retrieve queue counts and status
     * Retrieve the counts of the current queue, as well as the current status.
     * @returns QueuesResponseLegacyDto
     * @throws ApiError
     */
    public static getQueuesLegacy(): CancelablePromise<QueuesResponseLegacyDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/jobs',
        });
    }
    /**
     * Create a manual job
     * Run a specific job. Most jobs are queued automatically, but this endpoint allows for manual creation of a handful of jobs, including various cleanup tasks, as well as creating a new database backup.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static createJob(
        requestBody: JobCreateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/jobs',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @deprecated
     * Run jobs
     * Queue all assets for a specific job type. Defaults to only queueing assets that have not yet been processed, but the force command can be used to re-process all assets.
     * @param name
     * @param requestBody
     * @returns QueueResponseLegacyDto
     * @throws ApiError
     */
    public static runQueueCommandLegacy(
        name: QueueName,
        requestBody: QueueCommandDto,
    ): CancelablePromise<QueueResponseLegacyDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/jobs/{name}',
            path: {
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
