/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SharedLinkType } from './SharedLinkType';
export type SharedLinkCreateDto = {
    albumId?: string;
    allowDownload?: boolean;
    allowUpload?: boolean;
    assetIds?: Array<string>;
    description?: string | null;
    expiresAt?: string | null;
    password?: string | null;
    showMetadata?: boolean;
    slug?: string | null;
    type: SharedLinkType;
};

