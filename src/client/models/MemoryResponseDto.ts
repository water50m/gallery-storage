/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetResponseDto } from './AssetResponseDto';
import type { MemoryType } from './MemoryType';
import type { OnThisDayDto } from './OnThisDayDto';
export type MemoryResponseDto = {
    assets: Array<AssetResponseDto>;
    createdAt: string;
    data: OnThisDayDto;
    deletedAt?: string;
    hideAt?: string;
    id: string;
    isSaved: boolean;
    memoryAt: string;
    ownerId: string;
    seenAt?: string;
    showAt?: string;
    type: MemoryType;
    updatedAt: string;
};

