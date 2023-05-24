import { Observable } from 'rxjs';
import type { Participant, TrackPublication } from 'livekit-client';
import { Room, RoomEvent } from 'livekit-client';
import type { RoomEventCallbacks } from 'livekit-client/dist/src/room/Room';
export declare function observeRoomEvents(room: Room, ...events: RoomEvent[]): Observable<Room>;
export declare function roomEventSelector<T extends RoomEvent>(room: Room, event: T): Observable<Parameters<RoomEventCallbacks[T]>>;
export declare function roomObserver(room: Room): Observable<Room>;
export declare function connectionStateObserver(room: Room): Observable<import("livekit-client").ConnectionState>;
export type ScreenShareTrackMap = Array<{
    participant: Participant;
    tracks: Array<TrackPublication>;
}>;
export declare function screenShareObserver(room: Room): Observable<ScreenShareTrackMap>;
export declare function roomInfoObserver(room: Room): Observable<{
    name: string;
    metadata: string | undefined;
}>;
export declare function activeSpeakerObserver(room: Room): Observable<Participant[]>;
export declare function createMediaDeviceObserver(kind?: MediaDeviceKind, requestPermissions?: boolean): Observable<MediaDeviceInfo[]>;
export declare function createDataObserver(room: Room): Observable<[payload: Uint8Array, participant?: import("livekit-client").RemoteParticipant | undefined, kind?: import("livekit-client").DataPacket_Kind | undefined, topic?: string | undefined]>;
//# sourceMappingURL=room.d.ts.map