/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationLevel } from './NotificationLevel';
import type { NotificationType } from './NotificationType';
export type NotificationDto = {
    createdAt: string;
    data?: Record<string, any>;
    description?: string;
    id: string;
    level: NotificationLevel;
    readAt?: string;
    title: string;
    type: NotificationType;
};

