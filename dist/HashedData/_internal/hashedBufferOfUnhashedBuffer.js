"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashedBufferOfUnhashedBuffer = void 0;
const tweetnacl_1 = require("tweetnacl");
function hashedBufferOfUnhashedBuffer(unhashedBuffer, salt) {
    return Buffer.from(tweetnacl_1.hash(Buffer.concat([unhashedBuffer, salt])));
}
exports.hashedBufferOfUnhashedBuffer = hashedBufferOfUnhashedBuffer;
//# sourceMappingURL=hashedBufferOfUnhashedBuffer.js.map