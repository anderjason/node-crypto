import { hash } from "tweetnacl";

export function hashedBufferOfUnhashedBuffer(
  unhashedBuffer: Buffer,
  salt: Buffer
): Buffer {
  return Buffer.from(hash(Buffer.concat([unhashedBuffer, salt])));
}
