/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserAvatarColor } from './UserAvatarColor';
export type UserAdminUpdateDto = {
    avatarColor?: UserAvatarColor | null;
    email?: string;
    isAdmin?: boolean;
    name?: string;
    password?: string;
    pinCode?: string | null;
    quotaSizeInBytes?: number | null;
    shouldChangePassword?: boolean;
    storageLabel?: string | null;
};

