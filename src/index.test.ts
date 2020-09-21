import { Test } from "@anderjason/tests";
import "./EncryptedData/index.test";
import "./SaltedHash/index.test";
import "./SecretKey/index.test";
import "./UniqueId/index.test";
import "./UnsaltedHash/index.test";

Test.runAll()
  .then(() => {
    console.log("Tests complete");
  })
  .catch((err) => {
    console.error(err);
    console.error("Tests failed");
  });
