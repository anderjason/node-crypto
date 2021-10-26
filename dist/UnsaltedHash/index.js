"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsaltedHash = void 0;
const hashedBufferGivenLocalFile_1 = require("./_internal/hashedBufferGivenLocalFile");
const hashedBufferGivenUnhashedBuffer_1 = require("../SaltedHash/_internal/hashedBufferGivenUnhashedBuffer");
class UnsaltedHash {
    constructor(hash) {
        this._hash = hash;
    }
    static givenUnhashedString(unhashedString) {
        const hashedBuffer = (0, hashedBufferGivenUnhashedBuffer_1.hashedBufferGivenUnhashedBuffer)(Buffer.from(unhashedString));
        return new UnsaltedHash(hashedBuffer);
    }
    static async givenLocalFile(localFile) {
        const hashedBuffer = await (0, hashedBufferGivenLocalFile_1.hashedBufferGivenLocalFile)(localFile);
        return new UnsaltedHash(hashedBuffer);
    }
    static givenUnhashedBuffer(unhashedBuffer) {
        const hashedBuffer = (0, hashedBufferGivenUnhashedBuffer_1.hashedBufferGivenUnhashedBuffer)(unhashedBuffer);
        return new UnsaltedHash(hashedBuffer);
    }
    static givenHashedString(hashedString) {
        if (hashedString.includes(".")) {
            throw new Error("Not a valid hashed string for InsecureComparisonHash");
        }
        return new UnsaltedHash(Buffer.from(hashedString, "hex"));
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
        if (!(other instanceof UnsaltedHash)) {
            return false;
        }
        return this._hash.equals(other._hash);
    }
    matchesUnhashedString(unhashedString) {
        const testHash = (0, hashedBufferGivenUnhashedBuffer_1.hashedBufferGivenUnhashedBuffer)(Buffer.from(unhashedString));
        return testHash.equals(this._hash);
    }
    matchesUnhashedBuffer(unhashedBuffer) {
        const testHash = (0, hashedBufferGivenUnhashedBuffer_1.hashedBufferGivenUnhashedBuffer)(unhashedBuffer);
        return testHash.equals(this._hash);
    }
    async matchesLocalFile(localFile) {
        const testHash = await (0, hashedBufferGivenLocalFile_1.hashedBufferGivenLocalFile)(localFile);
        return testHash.equals(this._hash);
    }
    toHashedString() {
        return this._hash.toString("hex");
    }
}
exports.UnsaltedHash = UnsaltedHash;
//# sourceMappingURL=index.js.map