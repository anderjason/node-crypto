/// <reference types="node" />
import { LocalFile } from "@anderjason/node-filesystem";
export declare class UnsaltedHash {
    private _hash;
    static givenUnhashedString(unhashedString: string): UnsaltedHash;
    static givenLocalFile(localFile: LocalFile): Promise<UnsaltedHash>;
    static givenUnhashedBuffer(unhashedBuffer: Buffer): UnsaltedHash;
    static givenHashedString(hashedString: string): UnsaltedHash;
    static isEqual(a: UnsaltedHash, b: UnsaltedHash): boolean;
    private constructor();
    isEqual(other: UnsaltedHash): boolean;
    matchesUnhashedString(unhashedString: string): boolean;
    matchesUnhashedBuffer(unhashedBuffer: Buffer): boolean;
    matchesLocalFile(localFile: LocalFile): Promise<boolean>;
    toHashedString(): string;
}
