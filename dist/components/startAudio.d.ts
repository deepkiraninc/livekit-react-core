import type { Room } from 'livekit-client';
declare function roomAudioPlaybackAllowedObservable(room: Room): import("rxjs").Observable<{
    canPlayAudio: boolean;
}>;
export declare function setupStartAudio(): {
    className: string;
    roomAudioPlaybackAllowedObservable: typeof roomAudioPlaybackAllowedObservable;
    handleStartAudioPlayback: (room: Room) => Promise<void>;
};
export {};
//# sourceMappingURL=startAudio.d.ts.map