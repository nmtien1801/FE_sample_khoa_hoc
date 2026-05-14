import ApiManager from "./ApiManager.js";

const ApiLesson = {
  // Chỉ dùng cho redux - getAll
  getAll: async (params = {}) => {
    const response = await ApiManager.get("/api/v1/lessons", { params });
    return response.data;
  },

  // Chỉ dùng cho redux - getById
  getById: async (id) => {
    const response = await ApiManager.get(`/api/v1/lessons/${id}`);
    return response.data;
  },

  // Gọi trực tiếp - create
  create: async (data) => {
    const response = await ApiManager.post("/api/v1/lessons", data);
    return response.data;
  },

  // Gọi trực tiếp - update
  update: async (id, data) => {
    const response = await ApiManager.put(`/api/v1/lessons/${id}`, data);
    return response.data;
  },

  // Gọi trực tiếp - delete
  delete: async (id) => {
    const response = await ApiManager.delete(`/api/v1/lessons/${id}`);
    return response.data;
  },
};

export default ApiLesson;
