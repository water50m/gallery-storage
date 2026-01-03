/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetFaceWithoutPersonResponseDto } from './AssetFaceWithoutPersonResponseDto';
import type { AssetStackResponseDto } from './AssetStackResponseDto';
import type { AssetTypeEnum } from './AssetTypeEnum';
import type { AssetVisibility } from './AssetVisibility';
import type { ExifResponseDto } from './ExifResponseDto';
import type { PersonWithFacesResponseDto } from './PersonWithFacesResponseDto';
import type { TagResponseDto } from './TagResponseDto';
import type { UserResponseDto } from './UserResponseDto';
export type AssetResponseDto = {
    /**
     * base64 encoded sha1 hash
     */
    checksum: string;
    /**
     * The UTC timestamp when the asset was originally uploaded to Immich.
     */
    createdAt: string;
    deviceAssetId: string;
    deviceId: string;
    duplicateId?: string | null;
    duration: string;
    exifInfo?: ExifResponseDto;
    /**
     * The actual UTC timestamp when the file was created/captured, preserving timezone information. This is the authoritative timestamp for chronological sorting within timeline groups. Combined with timezone data, this can be used to determine the exact moment the photo was taken.
     */
    fileCreatedAt: string;
    /**
     * The UTC timestamp when the file was last modified on the filesystem. This reflects the last time the physical file was changed, which may be different from when the photo was originally taken.
     */
    fileModifiedAt: string;
    hasMetadata: boolean;
    id: string;
    isArchived: boolean;
    isFavorite: boolean;
    isOffline: boolean;
    isTrashed: boolean;
    /**
     * @deprecated
     */
    libraryId?: string | null;
    livePhotoVideoId?: string | null;
    /**
     * The local date and time when the photo/video was taken, derived from EXIF metadata. This represents the photographer's local time regardless of timezone, stored as a timezone-agnostic timestamp. Used for timeline grouping by "local" days and months.
     */
    localDateTime: string;
    originalFileName: string;
    originalMimeType?: string;
    originalPath: string;
    owner?: UserResponseDto;
    ownerId: string;
    people?: Array<PersonWithFacesResponseDto>;
    /**
     * @deprecated
     */
    resized?: boolean;
    stack?: AssetStackResponseDto | null;
    tags?: Array<TagResponseDto>;
    thumbhash: string | null;
    type: AssetTypeEnum;
    unassignedFaces?: Array<AssetFaceWithoutPersonResponseDto>;
    /**
     * The UTC timestamp when the asset record was last updated in the database. This is automatically maintained by the database and reflects when any field in the asset was last modified.
     */
    updatedAt: string;
    visibility: AssetVisibility;
};

