"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptedData = void 0;
const encryptedBufferOfDecryptedBuffer_1 = require("./_internal/encryptedBufferOfDecryptedBuffer");
const decryptedBufferOfEncryptedBuffer_1 = require("./_internal/decryptedBufferOfEncryptedBuffer");
class EncryptedData {
    constructor(encryptedBuffer) {
        this._encryptedBuffer = encryptedBuffer;
    }
    static ofPlainText(plainText, secretKey) {
        return new EncryptedData(encryptedBufferOfDecryptedBuffer_1.encryptedBufferOfDecryptedBuffer(Buffer.from(plainText), secretKey));
    }
    static ofDecryptedBuffer(decryptedBuffer, secretKey) {
        return new EncryptedData(encryptedBufferOfDecryptedBuffer_1.encryptedBufferOfDecryptedBuffer(decryptedBuffer, secretKey));
    }
    static ofEncryptedBase64(base64) {
        return new EncryptedData(Buffer.from(base64, "base64"));
    }
    toPlainText(secretKey) {
        return this.toDecryptedBuffer(secretKey).toString();
    }
    toDecryptedBuffer(secretKey) {
        return decryptedBufferOfEncryptedBuffer_1.decryptedBufferOfEncryptedBuffer(this._encryptedBuffer, secretKey);
    }
    toEncryptedBase64() {
        return this._encryptedBuffer.toString("base64");
    }
}
exports.EncryptedData = EncryptedData;
//# sourceMappingURL=index.js.map