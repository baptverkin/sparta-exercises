import { Db } from "mongodb";

export function deleteManyCountries(db: Db) {
  // code your function here
  return db.collection("worldAtlas")
    .deleteMany({continent: "Europe"})
    .then((re) => re.deletedCount)
    .then((re2) => re2 > 0 ? true : false)
}
