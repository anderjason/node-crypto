import { SecretKey } from "../SecretKey";
import { encryptedBufferOfDecryptedBuffer } from "./_internal/encryptedBufferOfDecryptedBuffer";
import { decryptedBufferOfEncryptedBuffer } from "./_internal/decryptedBufferOfEncryptedBuffer";

export class EncryptedData {
  private _encryptedBuffer: Buffer;

  static ofPlainText(plainText: string, secretKey: SecretKey): EncryptedData {
    return new EncryptedData(
      encryptedBufferOfDecryptedBuffer(Buffer.from(plainText), secretKey)
    );
  }

  static ofDecryptedBuffer(
    decryptedBuffer: Buffer,
    secretKey: SecretKey
  ): EncryptedData {
    return new EncryptedData(
      encryptedBufferOfDecryptedBuffer(decryptedBuffer, secretKey)
    );
  }

  static ofEncryptedBase64(base64: string): EncryptedData {
    return new EncryptedData(Buffer.from(base64, "base64"));
  }

  private constructor(encryptedBuffer: Buffer) {
    this._encryptedBuffer = encryptedBuffer;
  }

  toPlainText(secretKey: SecretKey): string {
    return this.toDecryptedBuffer(secretKey).toString();
  }

  toDecryptedBuffer(secretKey: SecretKey): Buffer {
    return decryptedBufferOfEncryptedBuffer(this._encryptedBuffer, secretKey);
  }

  toEncryptedBase64(): string {
    return this._encryptedBuffer.toString("base64");
  }
}
