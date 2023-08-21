import axios from "axios";

export function getPosts() {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts", {
      params: { _sort: "title" },
    })
    .then((res) => res.data);
}

export function getPost() {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.data);
}
