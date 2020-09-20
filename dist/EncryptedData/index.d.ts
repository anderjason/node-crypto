/// <reference types="node" />
import { SecretKey } from "../SecretKey";
export declare class EncryptedData {
    private _encryptedBuffer;
    static ofPlainText(plainText: string, secretKey: SecretKey): EncryptedData;
    static ofDecryptedBuffer(decryptedBuffer: Buffer, secretKey: SecretKey): EncryptedData;
    static ofEncryptedBase64(base64: string): EncryptedData;
    private constructor();
    toPlainText(secretKey: SecretKey): string;
    toDecryptedBuffer(secretKey: SecretKey): Buffer;
    toEncryptedBase64(): string;
}
