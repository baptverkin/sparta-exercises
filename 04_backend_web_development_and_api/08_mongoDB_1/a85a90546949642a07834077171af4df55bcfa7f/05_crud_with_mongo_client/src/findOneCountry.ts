import { Db } from "mongodb";
import { dropCollection } from "../tests/test-utils";

export function findOneCountry(db: Db) {
  // code your function here
  return db.collection("worldAtlas")
  .findOne({name: "Iceland"})
  // .then((result)=> console.log(result))
  // .then(()=> client.close());
}
