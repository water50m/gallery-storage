/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OAuthTokenEndpointAuthMethod } from './OAuthTokenEndpointAuthMethod';
export type SystemConfigOAuthDto = {
    autoLaunch: boolean;
    autoRegister: boolean;
    buttonText: string;
    clientId: string;
    clientSecret: string;
    defaultStorageQuota: number | null;
    enabled: boolean;
    issuerUrl: string;
    mobileOverrideEnabled: boolean;
    mobileRedirectUri: string;
    profileSigningAlgorithm: string;
    roleClaim: string;
    scope: string;
    signingAlgorithm: string;
    storageLabelClaim: string;
    storageQuotaClaim: string;
    timeout: number;
    tokenEndpointAuthMethod: OAuthTokenEndpointAuthMethod;
};

