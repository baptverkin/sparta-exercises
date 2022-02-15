import request from "@fewlines-education/request";
import "dotenv/config";

function deletePost(id: number): void {
  request(`http://${process.env.HOST}/posts/${id}`, {method: "DELETE", headers: { "Content-Type": "application/json" }},
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

export { deletePost };
