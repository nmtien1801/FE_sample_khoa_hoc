import ApiManager from "./ApiManager.js";

const courseApi = {
  // Chỉ dùng cho redux - lấy data
  getAll: (params = {}) => ApiManager.get("/courses", { params }),
  getByUserId: (userId) => ApiManager.get(`/courseByUser/${userId}`),
  getById: (id) => ApiManager.get(`/courses/${id}`),

  // CRUD trực tiếp - không qua redux
  create: (data) => ApiManager.post("/courses", data),
  update: (id, data) => ApiManager.put(`/courses/${id}`, data),
  delete: (id) => ApiManager.delete(`/courses/${id}`),

  // admin
  getAllAdmin: (params = {}) => ApiManager.get("/admin/courses", { params }),
};

export default courseApi;
