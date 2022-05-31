import axios from "axios";

const BASE_URL =
  "http://ec2-3-38-252-60.ap-northeast-2.compute.amazonaws.com:8080";

export const getAllImages = async () => {
  const response = await axios.get(`${BASE_URL}/images`);
  return response.data;
};

export const getImageById = async (id) => {
  const response = await axios.get(`${BASE_URL}/images/${id}`);
  return response.data;
};
