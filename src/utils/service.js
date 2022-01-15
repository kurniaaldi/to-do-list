import axios from "axios";

let instance = axios.create();

export const getData = () => {
  return instance
    .get(`https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response));
};
