import fetch from "node-fetch";

function getCategories(): Promise<string[]> {
  return fetch("https://api.chucknorris.io/jokes/categories")
    .then((response) => response.json())
    .then((result) => result);
  // .catch((error) => {
  //   console.error(error);
  // });
}

function getJoke(category: string) {
  return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((response) => response.json())
    .then((result) => result.value);
}

// Leave the line below for tests to work properly
export { getCategories, getJoke };
