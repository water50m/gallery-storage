/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserAvatarColor } from './UserAvatarColor';
export type SyncAuthUserV1 = {
    avatarColor: UserAvatarColor | null;
    deletedAt: string | null;
    email: string;
    hasProfileImage: boolean;
    id: string;
    isAdmin: boolean;
    name: string;
    oauthId: string;
    pinCode: string | null;
    profileChangedAt: string;
    quotaSizeInBytes: number | null;
    quotaUsageInBytes: number;
    storageLabel: string | null;
};

