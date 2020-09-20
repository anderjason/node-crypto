import { LocalFile } from "@anderjason/node-filesystem";
import { hashedBufferOfFile as hashedBufferOfLocalFile } from "./_internal/hashedBufferOfFile";
import { hashedBufferOfUnhashedBuffer } from "./_internal/hashedBufferOfUnhashedBuffer";
import { bufferOfRandomSalt } from "./_internal/bufferOfRandomSalt";

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

export class HashedData {
  private _hash: Buffer;
  private _salt: Buffer;

  static ofPlainText(options: HashedDataOfPlainTextOptions): HashedData {
    let salt: Buffer;
    switch (options.salt) {
      case "random":
        salt = bufferOfRandomSalt();
        break;
      case "none":
        salt = Buffer.from([]);
        break;
      default:
        throw new Error("Unsupported value for salt");
    }

    const hash = hashedBufferOfUnhashedBuffer(
      Buffer.from(options.plainText),
      salt
    );
    return new HashedData(hash, salt);
  }

  static async ofLocalFile(
    options: HashedDataOfLocalFileOptions
  ): Promise<HashedData> {
    let salt: Buffer;
    switch (options.salt) {
      case "random":
        salt = bufferOfRandomSalt();
        break;
      case "none":
        salt = Buffer.from([]);
        break;
      default:
        throw new Error("Unsupported value for salt");
    }

    const hash = await hashedBufferOfLocalFile(options.localFile);
    return new HashedData(hash, salt);
  }

  static ofUnhashedBuffer(
    options: HashedDataOfUnhashedBufferOptions
  ): HashedData {
    let salt: Buffer;
    switch (options.salt) {
      case "random":
        salt = bufferOfRandomSalt();
        break;
      case "none":
        salt = Buffer.from([]);
        break;
      default:
        throw new Error("Unsupported value for salt");
    }

    const hash = hashedBufferOfUnhashedBuffer(options.unhashedBuffer, salt);
    return new HashedData(hash, salt);
  }

  static ofBase64(base64: string): HashedData {
    if (base64.includes(".")) {
      const parts = base64.split(".");
      const hash = Buffer.from(parts[0], "base64");
      const salt = Buffer.from(parts[1], "base64");

      return new HashedData(hash, salt);
    } else {
      return new HashedData(Buffer.from(base64), Buffer.from([]));
    }
  }

  static ofHex(hex: string): HashedData {
    if (hex.includes(".")) {
      const parts = hex.split(".");
      const hash = Buffer.from(parts[0], "hex");
      const salt = Buffer.from(parts[1], "hex");

      return new HashedData(hash, salt);
    } else {
      return new HashedData(Buffer.from(hex), Buffer.from([]));
    }
  }

  private constructor(hash: Buffer, salt: Buffer) {
    this._hash = hash;
    this._salt = salt;
  }

  isEqualToPlainText(plainText: string): boolean {
    const testHash = hashedBufferOfUnhashedBuffer(
      Buffer.from(plainText),
      this._salt
    );

    return testHash.equals(this._hash);
  }

  async isEqualToFile(file: LocalFile): Promise<boolean> {
    const testHash = await hashedBufferOfLocalFile(file);

    return testHash.equals(this._hash);
  }

  isEqualToUnhashedBuffer(unhashedBuffer: Buffer): boolean {
    const testHash = hashedBufferOfUnhashedBuffer(unhashedBuffer, this._salt);

    return testHash.equals(this._hash);
  }

  isSaltPresent(): boolean {
    return this._salt.length > 0;
  }

  toBase64(): string {
    const hash = this._hash.toString("base64");

    if (this.isSaltPresent()) {
      const salt = this._salt.toString("base64");

      return `${hash}.${salt}`;
    } else {
      return hash;
    }
  }

  toHex(): string {
    const hash = this._hash.toString("hex");

    if (this.isSaltPresent()) {
      const salt = this._salt.toString("hex");

      return `${hash}.${salt}`;
    } else {
      return hash;
    }
  }
}
