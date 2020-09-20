import { randomBytes, secretbox } from "tweetnacl";

export function bufferOfRandomSecretKey(): Buffer {
  return Buffer.from(randomBytes(secretbox.keyLength));
}
