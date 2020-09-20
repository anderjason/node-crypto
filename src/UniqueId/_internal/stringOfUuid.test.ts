import { stringOfUuid } from "./stringOfUuid";
import { Test } from "@anderjason/tests";

Test.define("generateUuid", () => {
  const actual = stringOfUuid();

  const isMatch = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/.test(
    actual
  );

  Test.assert(isMatch);
});
