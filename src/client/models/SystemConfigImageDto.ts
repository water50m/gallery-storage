/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Colorspace } from './Colorspace';
import type { SystemConfigGeneratedFullsizeImageDto } from './SystemConfigGeneratedFullsizeImageDto';
import type { SystemConfigGeneratedImageDto } from './SystemConfigGeneratedImageDto';
export type SystemConfigImageDto = {
    colorspace: Colorspace;
    extractEmbedded: boolean;
    fullsize: SystemConfigGeneratedFullsizeImageDto;
    preview: SystemConfigGeneratedImageDto;
    thumbnail: SystemConfigGeneratedImageDto;
};

