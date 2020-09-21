import { bufferOfRandomSecretKey } from "./_internal/bufferOfRandomSecretKey";
import { secretbox } from "tweetnacl";

export class SecretKey {
  readonly buffer: Buffer;

  static givenHexString(hex: string): SecretKey {
    const buffer = Buffer.from(hex, "hex");

    if (buffer.length !== secretbox.keyLength) {
      throw new Error("The provided hex secret key has an invalid length");
    }

    return new SecretKey(buffer);
  }

  static ofRandomData(): SecretKey {
    return new SecretKey(bufferOfRandomSecretKey());
  }

  static isEqual(a: SecretKey, b: SecretKey): boolean {
    if (a == null && b == null) {
      return true;
    }

    if (a == null || b == null) {
      return false;
    }

    return a.isEqual(b);
  }

  private constructor(buffer: Buffer) {
    this.buffer = buffer;
  }

  isEqual(other: SecretKey): boolean {
    if (other == null) {
      return false;
    }

    if (!(other instanceof SecretKey)) {
      return false;
    }

    return this.buffer.equals(other.buffer);
  }

  toHexString(): string {
    return this.buffer.toString("hex");
  }
}
