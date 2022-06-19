import request from "./request";

export const getCommentsByImageId = async (imageId) => {
  const response = await request.get(`/album/find/${imageId}`);
  return response.data;
};

export const deleteCommentById = async (imageId, id) => {
  return await request.delete(`/album/delete/comment/${id}`);
};

export const createComment = async (imageId, content) => {
  return request.post(`/album/create/comment/${imageId}`, {
    content,
  });
};
