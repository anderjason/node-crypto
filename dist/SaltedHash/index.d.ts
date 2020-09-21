/// <reference types="node" />
export declare class SaltedHash {
    private _hash;
    private _salt;
    static givenUnhashedString(unhashedString: string): SaltedHash;
    static givenUnhashedBuffer(unhashedBuffer: Buffer): SaltedHash;
    static givenHashedString(hashedString: string): SaltedHash;
    static isEqual(a: SaltedHash, b: SaltedHash): boolean;
    private constructor();
    isEqual(other: SaltedHash): boolean;
    matchesUnhashedString(unhashedString: string): boolean;
    matchesUnhashedBuffer(unhashedBuffer: Buffer): boolean;
    toHashedString(): string;
}
