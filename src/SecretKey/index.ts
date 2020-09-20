import { bufferOfRandomSecretKey } from "./_internal/bufferOfRandomSecretKey";
import { secretbox } from "tweetnacl";

export class SecretKey {
  readonly buffer: Buffer;

  static ofBase64(base64: string): SecretKey {
    const buffer = Buffer.from(base64, "base64");

    if (buffer.length !== secretbox.keyLength) {
      throw new Error("The provided base64 secret key has an invalid length");
    }

    return new SecretKey(buffer);
  }

  static ofHex(hex: string): SecretKey {
    const buffer = Buffer.from(hex, "hex");

    if (buffer.length !== secretbox.keyLength) {
      throw new Error("The provided hex secret key has an invalid length");
    }

    return new SecretKey(buffer);
  }

  static ofRandomData(): SecretKey {
    return new SecretKey(bufferOfRandomSecretKey());
  }

  private constructor(buffer: Buffer) {
    this.buffer = buffer;
  }

  toBase64(): string {
    return this.buffer.toString("base64");
  }

  toHex(): string {
    return this.buffer.toString("hex");
  }
}
