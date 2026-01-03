/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CLIPConfig } from './CLIPConfig';
import type { DuplicateDetectionConfig } from './DuplicateDetectionConfig';
import type { FacialRecognitionConfig } from './FacialRecognitionConfig';
import type { MachineLearningAvailabilityChecksDto } from './MachineLearningAvailabilityChecksDto';
import type { OcrConfig } from './OcrConfig';
export type SystemConfigMachineLearningDto = {
    availabilityChecks: MachineLearningAvailabilityChecksDto;
    clip: CLIPConfig;
    duplicateDetection: DuplicateDetectionConfig;
    enabled: boolean;
    facialRecognition: FacialRecognitionConfig;
    ocr: OcrConfig;
    urls: Array<string>;
};

