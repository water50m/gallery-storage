/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AlbumUserResponseDto } from './AlbumUserResponseDto';
import type { AssetOrder } from './AssetOrder';
import type { AssetResponseDto } from './AssetResponseDto';
import type { ContributorCountResponseDto } from './ContributorCountResponseDto';
import type { UserResponseDto } from './UserResponseDto';
export type AlbumResponseDto = {
    albumName: string;
    albumThumbnailAssetId: string | null;
    albumUsers: Array<AlbumUserResponseDto>;
    assetCount: number;
    assets: Array<AssetResponseDto>;
    contributorCounts?: Array<ContributorCountResponseDto>;
    createdAt: string;
    description: string;
    endDate?: string;
    hasSharedLink: boolean;
    id: string;
    isActivityEnabled: boolean;
    lastModifiedAssetTimestamp?: string;
    order?: AssetOrder;
    owner: UserResponseDto;
    ownerId: string;
    shared: boolean;
    startDate?: string;
    updatedAt: string;
};

