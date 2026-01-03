/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueueDeleteDto } from '../models/QueueDeleteDto';
import type { QueueJobResponseDto } from '../models/QueueJobResponseDto';
import type { QueueJobStatus } from '../models/QueueJobStatus';
import type { QueueName } from '../models/QueueName';
import type { QueueResponseDto } from '../models/QueueResponseDto';
import type { QueueUpdateDto } from '../models/QueueUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QueuesService {
    /**
     * List all queues
     * Retrieves a list of queues.
     * @returns QueueResponseDto
     * @throws ApiError
     */
    public static getQueues(): CancelablePromise<Array<QueueResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/queues',
        });
    }
    /**
     * Retrieve a queue
     * Retrieves a specific queue by its name.
     * @param name
     * @returns QueueResponseDto
     * @throws ApiError
     */
    public static getQueue(
        name: QueueName,
    ): CancelablePromise<QueueResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/queues/{name}',
            path: {
                'name': name,
            },
        });
    }
    /**
     * Update a queue
     * Change the paused status of a specific queue.
     * @param name
     * @param requestBody
     * @returns QueueResponseDto
     * @throws ApiError
     */
    public static updateQueue(
        name: QueueName,
        requestBody: QueueUpdateDto,
    ): CancelablePromise<QueueResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/queues/{name}',
            path: {
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Empty a queue
     * Removes all jobs from the specified queue.
     * @param name
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static emptyQueue(
        name: QueueName,
        requestBody: QueueDeleteDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/queues/{name}/jobs',
            path: {
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve queue jobs
     * Retrieves a list of queue jobs from the specified queue.
     * @param name
     * @param status
     * @returns QueueJobResponseDto
     * @throws ApiError
     */
    public static getQueueJobs(
        name: QueueName,
        status?: Array<QueueJobStatus>,
    ): CancelablePromise<Array<QueueJobResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/queues/{name}/jobs',
            path: {
                'name': name,
            },
            query: {
                'status': status,
            },
        });
    }
}
