/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PersonResponseDto } from './PersonResponseDto';
import type { SourceType } from './SourceType';
export type AssetFaceResponseDto = {
    boundingBoxX1: number;
    boundingBoxX2: number;
    boundingBoxY1: number;
    boundingBoxY2: number;
    id: string;
    imageHeight: number;
    imageWidth: number;
    person: PersonResponseDto | null;
    sourceType?: SourceType;
};

