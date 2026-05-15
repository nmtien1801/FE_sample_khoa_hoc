import React, { useState, useEffect, useMemo } from 'react';
import { Plus, Edit2, Trash2, Eye, Search, RefreshCw } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getListCourse } from '../../redux/courseSlice';
import courseApi from '../../apis/ApiCourse';
import CourseModal from './CourseModal';

const CourseAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { CourseList, loading } = useSelector((state) => state.course);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    dispatch(getListCourse());
  }, [dispatch]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const filteredCourses = useMemo(() => {
    return CourseList.filter(course =>
      course.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [CourseList, searchTerm]);

  const openModal = (course = null) => {
    setCurrentCourse(course || null);
    setIsModalOpen(true);
  };

  const handleSave = async (formData) => {
    setSaving(true);
    try {
      if (currentCourse) {
        await courseApi.update(currentCourse.id, formData);
        showToast('Cập nhật khóa học thành công!');
      } else {
        await courseApi.create(formData);
        showToast('Thêm khóa học thành công!');
      }
      setIsModalOpen(false);
      dispatch(getListCourse()); // Reload danh sách
    } catch (error) {
      showToast(error?.response?.data?.message || 'Có lỗi xảy ra, vui lòng thử lại.', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa khóa học này? Hành động này không thể hoàn tác.')) return;
    setDeletingId(id);
    try {
      await courseApi.delete(id);
      showToast('Đã xóa khóa học thành công!');
      dispatch(getListCourse());
    } catch (error) {
      showToast(error?.response?.data?.message || 'Xóa thất bại, vui lòng thử lại.', 'error');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-6 right-6 z-[200] px-6 py-4 rounded-2xl shadow-xl font-bold text-sm transition-all animate-in slide-in-from-top-2 ${
          toast.type === 'error' ? 'bg-red-500 text-white' : 'bg-[#00bc86] text-white'
        }`}>
          {toast.message}
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Quản lý Khóa học</h1>
            <p className="text-sm text-slate-500 font-medium">Hệ thống quản trị nội dung đào tạo</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => dispatch(getListCourse())}
              className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-5 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all"
            >
              <RefreshCw size={18} /> Tải lại
            </button>
            <button
              onClick={() => openModal()}
              className="flex items-center gap-2 bg-[#00bc86] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#00a374] hover:shadow-lg hover:shadow-green-200 transition-all active:scale-95"
            >
              <Plus size={20} /> Thêm khóa học mới
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white p-5 rounded-[28px] shadow-sm border border-slate-100 mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên khóa học..."
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-[#00bc86] transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50/50 border-b border-slate-100">
                <tr>
                  <th className="p-5 text-xs font-black uppercase tracking-wider text-slate-400">Khóa học</th>
                  <th className="p-5 text-xs font-black uppercase tracking-wider text-slate-400">Cấp độ</th>
                  <th className="p-5 text-xs font-black uppercase tracking-wider text-slate-400">Giá bán</th>
                  <th className="p-5 text-xs font-black uppercase tracking-wider text-slate-400">Trạng thái</th>
                  <th className="p-5 text-xs font-black uppercase tracking-wider text-slate-400 text-center">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {loading ? (
                  <tr>
                    <td colSpan="5" className="p-10 text-center text-slate-400 font-bold">
                      <div className="flex items-center justify-center gap-3">
                        <RefreshCw size={18} className="animate-spin" />
                        Đang tải dữ liệu...
                      </div>
                    </td>
                  </tr>
                ) : filteredCourses.map((course) => (
                  <tr key={course.id} className="hover:bg-slate-50/80 transition-all group">
                    <td className="p-5">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-12 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shadow-sm flex-shrink-0">
                          <img
                            src={course.image || 'https://via.placeholder.com/150'}
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-[15px] line-clamp-1">{course.title}</p>
                          <p className="text-[11px] text-slate-400 font-black uppercase tracking-tighter">ID: #{course.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-5">
                      <span className="text-xs font-bold text-slate-500 capitalize">{course.level || '—'}</span>
                    </td>
                    <td className="p-5 font-black text-[#00bc86] text-sm">
                      {Number(course.price).toLocaleString('vi-VN')}đ
                    </td>
                    <td className="p-5">
                      <span className={`px-3 py-1 text-[10px] font-black uppercase rounded-full ${
                        course.status === 'published' ? 'bg-green-50 text-[#00bc86]' : 'bg-amber-50 text-amber-500'
                      }`}>
                        {course.status === 'published' ? 'Công khai' : 'Bản nháp'}
                      </span>
                    </td>
                    <td className="p-5">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => openModal(course)}
                          className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm shadow-blue-100"
                          title="Sửa"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(course.id)}
                          disabled={deletingId === course.id}
                          className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm shadow-red-100 disabled:opacity-50"
                          title="Xóa"
                        >
                          {deletingId === course.id ? <RefreshCw size={16} className="animate-spin" /> : <Trash2 size={16} />}
                        </button>
                        <button
                          onClick={() => navigate(`/admin/lessons?courseId=${course.id}`)}
                          className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                          title="Quản lý bài học"
                        >
                          <Eye size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredCourses.length === 0 && !loading && (
            <div className="p-20 text-center">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Không tìm thấy kết quả</p>
            </div>
          )}
        </div>
      </div>

      <CourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        initialData={currentCourse}
        saving={saving}
      />
    </div>
  );
};

export default CourseAdmin;