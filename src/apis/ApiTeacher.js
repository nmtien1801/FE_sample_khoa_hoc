import ApiManager from "./ApiManager.js";

const teacherApi = {
  // Chỉ dùng cho redux - lấy data
  getAll: (params = {}) => ApiManager.get("/api/v1/teachers", { params }),
  getById: (id) => ApiManager.get(`/api/v1/teachers/${id}`),

  // CRUD trực tiếp - không qua redux
  create: (data) => ApiManager.post("/api/v1/teachers", data),
  update: (id, data) => ApiManager.put(`/api/v1/teachers/${id}`, data),
  delete: (id) => ApiManager.delete(`/api/v1/teachers/${id}`),
};

export default teacherApi;
