import request from "@fewlines-education/request";

function getCategories() {
  request ("https://api.chucknorris.io/jokes/categories",
  (error, HTML) => {
    if (error){
      console.error (error)
    }else{
      const json = JSON.parse(HTML);
      console.log(json);
    }
  },
  )}

// leave line below for tests to work properly
export { getCategories };
