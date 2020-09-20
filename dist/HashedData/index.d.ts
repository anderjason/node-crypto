/// <reference types="node" />
import { LocalFile } from "@anderjason/node-filesystem";
interface HashedDataOfPlainTextOptions {
    plainText: string;
    salt: "random" | "none";
}
interface HashedDataOfLocalFileOptions {
    localFile: LocalFile;
    salt: "random" | "none";
}
interface HashedDataOfUnhashedBufferOptions {
    unhashedBuffer: Buffer;
    salt: "random" | "none";
}
export declare class HashedData {
    private _hash;
    private _salt;
    static ofPlainText(options: HashedDataOfPlainTextOptions): HashedData;
    static ofLocalFile(options: HashedDataOfLocalFileOptions): Promise<HashedData>;
    static ofUnhashedBuffer(options: HashedDataOfUnhashedBufferOptions): HashedData;
    static ofBase64(base64: string): HashedData;
    static ofHex(hex: string): HashedData;
    private constructor();
    isEqualToPlainText(plainText: string): boolean;
    isEqualToFile(file: LocalFile): Promise<boolean>;
    isEqualToUnhashedBuffer(unhashedBuffer: Buffer): boolean;
    isSaltPresent(): boolean;
    toBase64(): string;
    toHex(): string;
}
export {};
