/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationLevel } from './NotificationLevel';
import type { NotificationType } from './NotificationType';
export type NotificationCreateDto = {
    data?: Record<string, any>;
    description?: string | null;
    level?: NotificationLevel;
    readAt?: string | null;
    title: string;
    type?: NotificationType;
    userId: string;
};

