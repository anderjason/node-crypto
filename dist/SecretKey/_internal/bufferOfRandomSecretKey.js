"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferOfRandomSecretKey = void 0;
const tweetnacl_1 = require("tweetnacl");
function bufferOfRandomSecretKey() {
    return Buffer.from((0, tweetnacl_1.randomBytes)(tweetnacl_1.secretbox.keyLength));
}
exports.bufferOfRandomSecretKey = bufferOfRandomSecretKey;
//# sourceMappingURL=bufferOfRandomSecretKey.js.map