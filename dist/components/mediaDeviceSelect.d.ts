import type { Room } from 'livekit-client';
export declare function setupDeviceSelector(kind: MediaDeviceKind, room?: Room): {
    className: string;
    activeDeviceObservable: import("rxjs").Observable<string | undefined>;
    setActiveMediaDevice: (id: string) => Promise<void>;
};
//# sourceMappingURL=mediaDeviceSelect.d.ts.map