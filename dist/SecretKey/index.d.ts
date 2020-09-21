/// <reference types="node" />
export declare class SecretKey {
    readonly buffer: Buffer;
    static givenHexString(hex: string): SecretKey;
    static ofRandomData(): SecretKey;
    static isEqual(a: SecretKey, b: SecretKey): boolean;
    private constructor();
    isEqual(other: SecretKey): boolean;
    toHexString(): string;
}
