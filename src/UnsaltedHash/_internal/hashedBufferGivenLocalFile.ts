import * as crypto from "crypto";
import * as fs from "fs";
import { LocalFile } from "@anderjason/node-filesystem";

export function hashedBufferGivenLocalFile(file: LocalFile): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const output = crypto.createHash("sha512");

    const input = fs.createReadStream(file.toAbsolutePath());

    input.on("error", (err) => {
      reject(err);
    });

    output.once("readable", () => {
      const outputBuffer = output.read() as Buffer;

      resolve(outputBuffer);
    });

    input.pipe(output);
  });
}
