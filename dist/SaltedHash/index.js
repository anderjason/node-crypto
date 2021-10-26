"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaltedHash = void 0;
const hashedBufferGivenUnhashedBuffer_1 = require("./_internal/hashedBufferGivenUnhashedBuffer");
const bufferOfRandomSalt_1 = require("./_internal/bufferOfRandomSalt");
class SaltedHash {
    constructor(hash, salt) {
        this._hash = hash;
        this._salt = salt;
    }
    static givenUnhashedString(unhashedString) {
        const salt = (0, bufferOfRandomSalt_1.bufferOfRandomSalt)();
        const hashedBuffer = (0, hashedBufferGivenUnhashedBuffer_1.hashedBufferGivenUnhashedBuffer)(Buffer.from(unhashedString), salt);
        return new SaltedHash(hashedBuffer, salt);
    }
    static givenUnhashedBuffer(unhashedBuffer) {
        const salt = (0, bufferOfRandomSalt_1.bufferOfRandomSalt)();
        const hashedBuffer = (0, hashedBufferGivenUnhashedBuffer_1.hashedBufferGivenUnhashedBuffer)(unhashedBuffer, salt);
        return new SaltedHash(hashedBuffer, salt);
    }
    static givenHashedString(hashedString) {
        if (!hashedString.includes(".")) {
            throw new Error("Invalid hashed string");
        }
        const parts = hashedString.split(".");
        const hash = Buffer.from(parts[0], "hex");
        const salt = Buffer.from(parts[1], "hex");
        return new SaltedHash(hash, salt);
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
        if (!(other instanceof SaltedHash)) {
            return false;
        }
        return this._hash.equals(other._hash) && this._salt.equals(other._salt);
    }
    matchesUnhashedString(unhashedString) {
        const testHash = (0, hashedBufferGivenUnhashedBuffer_1.hashedBufferGivenUnhashedBuffer)(Buffer.from(unhashedString), this._salt);
        return testHash.equals(this._hash);
    }
    matchesUnhashedBuffer(unhashedBuffer) {
        const testHash = (0, hashedBufferGivenUnhashedBuffer_1.hashedBufferGivenUnhashedBuffer)(unhashedBuffer, this._salt);
        return testHash.equals(this._hash);
    }
    toHashedString() {
        const hash = this._hash.toString("hex");
        const salt = this._salt.toString("hex");
        return `${hash}.${salt}`;
    }
}
exports.SaltedHash = SaltedHash;
//# sourceMappingURL=index.js.map