/// <reference types="node" />
export declare class SecretKey {
    readonly buffer: Buffer;
    static ofBase64(base64: string): SecretKey;
    static ofHex(hex: string): SecretKey;
    static ofRandomData(): SecretKey;
    private constructor();
    toBase64(): string;
    toHex(): string;
}
