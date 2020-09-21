import { SecretKey } from "../SecretKey";
import { encryptedBufferGivenDecryptedBuffer } from "./_internal/encryptedBufferGivenDecryptedBuffer";
import { decryptedBufferGivenEncryptedBuffer } from "./_internal/decryptedBufferGivenEncryptedBuffer";

export class EncryptedData {
  private _encryptedBuffer: Buffer;

  static givenDecryptedStringAndKey(
    decryptedString: string,
    secretKey: SecretKey
  ): EncryptedData {
    return new EncryptedData(
      encryptedBufferGivenDecryptedBuffer(
        Buffer.from(decryptedString),
        secretKey
      )
    );
  }

  static givenDecryptedBufferAndKey(
    decryptedBuffer: Buffer,
    secretKey: SecretKey
  ): EncryptedData {
    return new EncryptedData(
      encryptedBufferGivenDecryptedBuffer(decryptedBuffer, secretKey)
    );
  }

  static givenEncryptedHexString(base64: string): EncryptedData {
    return new EncryptedData(Buffer.from(base64, "hex"));
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

  private constructor(encryptedBuffer: Buffer) {
    this._encryptedBuffer = encryptedBuffer;
  }

  isEqual(other: EncryptedData): boolean {
    if (other == null) {
      return false;
    }

    if (!(other instanceof EncryptedData)) {
      return false;
    }

    return this._encryptedBuffer.equals(other._encryptedBuffer);
  }

  toDecryptedString(secretKey: SecretKey): string {
    return this.toDecryptedBuffer(secretKey).toString();
  }

  toDecryptedBuffer(secretKey: SecretKey): Buffer {
    return decryptedBufferGivenEncryptedBuffer(
      this._encryptedBuffer,
      secretKey
    );
  }

  toEncryptedHexString(): string {
    return this._encryptedBuffer.toString("hex");
  }
}
