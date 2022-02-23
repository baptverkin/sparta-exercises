import { Db } from "mongodb";

type Country = {
  name: string;
  capital: string;
  continent: string;
}

export async function insertOneCountry(db: Db, country: Country ) {
  // code your function here
  return await db.collection("worldAtlas")
  .insertOne(country)
  .then((result)=> result.insertedId);
}
