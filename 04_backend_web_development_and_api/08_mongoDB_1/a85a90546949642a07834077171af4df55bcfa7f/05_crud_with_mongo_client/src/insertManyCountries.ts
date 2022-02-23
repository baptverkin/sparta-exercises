import { Db } from "mongodb";

type Country = {
  name: string;
  capital: string;
  continent: string;
}

export function insertManyCountries(db: Db, countries: Country[]) {
  // code your function here
  return db.collection("worldAtlas")
  .insertMany(countries)
  .then((result=> result.insertedCount))
}
