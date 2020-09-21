import { Test } from "@anderjason/tests";
import { SecretKey } from "../SecretKey";

Test.define("SecretKey can create a random key", () => {
  const a = SecretKey.ofRandomData();
  const b = SecretKey.ofRandomData();

  Test.assert(!a.isEqual(b));
});

Test.define("SecretKey can convert to a hex string and back", () => {
  const original = SecretKey.ofRandomData();
  const hex = original.toHexString();

  const copy = SecretKey.givenHexString(hex);
  Test.assert(original.isEqual(copy));
});
