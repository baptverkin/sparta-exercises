import request from "@fewlines-education/request";
import "dotenv/config";

function updatePostTitle(id : number, newTitle: string): void {
  request(`http://${process.env.HOST}/posts/${id}`, {method: "PATCH", body: JSON.stringify({id: id, title: newTitle}), headers: { "Content-Type": "application/json" }},
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



function updatePostAuthor(id: number, newAuthor: string): void {
  request(`http://${process.env.HOST}/posts/${id}`, {method: "PATCH", body: JSON.stringify({id: id, author: newAuthor}), headers: { "Content-Type": "application/json" }},
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

updatePostAuthor(1, "Baptiste");

function updatePost(id: number, newTitle: string, newAuthor: string): void {
  request(`http://${process.env.HOST}/posts/${id}`, {method: "PUT", body: JSON.stringify({id: id, title: newTitle, author: newAuthor}), headers: { "Content-Type": "application/json" }},
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



export {updatePost, updatePostAuthor, updatePostTitle };
