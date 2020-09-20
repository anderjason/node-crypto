import { randomBytes } from "tweetnacl";

/*
Based on code from https://github.com/kelektiv/node-uuid

The MIT License (MIT)

Copyright (c) 2010-2016 Robert Kieffer and other contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

let byteToHex: any = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf: Buffer) {
  let i = 0;

  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return [
    byteToHex[buf[i++]],
    byteToHex[buf[i++]],
    byteToHex[buf[i++]],
    byteToHex[buf[i++]],
    "-",
    byteToHex[buf[i++]],
    byteToHex[buf[i++]],
    "-",
    byteToHex[buf[i++]],
    byteToHex[buf[i++]],
    "-",
    byteToHex[buf[i++]],
    byteToHex[buf[i++]],
    "-",
    byteToHex[buf[i++]],
    byteToHex[buf[i++]],
    byteToHex[buf[i++]],
    byteToHex[buf[i++]],
    byteToHex[buf[i++]],
    byteToHex[buf[i++]],
  ].join("");
}

export function stringOfUuid() {
  let rnds = Buffer.from(randomBytes(16));

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  return bytesToUuid(rnds);
}
