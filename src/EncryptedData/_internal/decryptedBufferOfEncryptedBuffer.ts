import { secretbox } from "tweetnacl";
import { SecretKey } from "../../SecretKey";

export function decryptedBufferOfEncryptedBuffer(
  encryptedBuffer: Buffer,
  secretKey: SecretKey
) {
  const nonce = encryptedBuffer.slice(0, secretbox.nonceLength);
  const message = encryptedBuffer.slice(
    secretbox.nonceLength,
    encryptedBuffer.length
  );

  const decrypted = secretbox.open(message, nonce, secretKey.buffer);
  if (!decrypted) {
    throw new Error("Could not decrypt message");
  }

  return Buffer.from(decrypted);
}
