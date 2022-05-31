import request from "./request";

export const getAllImages = async () => {
  const response = await request.get("/images");
  return response.data;
};

export const getImageById = async (id) => {
  const response = await request.get(`/images/${id}`);
  return response.data;
};
