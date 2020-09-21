import { randomBytes } from "tweetnacl";

export function bufferOfRandomSalt(): Buffer {
  return Buffer.from(randomBytes(64));
}
