/// <reference types="node" />
import { SecretKey } from "../SecretKey";
export declare class EncryptedData {
    private _encryptedBuffer;
    static givenDecryptedStringAndKey(decryptedString: string, secretKey: SecretKey): EncryptedData;
    static givenDecryptedBufferAndKey(decryptedBuffer: Buffer, secretKey: SecretKey): EncryptedData;
    static givenEncryptedHexString(base64: string): EncryptedData;
    static isEqual(a: SecretKey, b: SecretKey): boolean;
    private constructor();
    isEqual(other: EncryptedData): boolean;
    toDecryptedString(secretKey: SecretKey): string;
    toDecryptedBuffer(secretKey: SecretKey): Buffer;
    toEncryptedHexString(): string;
}
