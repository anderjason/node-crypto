import { Test } from "@anderjason/tests";
import { SaltedHash } from ".";

Test.define(
  "SaltedHash returns a different hash when repeating with the same value",
  () => {
    const input = "Hello world";

    const a = SaltedHash.givenUnhashedString(input);
    const b = SaltedHash.givenUnhashedString(input);

    Test.assert(!a.isEqual(b));
  }
);

Test.define("SaltedHash can compare itself to an unhashed string", () => {
  const input = "Hello world";

  const saltedHash = SaltedHash.givenUnhashedString(input);

  Test.assert(saltedHash.matchesUnhashedString(input));
  Test.assert(!saltedHash.matchesUnhashedString("Something else"));
});
