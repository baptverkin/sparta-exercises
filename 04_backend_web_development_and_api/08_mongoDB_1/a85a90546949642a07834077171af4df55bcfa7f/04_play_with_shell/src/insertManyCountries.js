// write your MongoDB shell command here

const newCountries = [
  {
  name: "Belgique",
  capital: "Bruxelles",
  continent: "Europe",
},
{
  name: "Allemagne",
  capital: "Berlin",
  continent: "Europe",
},
{
  name: "Espagne",
  capital: "Madrid",
  continent: "Europe",
},
]

db.worldAtlas.insertMany(newCountries);
