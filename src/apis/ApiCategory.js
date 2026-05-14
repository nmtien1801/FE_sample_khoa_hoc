import ApiManager from "./ApiManager.js";

const categoryApi = {
  // Chỉ dùng cho redux - lấy data
  getAll: (params = {}) => ApiManager.get("/api/v1/categories", { params }),
  getById: (id) => ApiManager.get(`/api/v1/categories/${id}`),

  // CRUD trực tiếp - không qua redux
  create: (data) => ApiManager.post("/api/v1/categories", data),
  update: (id, data) => ApiManager.put(`/api/v1/categories/${id}`, data),
  delete: (id) => ApiManager.delete(`/api/v1/categories/${id}`),
};

export default categoryApi;
