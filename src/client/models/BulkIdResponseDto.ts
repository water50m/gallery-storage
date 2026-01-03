/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BulkIdResponseDto = {
    error?: BulkIdResponseDto.error;
    id: string;
    success: boolean;
};
export namespace BulkIdResponseDto {
    export enum error {
        DUPLICATE = 'duplicate',
        NO_PERMISSION = 'no_permission',
        NOT_FOUND = 'not_found',
        UNKNOWN = 'unknown',
    }
}

