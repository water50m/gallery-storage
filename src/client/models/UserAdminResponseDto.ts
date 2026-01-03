/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserAvatarColor } from './UserAvatarColor';
import type { UserLicense } from './UserLicense';
import type { UserStatus } from './UserStatus';
export type UserAdminResponseDto = {
    avatarColor: UserAvatarColor;
    createdAt: string;
    deletedAt: string | null;
    email: string;
    id: string;
    isAdmin: boolean;
    license: UserLicense | null;
    name: string;
    oauthId: string;
    profileChangedAt: string;
    profileImagePath: string;
    quotaSizeInBytes: number | null;
    quotaUsageInBytes: number | null;
    shouldChangePassword: boolean;
    status: UserStatus;
    storageLabel: string | null;
    updatedAt: string;
};

