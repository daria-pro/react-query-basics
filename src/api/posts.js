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

export function createPost({ title, body }) {
  return axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
      userId: 1,
      id: Date.now(),
    })
    .then((res) => res.data);
}
