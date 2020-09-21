"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashedBufferGivenLocalFile = void 0;
const crypto = require("crypto");
const fs = require("fs");
function hashedBufferGivenLocalFile(file) {
    return new Promise((resolve, reject) => {
        const output = crypto.createHash("sha512");
        const input = fs.createReadStream(file.toAbsolutePath());
        input.on("error", (err) => {
            reject(err);
        });
        output.once("readable", () => {
            const outputBuffer = output.read();
            resolve(outputBuffer);
        });
        input.pipe(output);
    });
}
exports.hashedBufferGivenLocalFile = hashedBufferGivenLocalFile;
//# sourceMappingURL=hashedBufferGivenLocalFile.js.map