import { randomBytes, secretbox } from "tweetnacl";
import { SecretKey } from "../../SecretKey";

const newNonce = () => randomBytes(secretbox.nonceLength);

export function encryptedBufferOfDecryptedBuffer(
  decryptedBuffer: Buffer,
  secretKey: SecretKey
): Buffer {
  const nonce = newNonce();
  const box = secretbox(decryptedBuffer, nonce, secretKey.buffer);

  const fullMessage = new Uint8Array(nonce.length + box.length);
  fullMessage.set(nonce);
  fullMessage.set(box, nonce.length);

  return Buffer.from(fullMessage);
}
