import request from "@fewlines-education/request";
import "dotenv/config";

function createPost(title: string, author: string): void {
  // const body = ;
  request(`http://${process.env.HOST}/posts`, {method: "POST", body: JSON.stringify({title: title, author: author}), headers: { "Content-Type": "application/json" }},
  (error, body, response) => {
    if (error){
      console.error(error);
    }else{
      const json = JSON.parse(body);
      console.log (response.status, json)
      return json;
    }
  })
}

createPost("My second article", "Baptiste");

export { createPost };
