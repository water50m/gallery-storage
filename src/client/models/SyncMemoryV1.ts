/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MemoryType } from './MemoryType';
export type SyncMemoryV1 = {
    createdAt: string;
    data: Record<string, any>;
    deletedAt: string | null;
    hideAt: string | null;
    id: string;
    isSaved: boolean;
    memoryAt: string;
    ownerId: string;
    seenAt: string | null;
    showAt: string | null;
    type: MemoryType;
    updatedAt: string;
};

