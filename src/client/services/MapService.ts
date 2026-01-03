/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MapMarkerResponseDto } from '../models/MapMarkerResponseDto';
import type { MapReverseGeocodeResponseDto } from '../models/MapReverseGeocodeResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MapService {
    /**
     * Retrieve map markers
     * Retrieve a list of latitude and longitude coordinates for every asset with location data.
     * @param fileCreatedAfter
     * @param fileCreatedBefore
     * @param isArchived
     * @param isFavorite
     * @param withPartners
     * @param withSharedAlbums
     * @returns MapMarkerResponseDto
     * @throws ApiError
     */
    public static getMapMarkers(
        fileCreatedAfter?: string,
        fileCreatedBefore?: string,
        isArchived?: boolean,
        isFavorite?: boolean,
        withPartners?: boolean,
        withSharedAlbums?: boolean,
    ): CancelablePromise<Array<MapMarkerResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/map/markers',
            query: {
                'fileCreatedAfter': fileCreatedAfter,
                'fileCreatedBefore': fileCreatedBefore,
                'isArchived': isArchived,
                'isFavorite': isFavorite,
                'withPartners': withPartners,
                'withSharedAlbums': withSharedAlbums,
            },
        });
    }
    /**
     * Reverse geocode coordinates
     * Retrieve location information (e.g., city, country) for given latitude and longitude coordinates.
     * @param lat
     * @param lon
     * @returns MapReverseGeocodeResponseDto
     * @throws ApiError
     */
    public static reverseGeocode(
        lat: number,
        lon: number,
    ): CancelablePromise<Array<MapReverseGeocodeResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/map/reverse-geocode',
            query: {
                'lat': lat,
                'lon': lon,
            },
        });
    }
}
