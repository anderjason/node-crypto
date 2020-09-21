import { Test } from "@anderjason/tests";
import { UniqueId } from ".";

const regex = /^([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}){1}$/;

Test.define("UniqueId returns a v4 UUID string", () => {
  const uniqueId = UniqueId.ofRandom();

  Test.assert(regex.test(uniqueId.toUUIDString()));
});

Test.define("UniqueId creates a random ID each time", () => {
  const a = UniqueId.ofRandom();
  const b = UniqueId.ofRandom();

  Test.assert(!a.isEqual(b));
});

Test.define("UniqueId can be created from a UUID string", () => {
  const a = UniqueId.givenUUIDString("3ea30bcb-2d62-4099-9c34-13a3d3df1ff7");
  const b = UniqueId.givenUUIDString("3ea30bcb-2d62-4099-9c34-13a3d3df1ff7");

  Test.assert(a.isEqual(b));
});
