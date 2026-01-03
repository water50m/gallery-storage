/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowCreateDto } from '../models/WorkflowCreateDto';
import type { WorkflowResponseDto } from '../models/WorkflowResponseDto';
import type { WorkflowUpdateDto } from '../models/WorkflowUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WorkflowsService {
    /**
     * List all workflows
     * Retrieve a list of workflows available to the authenticated user.
     * @returns WorkflowResponseDto
     * @throws ApiError
     */
    public static getWorkflows(): CancelablePromise<Array<WorkflowResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workflows',
        });
    }
    /**
     * Create a workflow
     * Create a new workflow, the workflow can also be created with empty filters and actions.
     * @param requestBody
     * @returns WorkflowResponseDto
     * @throws ApiError
     */
    public static createWorkflow(
        requestBody: WorkflowCreateDto,
    ): CancelablePromise<WorkflowResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workflows',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a workflow
     * Delete a workflow by its ID.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteWorkflow(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workflows/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Retrieve a workflow
     * Retrieve information about a specific workflow by its ID.
     * @param id
     * @returns WorkflowResponseDto
     * @throws ApiError
     */
    public static getWorkflow(
        id: string,
    ): CancelablePromise<WorkflowResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workflows/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a workflow
     * Update the information of a specific workflow by its ID. This endpoint can be used to update the workflow name, description, trigger type, filters and actions order, etc.
     * @param id
     * @param requestBody
     * @returns WorkflowResponseDto
     * @throws ApiError
     */
    public static updateWorkflow(
        id: string,
        requestBody: WorkflowUpdateDto,
    ): CancelablePromise<WorkflowResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/workflows/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
