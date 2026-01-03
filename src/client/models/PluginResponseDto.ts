/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PluginActionResponseDto } from './PluginActionResponseDto';
import type { PluginFilterResponseDto } from './PluginFilterResponseDto';
export type PluginResponseDto = {
    actions: Array<PluginActionResponseDto>;
    author: string;
    createdAt: string;
    description: string;
    filters: Array<PluginFilterResponseDto>;
    id: string;
    name: string;
    title: string;
    updatedAt: string;
    version: string;
};

