import axios from "axios";
export const getData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
};
export const sendData = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};