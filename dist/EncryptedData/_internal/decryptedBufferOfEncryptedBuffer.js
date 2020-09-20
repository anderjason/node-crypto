"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptedBufferOfEncryptedBuffer = void 0;
const tweetnacl_1 = require("tweetnacl");
function decryptedBufferOfEncryptedBuffer(encryptedBuffer, secretKey) {
    const nonce = encryptedBuffer.slice(0, tweetnacl_1.secretbox.nonceLength);
    const message = encryptedBuffer.slice(tweetnacl_1.secretbox.nonceLength, encryptedBuffer.length);
    const decrypted = tweetnacl_1.secretbox.open(message, nonce, secretKey.buffer);
    if (!decrypted) {
        throw new Error("Could not decrypt message");
    }
    return Buffer.from(decrypted);
}
exports.decryptedBufferOfEncryptedBuffer = decryptedBufferOfEncryptedBuffer;
//# sourceMappingURL=decryptedBufferOfEncryptedBuffer.js.map