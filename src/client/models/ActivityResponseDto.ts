/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReactionType } from './ReactionType';
import type { UserResponseDto } from './UserResponseDto';
export type ActivityResponseDto = {
    assetId: string | null;
    comment?: string | null;
    createdAt: string;
    id: string;
    type: ReactionType;
    user: UserResponseDto;
};

