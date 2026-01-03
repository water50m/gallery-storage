/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationDeleteAllDto } from '../models/NotificationDeleteAllDto';
import type { NotificationDto } from '../models/NotificationDto';
import type { NotificationLevel } from '../models/NotificationLevel';
import type { NotificationType } from '../models/NotificationType';
import type { NotificationUpdateAllDto } from '../models/NotificationUpdateAllDto';
import type { NotificationUpdateDto } from '../models/NotificationUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NotificationsService {
    /**
     * Delete notifications
     * Delete a list of notifications at once.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static deleteNotifications(
        requestBody: NotificationDeleteAllDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/notifications',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve notifications
     * Retrieve a list of notifications.
     * @param id
     * @param level
     * @param type
     * @param unread
     * @returns NotificationDto
     * @throws ApiError
     */
    public static getNotifications(
        id?: string,
        level?: NotificationLevel,
        type?: NotificationType,
        unread?: boolean,
    ): CancelablePromise<Array<NotificationDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notifications',
            query: {
                'id': id,
                'level': level,
                'type': type,
                'unread': unread,
            },
        });
    }
    /**
     * Update notifications
     * Update a list of notifications. Allows to bulk-set the read status of notifications.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateNotifications(
        requestBody: NotificationUpdateAllDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/notifications',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a notification
     * Delete a specific notification.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteNotification(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/notifications/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a notification
     * Retrieve a specific notification identified by id.
     * @param id
     * @returns NotificationDto
     * @throws ApiError
     */
    public static getNotification(
        id: string,
    ): CancelablePromise<NotificationDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notifications/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a notification
     * Update a specific notification to set its read status.
     * @param id
     * @param requestBody
     * @returns NotificationDto
     * @throws ApiError
     */
    public static updateNotification(
        id: string,
        requestBody: NotificationUpdateDto,
    ): CancelablePromise<NotificationDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/notifications/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
