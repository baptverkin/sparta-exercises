import { Db } from "mongodb";

export async function updateManyCountries(db: Db) {
  // code your function here
  await db.collection("worldAtlas").updateMany({continent: "Europe"}, {$set: {continent: "EU"}})
  return db.collection("worldAtlas").find({continent: "EU"}).toArray()

}
