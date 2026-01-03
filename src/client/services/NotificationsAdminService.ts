/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationCreateDto } from '../models/NotificationCreateDto';
import type { NotificationDto } from '../models/NotificationDto';
import type { SystemConfigSmtpDto } from '../models/SystemConfigSmtpDto';
import type { TemplateDto } from '../models/TemplateDto';
import type { TemplateResponseDto } from '../models/TemplateResponseDto';
import type { TestEmailResponseDto } from '../models/TestEmailResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NotificationsAdminService {
    /**
     * Create a notification
     * Create a new notification for a specific user.
     * @param requestBody
     * @returns NotificationDto
     * @throws ApiError
     */
    public static createNotification(
        requestBody: NotificationCreateDto,
    ): CancelablePromise<NotificationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/notifications',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Render email template
     * Retrieve a preview of the provided email template.
     * @param name
     * @param requestBody
     * @returns TemplateResponseDto
     * @throws ApiError
     */
    public static getNotificationTemplateAdmin(
        name: string,
        requestBody: TemplateDto,
    ): CancelablePromise<TemplateResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/notifications/templates/{name}',
            path: {
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Send test email
     * Send a test email using the provided SMTP configuration.
     * @param requestBody
     * @returns TestEmailResponseDto
     * @throws ApiError
     */
    public static sendTestEmailAdmin(
        requestBody: SystemConfigSmtpDto,
    ): CancelablePromise<TestEmailResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/notifications/test-email',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
