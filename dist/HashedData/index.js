"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashedData = void 0;
const hashedBufferOfFile_1 = require("./_internal/hashedBufferOfFile");
const hashedBufferOfUnhashedBuffer_1 = require("./_internal/hashedBufferOfUnhashedBuffer");
const bufferOfRandomSalt_1 = require("./_internal/bufferOfRandomSalt");
class HashedData {
    constructor(hash, salt) {
        this._hash = hash;
        this._salt = salt;
    }
    static ofPlainText(options) {
        let salt;
        switch (options.salt) {
            case "random":
                salt = bufferOfRandomSalt_1.bufferOfRandomSalt();
                break;
            case "none":
                salt = Buffer.from([]);
                break;
            default:
                throw new Error("Unsupported value for salt");
        }
        const hash = hashedBufferOfUnhashedBuffer_1.hashedBufferOfUnhashedBuffer(Buffer.from(options.plainText), salt);
        return new HashedData(hash, salt);
    }
    static async ofLocalFile(options) {
        let salt;
        switch (options.salt) {
            case "random":
                salt = bufferOfRandomSalt_1.bufferOfRandomSalt();
                break;
            case "none":
                salt = Buffer.from([]);
                break;
            default:
                throw new Error("Unsupported value for salt");
        }
        const hash = await hashedBufferOfFile_1.hashedBufferOfFile(options.localFile);
        return new HashedData(hash, salt);
    }
    static ofUnhashedBuffer(options) {
        let salt;
        switch (options.salt) {
            case "random":
                salt = bufferOfRandomSalt_1.bufferOfRandomSalt();
                break;
            case "none":
                salt = Buffer.from([]);
                break;
            default:
                throw new Error("Unsupported value for salt");
        }
        const hash = hashedBufferOfUnhashedBuffer_1.hashedBufferOfUnhashedBuffer(options.unhashedBuffer, salt);
        return new HashedData(hash, salt);
    }
    static ofBase64(base64) {
        if (base64.includes(".")) {
            const parts = base64.split(".");
            const hash = Buffer.from(parts[0], "base64");
            const salt = Buffer.from(parts[1], "base64");
            return new HashedData(hash, salt);
        }
        else {
            return new HashedData(Buffer.from(base64), Buffer.from([]));
        }
    }
    static ofHex(hex) {
        if (hex.includes(".")) {
            const parts = hex.split(".");
            const hash = Buffer.from(parts[0], "hex");
            const salt = Buffer.from(parts[1], "hex");
            return new HashedData(hash, salt);
        }
        else {
            return new HashedData(Buffer.from(hex), Buffer.from([]));
        }
    }
    isEqualToPlainText(plainText) {
        const testHash = hashedBufferOfUnhashedBuffer_1.hashedBufferOfUnhashedBuffer(Buffer.from(plainText), this._salt);
        return testHash.equals(this._hash);
    }
    async isEqualToFile(file) {
        const testHash = await hashedBufferOfFile_1.hashedBufferOfFile(file);
        return testHash.equals(this._hash);
    }
    isEqualToUnhashedBuffer(unhashedBuffer) {
        const testHash = hashedBufferOfUnhashedBuffer_1.hashedBufferOfUnhashedBuffer(unhashedBuffer, this._salt);
        return testHash.equals(this._hash);
    }
    isSaltPresent() {
        return this._salt.length > 0;
    }
    toBase64() {
        const hash = this._hash.toString("base64");
        if (this.isSaltPresent()) {
            const salt = this._salt.toString("base64");
            return `${hash}.${salt}`;
        }
        else {
            return hash;
        }
    }
    toHex() {
        const hash = this._hash.toString("hex");
        if (this.isSaltPresent()) {
            const salt = this._salt.toString("hex");
            return `${hash}.${salt}`;
        }
        else {
            return hash;
        }
    }
}
exports.HashedData = HashedData;
//# sourceMappingURL=index.js.map