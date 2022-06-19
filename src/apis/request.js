import axios from "axios";

const request = axios.create({
  baseURL: "https://gallery.devhudi.xyz",
});

export default request;
