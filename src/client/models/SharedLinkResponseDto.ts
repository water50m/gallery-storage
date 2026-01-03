/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AlbumResponseDto } from './AlbumResponseDto';
import type { AssetResponseDto } from './AssetResponseDto';
import type { SharedLinkType } from './SharedLinkType';
export type SharedLinkResponseDto = {
    album?: AlbumResponseDto;
    allowDownload: boolean;
    allowUpload: boolean;
    assets: Array<AssetResponseDto>;
    createdAt: string;
    description: string | null;
    expiresAt: string | null;
    id: string;
    key: string;
    password: string | null;
    showMetadata: boolean;
    slug: string | null;
    token?: string | null;
    type: SharedLinkType;
    userId: string;
};

