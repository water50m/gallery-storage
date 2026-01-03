/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AssetIdsResponseDto = {
    assetId: string;
    error?: AssetIdsResponseDto.error;
    success: boolean;
};
export namespace AssetIdsResponseDto {
    export enum error {
        DUPLICATE = 'duplicate',
        NO_PERMISSION = 'no_permission',
        NOT_FOUND = 'not_found',
    }
}

