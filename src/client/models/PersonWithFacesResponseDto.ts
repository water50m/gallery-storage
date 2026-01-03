/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetFaceWithoutPersonResponseDto } from './AssetFaceWithoutPersonResponseDto';
export type PersonWithFacesResponseDto = {
    birthDate: string | null;
    color?: string;
    faces: Array<AssetFaceWithoutPersonResponseDto>;
    id: string;
    isFavorite?: boolean;
    isHidden: boolean;
    name: string;
    thumbnailPath: string;
    updatedAt?: string;
};

