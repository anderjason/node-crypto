"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferOfRandomSalt = void 0;
const tweetnacl_1 = require("tweetnacl");
function bufferOfRandomSalt() {
    return Buffer.from((0, tweetnacl_1.randomBytes)(64));
}
exports.bufferOfRandomSalt = bufferOfRandomSalt;
//# sourceMappingURL=bufferOfRandomSalt.js.map