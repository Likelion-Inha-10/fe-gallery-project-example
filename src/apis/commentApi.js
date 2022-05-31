import request from "./request";

export const getCommentsByImageId = async (imageId) => {
  const response = await request.get(`/images/${imageId}/comments`);
  return response.data;
};

export const deleteCommentById = async (imageId, id) => {
  return await request.delete(`/images/${imageId}/comments/${id}`);
};

export const createComment = async (imageId, body) => {
  return request.post(`/images/${imageId}/comments`, {
    author: "익명",
    body,
  });
};
