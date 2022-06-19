import request from "./request";

export const getAllImages = async () => {
  const response = await request.get("/album/articles");
  return response.data;
};

export const getImageById = async (id) => {
  const response = await request.get(`/album/${id}`);
  return response.data;
};
