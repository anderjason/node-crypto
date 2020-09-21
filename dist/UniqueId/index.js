"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueId = void 0;
const stringOfUuid_1 = require("./_internal/stringOfUuid");
const regex = /^([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}){1}$/;
class UniqueId {
    constructor(uuid) {
        this._uuid = uuid;
    }
    static ofRandom() {
        return new UniqueId(stringOfUuid_1.stringOfUuid());
    }
    static givenUUIDString(uuid) {
        if (uuid == null) {
            throw new Error("UUID is required");
        }
        if (!regex.test(uuid)) {
            throw new Error("Invalid UUID string");
        }
        return new UniqueId(uuid);
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
        if (!(other instanceof UniqueId)) {
            return false;
        }
        return this._uuid === other._uuid;
    }
    toUUIDString() {
        return this._uuid;
    }
}
exports.UniqueId = UniqueId;
//# sourceMappingURL=index.js.map