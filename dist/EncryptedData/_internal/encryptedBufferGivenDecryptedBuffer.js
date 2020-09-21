"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptedBufferGivenDecryptedBuffer = void 0;
const tweetnacl_1 = require("tweetnacl");
const newNonce = () => tweetnacl_1.randomBytes(tweetnacl_1.secretbox.nonceLength);
function encryptedBufferGivenDecryptedBuffer(decryptedBuffer, secretKey) {
    const nonce = newNonce();
    const box = tweetnacl_1.secretbox(decryptedBuffer, nonce, secretKey.buffer);
    const fullMessage = new Uint8Array(nonce.length + box.length);
    fullMessage.set(nonce);
    fullMessage.set(box, nonce.length);
    return Buffer.from(fullMessage);
}
exports.encryptedBufferGivenDecryptedBuffer = encryptedBufferGivenDecryptedBuffer;
//# sourceMappingURL=encryptedBufferGivenDecryptedBuffer.js.map