"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretKey = void 0;
const bufferOfRandomSecretKey_1 = require("./_internal/bufferOfRandomSecretKey");
const tweetnacl_1 = require("tweetnacl");
class SecretKey {
    constructor(buffer) {
        this.buffer = buffer;
    }
    static givenHexString(hex) {
        const buffer = Buffer.from(hex, "hex");
        if (buffer.length !== tweetnacl_1.secretbox.keyLength) {
            throw new Error("The provided hex secret key has an invalid length");
        }
        return new SecretKey(buffer);
    }
    static ofRandomData() {
        return new SecretKey(bufferOfRandomSecretKey_1.bufferOfRandomSecretKey());
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
        if (!(other instanceof SecretKey)) {
            return false;
        }
        return this.buffer.equals(other.buffer);
    }
    toHexString() {
        return this.buffer.toString("hex");
    }
}
exports.SecretKey = SecretKey;
//# sourceMappingURL=index.js.map