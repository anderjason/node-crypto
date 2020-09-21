"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptedBufferGivenEncryptedBuffer = void 0;
const tweetnacl_1 = require("tweetnacl");
function decryptedBufferGivenEncryptedBuffer(encryptedBuffer, secretKey) {
    const nonce = encryptedBuffer.slice(0, tweetnacl_1.secretbox.nonceLength);
    const message = encryptedBuffer.slice(tweetnacl_1.secretbox.nonceLength, encryptedBuffer.length);
    const decrypted = tweetnacl_1.secretbox.open(message, nonce, secretKey.buffer);
    if (!decrypted) {
        throw new Error("Could not decrypt message");
    }
    return Buffer.from(decrypted);
}
exports.decryptedBufferGivenEncryptedBuffer = decryptedBufferGivenEncryptedBuffer;
//# sourceMappingURL=decryptedBufferGivenEncryptedBuffer.js.map