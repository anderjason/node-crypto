"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueId = void 0;
const stringOfUuid_1 = require("./_internal/stringOfUuid");
class UniqueId {
    constructor(value) {
        this._value = value;
    }
    static ofRandomUuid() {
        return new UniqueId(stringOfUuid_1.stringOfUuid());
    }
    toString() {
        return this._value;
    }
}
exports.UniqueId = UniqueId;
//# sourceMappingURL=index.js.map