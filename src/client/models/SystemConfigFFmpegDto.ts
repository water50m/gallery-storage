/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AudioCodec } from './AudioCodec';
import type { CQMode } from './CQMode';
import type { ToneMapping } from './ToneMapping';
import type { TranscodeHWAccel } from './TranscodeHWAccel';
import type { TranscodePolicy } from './TranscodePolicy';
import type { VideoCodec } from './VideoCodec';
import type { VideoContainer } from './VideoContainer';
export type SystemConfigFFmpegDto = {
    accel: TranscodeHWAccel;
    accelDecode: boolean;
    acceptedAudioCodecs: Array<AudioCodec>;
    acceptedContainers: Array<VideoContainer>;
    acceptedVideoCodecs: Array<VideoCodec>;
    bframes: number;
    cqMode: CQMode;
    crf: number;
    gopSize: number;
    maxBitrate: string;
    preferredHwDevice: string;
    preset: string;
    refs: number;
    targetAudioCodec: AudioCodec;
    targetResolution: string;
    targetVideoCodec: VideoCodec;
    temporalAQ: boolean;
    threads: number;
    tonemap: ToneMapping;
    transcode: TranscodePolicy;
    twoPass: boolean;
};

