import { Db } from "mongodb";

export function deleteOneCountry(db: Db) {
  return db.collection("worldAtlas")
    .deleteOne({name: "France"})
    .then((re) => re.deletedCount)
    .then((re2) => re2 === 1 ? true : false)
}
