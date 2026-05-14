import ApiManager from "./ApiManager.js";

const courseApi = {
  // Chỉ dùng cho redux - lấy data
  getAll: (params = {}) => ApiManager.get("/api/v1/courses", { params }),
  getById: (id) => ApiManager.get(`/api/v1/courses/${id}`),

  // CRUD trực tiếp - không qua redux
  create: (data) => ApiManager.post("/api/v1/courses", data),
  update: (id, data) => ApiManager.put(`/api/v1/courses/${id}`, data),
  delete: (id) => ApiManager.delete(`/api/v1/courses/${id}`),
};

export default courseApi;
