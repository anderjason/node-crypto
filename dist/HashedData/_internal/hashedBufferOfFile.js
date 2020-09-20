"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashedBufferOfFile = void 0;
const crypto = require("crypto");
const fs = require("fs");
function hashedBufferOfFile(file) {
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
exports.hashedBufferOfFile = hashedBufferOfFile;
//# sourceMappingURL=hashedBufferOfFile.js.map