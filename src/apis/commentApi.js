import axios from "axios";

const BASE_URL =
  "http://ec2-3-38-252-60.ap-northeast-2.compute.amazonaws.com:8080";

export const getCommentsByImageId = async (imageId) => {
  const response = await axios.get(`${BASE_URL}/images/${imageId}/comments`);
  return response.data;
};

export const deleteCommentById = async (imageId, id) => {
  return await axios.delete(`${BASE_URL}/images/${imageId}/comments/${id}`);
};

export const createComment = async (imageId, body) => {
  return axios.post(`${BASE_URL}/images/${imageId}/comments`, {
    author: "익명",
    body,
  });
};
