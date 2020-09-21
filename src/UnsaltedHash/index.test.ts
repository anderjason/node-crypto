import { Test } from "@anderjason/tests";
import { UnsaltedHash } from ".";

Test.define(
  "UnsaltedHash returns the same hash when repeating with the same value",
  () => {
    const input = "Hello world";

    const a = UnsaltedHash.givenUnhashedString(input);
    const b = UnsaltedHash.givenUnhashedString(input);

    Test.assert(a.isEqual(b));
  }
);

Test.define("UnsaltedHash can compare itself to an unhashed string", () => {
  const input = "Hello world";

  const saltedHash = UnsaltedHash.givenUnhashedString(input);

  Test.assert(saltedHash.matchesUnhashedString(input));
  Test.assert(!saltedHash.matchesUnhashedString("Something else"));
});
