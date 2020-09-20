"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretKey = void 0;
const bufferOfRandomSecretKey_1 = require("./_internal/bufferOfRandomSecretKey");
const tweetnacl_1 = require("tweetnacl");
class SecretKey {
    constructor(buffer) {
        this.buffer = buffer;
    }
    static ofBase64(base64) {
        const buffer = Buffer.from(base64, "base64");
        if (buffer.length !== tweetnacl_1.secretbox.keyLength) {
            throw new Error("The provided base64 secret key has an invalid length");
        }
        return new SecretKey(buffer);
    }
    static ofHex(hex) {
        const buffer = Buffer.from(hex, "hex");
        if (buffer.length !== tweetnacl_1.secretbox.keyLength) {
            throw new Error("The provided hex secret key has an invalid length");
        }
        return new SecretKey(buffer);
    }
    static ofRandomData() {
        return new SecretKey(bufferOfRandomSecretKey_1.bufferOfRandomSecretKey());
    }
    toBase64() {
        return this.buffer.toString("base64");
    }
    toHex() {
        return this.buffer.toString("hex");
    }
}
exports.SecretKey = SecretKey;
//# sourceMappingURL=index.js.map