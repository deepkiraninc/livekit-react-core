import type { Participant, Track, TrackPublication } from 'livekit-client';
import type { TrackReference, TrackReferenceOrPlaceholder } from './track-reference';
export type PinState = TrackReferenceOrPlaceholder[];
export declare const PIN_DEFAULT_STATE: PinState;
export type WidgetState = {
    showChat: string | null;
};
export declare const WIDGET_DEFAULT_STATE: WidgetState;
export type TrackSourceWithOptions = {
    source: Track.Source;
    withPlaceholder: boolean;
};
export type SourcesArray = Track.Source[] | TrackSourceWithOptions[];
export declare function isSourceWitOptions(source: SourcesArray[number]): source is TrackSourceWithOptions;
export declare function isSourcesWithOptions(sources: SourcesArray): sources is TrackSourceWithOptions[];
export type TrackReferenceFilter = Parameters<TrackReferenceOrPlaceholder[]['filter']>['0'];
export type ParticipantFilter = Parameters<Participant[]['filter']>['0'];
export interface ParticipantClickEvent {
    participant: Participant;
    track?: TrackPublication;
}
export type TrackSource<T extends Track.Source> = RequireAtLeastOne<{
    source: T;
    name: string;
    participant: Participant;
}, 'name' | 'source'>;
/**
 * The TrackIdentifier type is used to select Tracks either based on
 * - Track.Source and/or name of the track, e.g. `{source: Track.Source.Camera}` or `{name: "my-track"}`
 * - TrackReference (participant and publication)
 */
export type TrackIdentifier<T extends Track.Source = Track.Source> = TrackSource<T> | TrackReference;
type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
}[Keys];
export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
}[Keys];
export type AudioSource = Track.Source.Microphone | Track.Source.ScreenShareAudio;
export type VideoSource = Track.Source.Camera | Track.Source.ScreenShare;
export {};
//# sourceMappingURL=types.d.ts.map