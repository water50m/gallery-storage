/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PeopleUpdateItem = {
    /**
     * Person date of birth.
     * Note: the mobile app cannot currently set the birth date to null.
     */
    birthDate?: string | null;
    color?: string | null;
    /**
     * Asset is used to get the feature face thumbnail.
     */
    featureFaceAssetId?: string;
    /**
     * Person id.
     */
    id: string;
    isFavorite?: boolean;
    /**
     * Person visibility
     */
    isHidden?: boolean;
    /**
     * Person name.
     */
    name?: string;
};

