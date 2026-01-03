/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AssetBulkUploadCheckResult = {
    action: AssetBulkUploadCheckResult.action;
    assetId?: string;
    id: string;
    isTrashed?: boolean;
    reason?: AssetBulkUploadCheckResult.reason;
};
export namespace AssetBulkUploadCheckResult {
    export enum action {
        ACCEPT = 'accept',
        REJECT = 'reject',
    }
    export enum reason {
        DUPLICATE = 'duplicate',
        UNSUPPORTED_FORMAT = 'unsupported-format',
    }
}

