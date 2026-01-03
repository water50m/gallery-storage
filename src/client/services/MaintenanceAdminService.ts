/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MaintenanceAuthDto } from '../models/MaintenanceAuthDto';
import type { MaintenanceLoginDto } from '../models/MaintenanceLoginDto';
import type { SetMaintenanceModeDto } from '../models/SetMaintenanceModeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MaintenanceAdminService {
    /**
     * Set maintenance mode
     * Put Immich into or take it out of maintenance mode
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static setMaintenanceMode(
        requestBody: SetMaintenanceModeDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/maintenance',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Log into maintenance mode
     * Login with maintenance token or cookie to receive current information and perform further actions.
     * @param requestBody
     * @returns MaintenanceAuthDto
     * @throws ApiError
     */
    public static maintenanceLogin(
        requestBody: MaintenanceLoginDto,
    ): CancelablePromise<MaintenanceAuthDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/maintenance/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
