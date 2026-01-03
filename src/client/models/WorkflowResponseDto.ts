/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PluginTriggerType } from './PluginTriggerType';
import type { WorkflowActionResponseDto } from './WorkflowActionResponseDto';
import type { WorkflowFilterResponseDto } from './WorkflowFilterResponseDto';
export type WorkflowResponseDto = {
    actions: Array<WorkflowActionResponseDto>;
    createdAt: string;
    description: string;
    enabled: boolean;
    filters: Array<WorkflowFilterResponseDto>;
    id: string;
    name: string | null;
    ownerId: string;
    triggerType: PluginTriggerType;
};

