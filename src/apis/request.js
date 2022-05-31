import axios from "axios";

const request = axios.create({
  baseURL: "http://ec2-3-38-252-60.ap-northeast-2.compute.amazonaws.com:8080",
});

export default request;
