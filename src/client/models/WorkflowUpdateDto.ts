/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PluginTriggerType } from './PluginTriggerType';
import type { WorkflowActionItemDto } from './WorkflowActionItemDto';
import type { WorkflowFilterItemDto } from './WorkflowFilterItemDto';
export type WorkflowUpdateDto = {
    actions?: Array<WorkflowActionItemDto>;
    description?: string;
    enabled?: boolean;
    filters?: Array<WorkflowFilterItemDto>;
    name?: string;
    triggerType?: PluginTriggerType;
};

