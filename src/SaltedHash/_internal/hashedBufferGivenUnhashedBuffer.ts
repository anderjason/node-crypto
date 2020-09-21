import { hash } from "tweetnacl";

export function hashedBufferGivenUnhashedBuffer(
  unhashedBuffer: Buffer,
  salt?: Buffer
): Buffer {
  if (salt == null) {
    return Buffer.from(hash(unhashedBuffer));
  } else {
    return Buffer.from(hash(Buffer.concat([unhashedBuffer, salt])));
  }
}
