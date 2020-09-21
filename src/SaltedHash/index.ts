import { hashedBufferGivenUnhashedBuffer } from "./_internal/hashedBufferGivenUnhashedBuffer";
import { bufferOfRandomSalt } from "./_internal/bufferOfRandomSalt";

export class SaltedHash {
  private _hash: Buffer;
  private _salt: Buffer;

  static givenUnhashedString(unhashedString: string): SaltedHash {
    const salt: Buffer = bufferOfRandomSalt();

    const hashedBuffer = hashedBufferGivenUnhashedBuffer(
      Buffer.from(unhashedString),
      salt
    );

    return new SaltedHash(hashedBuffer, salt);
  }

  static givenUnhashedBuffer(unhashedBuffer: Buffer): SaltedHash {
    const salt: Buffer = bufferOfRandomSalt();
    const hashedBuffer = hashedBufferGivenUnhashedBuffer(unhashedBuffer, salt);
    return new SaltedHash(hashedBuffer, salt);
  }

  static givenHashedString(hashedString: string): SaltedHash {
    if (!hashedString.includes(".")) {
      throw new Error("Invalid hashed string");
    }

    const parts = hashedString.split(".");
    const hash = Buffer.from(parts[0], "hex");
    const salt = Buffer.from(parts[1], "hex");

    return new SaltedHash(hash, salt);
  }

  static isEqual(a: SaltedHash, b: SaltedHash): boolean {
    if (a == null && b == null) {
      return true;
    }

    if (a == null || b == null) {
      return false;
    }

    return a.isEqual(b);
  }

  private constructor(hash: Buffer, salt: Buffer) {
    this._hash = hash;
    this._salt = salt;
  }

  isEqual(other: SaltedHash): boolean {
    if (other == null) {
      return false;
    }

    if (!(other instanceof SaltedHash)) {
      return false;
    }

    return this._hash.equals(other._hash) && this._salt.equals(other._salt);
  }

  matchesUnhashedString(unhashedString: string): boolean {
    const testHash = hashedBufferGivenUnhashedBuffer(
      Buffer.from(unhashedString),
      this._salt
    );

    return testHash.equals(this._hash);
  }

  matchesUnhashedBuffer(unhashedBuffer: Buffer): boolean {
    const testHash = hashedBufferGivenUnhashedBuffer(
      unhashedBuffer,
      this._salt
    );

    return testHash.equals(this._hash);
  }

  toHashedString(): string {
    const hash = this._hash.toString("hex");
    const salt = this._salt.toString("hex");

    return `${hash}.${salt}`;
  }
}
