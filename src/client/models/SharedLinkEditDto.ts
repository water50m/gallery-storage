/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SharedLinkEditDto = {
    allowDownload?: boolean;
    allowUpload?: boolean;
    /**
     * Few clients cannot send null to set the expiryTime to never.
     * Setting this flag and not sending expiryAt is considered as null instead.
     * Clients that can send null values can ignore this.
     */
    changeExpiryTime?: boolean;
    description?: string | null;
    expiresAt?: string | null;
    password?: string | null;
    showMetadata?: boolean;
    slug?: string | null;
};

