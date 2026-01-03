/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MemoryType } from './MemoryType';
import type { OnThisDayDto } from './OnThisDayDto';
export type MemoryCreateDto = {
    assetIds?: Array<string>;
    data: OnThisDayDto;
    isSaved?: boolean;
    memoryAt: string;
    seenAt?: string;
    type: MemoryType;
};

