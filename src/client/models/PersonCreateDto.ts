/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PersonCreateDto = {
    /**
     * Person date of birth.
     * Note: the mobile app cannot currently set the birth date to null.
     */
    birthDate?: string | null;
    color?: string | null;
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

