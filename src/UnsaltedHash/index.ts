import { LocalFile } from "@anderjason/node-filesystem";
import { hashedBufferGivenLocalFile } from "./_internal/hashedBufferGivenLocalFile";
import { hashedBufferGivenUnhashedBuffer } from "../SaltedHash/_internal/hashedBufferGivenUnhashedBuffer";

export class UnsaltedHash {
  private _hash: Buffer;

  static givenUnhashedString(unhashedString: string): UnsaltedHash {
    const hashedBuffer = hashedBufferGivenUnhashedBuffer(
      Buffer.from(unhashedString)
    );

    return new UnsaltedHash(hashedBuffer);
  }

  static async givenLocalFile(localFile: LocalFile): Promise<UnsaltedHash> {
    const hashedBuffer = await hashedBufferGivenLocalFile(localFile);
    return new UnsaltedHash(hashedBuffer);
  }

  static givenUnhashedBuffer(unhashedBuffer: Buffer): UnsaltedHash {
    const hashedBuffer = hashedBufferGivenUnhashedBuffer(unhashedBuffer);
    return new UnsaltedHash(hashedBuffer);
  }

  static givenHashedString(hashedString: string): UnsaltedHash {
    if (hashedString.includes(".")) {
      throw new Error("Not a valid hashed string for InsecureComparisonHash");
    }

    return new UnsaltedHash(Buffer.from(hashedString, "hex"));
  }

  static isEqual(a: UnsaltedHash, b: UnsaltedHash): boolean {
    if (a == null && b == null) {
      return true;
    }

    if (a == null || b == null) {
      return false;
    }

    return a.isEqual(b);
  }

  private constructor(hash: Buffer) {
    this._hash = hash;
  }

  isEqual(other: UnsaltedHash): boolean {
    if (other == null) {
      return false;
    }

    if (!(other instanceof UnsaltedHash)) {
      return false;
    }

    return this._hash.equals(other._hash);
  }

  matchesUnhashedString(unhashedString: string): boolean {
    const testHash = hashedBufferGivenUnhashedBuffer(
      Buffer.from(unhashedString)
    );

    return testHash.equals(this._hash);
  }

  matchesUnhashedBuffer(unhashedBuffer: Buffer): boolean {
    const testHash = hashedBufferGivenUnhashedBuffer(unhashedBuffer);

    return testHash.equals(this._hash);
  }

  async matchesLocalFile(localFile: LocalFile): Promise<boolean> {
    const testHash = await hashedBufferGivenLocalFile(localFile);

    return testHash.equals(this._hash);
  }

  toHashedString(): string {
    return this._hash.toString("hex");
  }
}
