import ApiManager from "./ApiManager.js";

const ApiLesson = {
  // Chỉ dùng cho redux - getAll
  getAll: async (params = {}) => {
    const response = await ApiManager.get("/lessons", { params });
    return response.data;
  },

  // Chỉ dùng cho redux - getById
  getById: async (id) => {
    const response = await ApiManager.get(`/lessons/${id}`);
    return response.data;
  },

  // Gọi trực tiếp - create
  create: async (data) => {
    const response = await ApiManager.post("/lessons", data);
    return response.data;
  },

  // Gọi trực tiếp - update
  update: async (id, data) => {
    const response = await ApiManager.put(`/lessons/${id}`, data);
    return response.data;
  },

  // Gọi trực tiếp - delete
  delete: async (id) => {
    const response = await ApiManager.delete(`/lessons/${id}`);
    return response.data;
  },
};

export default ApiLesson;
