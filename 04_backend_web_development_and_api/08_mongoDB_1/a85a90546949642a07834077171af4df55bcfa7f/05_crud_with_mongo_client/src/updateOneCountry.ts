import { Db } from "mongodb";

export async function updateOneCountry(db: Db) {
  // code your function here
  await db.collection("worldAtlas")
  .updateOne({name: "Australia"}, {$set: {capital: "Canberra"}})
  return db.collection("worldAtlas").findOne({name: "Australia"})
  // .then ((re)=> console.log(re))
}
