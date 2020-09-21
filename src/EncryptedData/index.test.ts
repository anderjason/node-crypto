import { Test } from "@anderjason/tests";
import { EncryptedData } from ".";
import { SecretKey } from "../SecretKey";

Test.define("EncryptedData can encrypt and decrypt given a valid key", () => {
  const key = SecretKey.ofRandomData();

  const secret = "Hello world";
  const encrypted = EncryptedData.givenDecryptedStringAndKey(secret, key);

  const decrypted = encrypted.toDecryptedString(key);
  Test.assert(decrypted === secret);
});

Test.define("EncryptedData can decrypt a test secret", () => {
  const key = SecretKey.givenHexString(
    "fbdb6a04b3163e926745f476bc090870d015b0a652b13a41ec8a64fc163589a7"
  );

  const encrypted = EncryptedData.givenEncryptedHexString(
    "5ce59878a312fc888c492f0beefff908314df76f04fb3d18a9b46630db3f5fb1d465330ffba0677e92208a8344d9a3e2e19fcf"
  );

  const decrypted = encrypted.toDecryptedString(key);
  Test.assert(decrypted === "Hello world");
});
