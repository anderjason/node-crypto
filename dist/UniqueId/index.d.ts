export declare class UniqueId {
    static ofRandom(): UniqueId;
    static givenUUIDString(uuid: string): UniqueId;
    static isEqual(a: UniqueId, b: UniqueId): boolean;
    private _uuid;
    private constructor();
    isEqual(other: UniqueId): boolean;
    toUUIDString(): string;
}
