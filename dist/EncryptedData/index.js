"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptedData = void 0;
const encryptedBufferGivenDecryptedBuffer_1 = require("./_internal/encryptedBufferGivenDecryptedBuffer");
const decryptedBufferGivenEncryptedBuffer_1 = require("./_internal/decryptedBufferGivenEncryptedBuffer");
class EncryptedData {
    constructor(encryptedBuffer) {
        this._encryptedBuffer = encryptedBuffer;
    }
    static givenDecryptedStringAndKey(decryptedString, secretKey) {
        return new EncryptedData(encryptedBufferGivenDecryptedBuffer_1.encryptedBufferGivenDecryptedBuffer(Buffer.from(decryptedString), secretKey));
    }
    static givenDecryptedBufferAndKey(decryptedBuffer, secretKey) {
        return new EncryptedData(encryptedBufferGivenDecryptedBuffer_1.encryptedBufferGivenDecryptedBuffer(decryptedBuffer, secretKey));
    }
    static givenEncryptedHexString(base64) {
        return new EncryptedData(Buffer.from(base64, "hex"));
    }
    static isEqual(a, b) {
        if (a == null && b == null) {
            return true;
        }
        if (a == null || b == null) {
            return false;
        }
        return a.isEqual(b);
    }
    isEqual(other) {
        if (other == null) {
            return false;
        }
        if (!(other instanceof EncryptedData)) {
            return false;
        }
        return this._encryptedBuffer.equals(other._encryptedBuffer);
    }
    toDecryptedString(secretKey) {
        return this.toDecryptedBuffer(secretKey).toString();
    }
    toDecryptedBuffer(secretKey) {
        return decryptedBufferGivenEncryptedBuffer_1.decryptedBufferGivenEncryptedBuffer(this._encryptedBuffer, secretKey);
    }
    toEncryptedHexString() {
        return this._encryptedBuffer.toString("hex");
    }
}
exports.EncryptedData = EncryptedData;
//# sourceMappingURL=index.js.map