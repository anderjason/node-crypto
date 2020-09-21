"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashedBufferGivenUnhashedBuffer = void 0;
const tweetnacl_1 = require("tweetnacl");
function hashedBufferGivenUnhashedBuffer(unhashedBuffer, salt) {
    if (salt == null) {
        return Buffer.from(tweetnacl_1.hash(unhashedBuffer));
    }
    else {
        return Buffer.from(tweetnacl_1.hash(Buffer.concat([unhashedBuffer, salt])));
    }
}
exports.hashedBufferGivenUnhashedBuffer = hashedBufferGivenUnhashedBuffer;
//# sourceMappingURL=hashedBufferGivenUnhashedBuffer.js.map