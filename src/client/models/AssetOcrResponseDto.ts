/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AssetOcrResponseDto = {
    assetId: string;
    /**
     * Confidence score for text detection box
     */
    boxScore: number;
    id: string;
    /**
     * Recognized text
     */
    text: string;
    /**
     * Confidence score for text recognition
     */
    textScore: number;
    /**
     * Normalized x coordinate of box corner 1 (0-1)
     */
    x1: number;
    /**
     * Normalized x coordinate of box corner 2 (0-1)
     */
    x2: number;
    /**
     * Normalized x coordinate of box corner 3 (0-1)
     */
    x3: number;
    /**
     * Normalized x coordinate of box corner 4 (0-1)
     */
    x4: number;
    /**
     * Normalized y coordinate of box corner 1 (0-1)
     */
    y1: number;
    /**
     * Normalized y coordinate of box corner 2 (0-1)
     */
    y2: number;
    /**
     * Normalized y coordinate of box corner 3 (0-1)
     */
    y3: number;
    /**
     * Normalized y coordinate of box corner 4 (0-1)
     */
    y4: number;
};

