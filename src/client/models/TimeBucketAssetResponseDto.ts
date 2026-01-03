/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetVisibility } from './AssetVisibility';
export type TimeBucketAssetResponseDto = {
    /**
     * Array of city names extracted from EXIF GPS data
     */
    city: Array<string | null>;
    /**
     * Array of country names extracted from EXIF GPS data
     */
    country: Array<string | null>;
    /**
     * Array of video durations in HH:MM:SS format (null for images)
     */
    duration: Array<string | null>;
    /**
     * Array of file creation timestamps in UTC (ISO 8601 format, without timezone)
     */
    fileCreatedAt: Array<string>;
    /**
     * Array of asset IDs in the time bucket
     */
    id: Array<string>;
    /**
     * Array indicating whether each asset is favorited
     */
    isFavorite: Array<boolean>;
    /**
     * Array indicating whether each asset is an image (false for videos)
     */
    isImage: Array<boolean>;
    /**
     * Array indicating whether each asset is in the trash
     */
    isTrashed: Array<boolean>;
    /**
     * Array of latitude coordinates extracted from EXIF GPS data
     */
    latitude?: Array<number | null>;
    /**
     * Array of live photo video asset IDs (null for non-live photos)
     */
    livePhotoVideoId: Array<string | null>;
    /**
     * Array of UTC offset hours at the time each photo was taken. Positive values are east of UTC, negative values are west of UTC. Values may be fractional (e.g., 5.5 for +05:30, -9.75 for -09:45). Applying this offset to 'fileCreatedAt' will give you the time the photo was taken from the photographer's perspective.
     */
    localOffsetHours: Array<number>;
    /**
     * Array of longitude coordinates extracted from EXIF GPS data
     */
    longitude?: Array<number | null>;
    /**
     * Array of owner IDs for each asset
     */
    ownerId: Array<string>;
    /**
     * Array of projection types for 360° content (e.g., "EQUIRECTANGULAR", "CUBEFACE", "CYLINDRICAL")
     */
    projectionType: Array<string | null>;
    /**
     * Array of aspect ratios (width/height) for each asset
     */
    ratio: Array<number>;
    /**
     * Array of stack information as [stackId, assetCount] tuples (null for non-stacked assets)
     */
    stack?: Array<Array<string> | null>;
    /**
     * Array of BlurHash strings for generating asset previews (base64 encoded)
     */
    thumbhash: Array<string | null>;
    /**
     * Array of visibility statuses for each asset (e.g., ARCHIVE, TIMELINE, HIDDEN, LOCKED)
     */
    visibility: Array<AssetVisibility>;
};

