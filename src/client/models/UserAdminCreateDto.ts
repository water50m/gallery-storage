/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserAvatarColor } from './UserAvatarColor';
export type UserAdminCreateDto = {
    avatarColor?: UserAvatarColor | null;
    email: string;
    isAdmin?: boolean;
    name: string;
    notify?: boolean;
    password: string;
    quotaSizeInBytes?: number | null;
    shouldChangePassword?: boolean;
    storageLabel?: string | null;
};

