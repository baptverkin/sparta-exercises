import request from "@fewlines-education/request";

function getChuckNorrisJoke(category: string): void {
  request (`https://api.chucknorris.io/jokes/random?category=${category}`,
  (error, html) => {
    if(error){
      console.error(error);
    }else{
      const json = JSON.parse(html);
      console.log(json);
    }
  })
}

// leave line below for tests to work properly
export { getChuckNorrisJoke };
