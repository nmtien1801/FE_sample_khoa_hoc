import React, { useState, useEffect, useMemo } from 'react';
import { Plus, GripVertical, PlayCircle, Edit, Trash, RefreshCw } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getListCourse } from '../../redux/courseSlice';
import ApiLesson from '../../apis/ApiLesson';
import LessonModal from './LessonModal';

const LessonAdmin = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const { CourseList, loading: courseLoading } = useSelector((state) => state.course);

  // Lấy courseId từ URL query nếu có (vd: /admin/lessons?courseId=5)
  const [selectedCourseId, setSelectedCourseId] = useState(searchParams.get('courseId') || '');
  const [lessons, setLessons] = useState([]);
  const [loadingLessons, setLoadingLessons] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLesson, setEditingLesson] = useState(null);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [toast, setToast] = useState(null);

  // Load danh sách khóa học
  useEffect(() => {
    if (CourseList.length === 0) dispatch(getListCourse());
  }, [dispatch]);

  // Load bài học khi chọn khóa học
  useEffect(() => {
    if (!selectedCourseId) {
      setLessons([]);
      return;
    }
    fetchLessons();
  }, [selectedCourseId]);

  const fetchLessons = async () => {
    setLoadingLessons(true);
    try {
      const data = await ApiLesson.getAll({ courseId: selectedCourseId });
      // API trả về array hoặc { data: [...] } tuỳ BE
      const list = Array.isArray(data) ? data : data?.rows || [];
      setLessons([...list].sort((a, b) => a.order - b.order));
    } catch (err) {
      showToast('Không thể tải danh sách bài học.', 'error');
    } finally {
      setLoadingLessons(false);
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const selectedCourse = useMemo(
    () => CourseList.find(c => c.id === Number(selectedCourseId)),
    [CourseList, selectedCourseId]
  );

  const handleOpenAddModal = () => {
    setEditingLesson(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (lesson) => {
    setEditingLesson(lesson);
    setIsModalOpen(true);
  };

  const handleSaveLesson = async (formData) => {
    setSaving(true);
    try {
      if (editingLesson) {
        await ApiLesson.update(editingLesson.id, formData);
        showToast('Cập nhật bài học thành công!');
      } else {
        await ApiLesson.create({ ...formData, courseId: Number(selectedCourseId) });
        showToast('Thêm bài học thành công!');
      }
      setIsModalOpen(false);
      await fetchLessons(); // Reload
    } catch (err) {
      showToast(err?.response?.data?.message || 'Có lỗi xảy ra, vui lòng thử lại.', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteLesson = async (id) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa bài học này?')) return;
    setDeletingId(id);
    try {
      await ApiLesson.delete(id);
      showToast('Đã xóa bài học thành công!');
      setLessons(prev => prev.filter(l => l.id !== id));
    } catch (err) {
      showToast(err?.response?.data?.message || 'Xóa thất bại, vui lòng thử lại.', 'error');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-6 right-6 z-[200] px-6 py-4 rounded-2xl shadow-xl font-bold text-sm animate-in slide-in-from-top-2 ${
          toast.type === 'error' ? 'bg-red-500 text-white' : 'bg-[#00bc86] text-white'
        }`}>
          {toast.message}
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Nội dung bài học</h1>
            <div className="mt-3 flex items-center gap-3 flex-wrap">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Khóa học:</span>
              <select
                className="bg-white border-none shadow-sm rounded-xl px-4 py-2 text-sm font-bold text-[#00bc86] focus:ring-2 focus:ring-[#00bc86] cursor-pointer"
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(e.target.value)}
              >
                <option value="">-- Chọn khóa học --</option>
                {CourseList.map((course) => (
                  <option key={course.id} value={course.id}>{course.title}</option>
                ))}
              </select>
              {selectedCourseId && (
                <button
                  onClick={fetchLessons}
                  className="p-2 text-slate-400 hover:text-[#00bc86] transition-colors"
                  title="Tải lại"
                >
                  <RefreshCw size={16} className={loadingLessons ? 'animate-spin' : ''} />
                </button>
              )}
            </div>
            {selectedCourse && (
              <div className="mt-2 flex items-center gap-3">
                <span className="text-[11px] font-bold text-slate-400">{lessons.length} bài học</span>
                <span className={`px-2 py-0.5 text-[10px] font-black uppercase rounded-full ${
                  selectedCourse.status === 'published' ? 'bg-green-50 text-[#00bc86]' : 'bg-amber-50 text-amber-500'
                }`}>{selectedCourse.status}</span>
              </div>
            )}
          </div>

          <button
            onClick={handleOpenAddModal}
            disabled={!selectedCourseId}
            className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all self-start shadow-md ${
              selectedCourseId
                ? 'bg-[#00bc86] text-white hover:bg-[#00a374] hover:shadow-green-100 active:scale-95'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
            }`}
          >
            <Plus size={18} /> Thêm bài học mới
          </button>
        </div>

        {/* Lesson List */}
        <div className="space-y-3">
          {loadingLessons ? (
            <div className="py-24 text-center bg-white rounded-[40px] border border-slate-100">
              <RefreshCw size={32} className="animate-spin text-slate-300 mx-auto mb-3" />
              <p className="text-slate-400 font-bold text-xs uppercase">Đang tải bài học...</p>
            </div>
          ) : lessons.length > 0 ? (
            lessons.map((lesson, index) => (
              <div
                key={lesson.id}
                className="group flex items-center gap-4 bg-white p-5 rounded-[24px] border border-slate-100 shadow-sm hover:border-[#00bc86] hover:shadow-md transition-all"
              >
                <div className="text-slate-300 cursor-move group-hover:text-[#00bc86] transition-colors">
                  <GripVertical size={20} />
                </div>

                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-[#00bc86] flex-shrink-0">
                  <PlayCircle size={24} />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-[15px] font-bold text-slate-800 truncate">
                    Bài {lesson.order || index + 1}: {lesson.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-1 flex-wrap">
                    <p className="text-[11px] text-slate-400 font-bold uppercase">
                      Thời lượng: {lesson.duration || 'N/A'}
                    </p>
                    <span className="w-1 h-1 bg-slate-200 rounded-full" />
                    <p className="text-[11px] text-slate-400 font-bold uppercase">ID: #{lesson.id}</p>
                    {lesson.videoUrl && (
                      <>
                        <span className="w-1 h-1 bg-slate-200 rounded-full" />
                        <a
                          href={lesson.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-[#00bc86] font-bold uppercase hover:underline"
                        >
                          Xem video
                        </a>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                  <button
                    onClick={() => handleOpenEditModal(lesson)}
                    className="p-3 bg-blue-50 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all shadow-sm"
                    title="Sửa"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDeleteLesson(lesson.id)}
                    disabled={deletingId === lesson.id}
                    className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm disabled:opacity-50"
                    title="Xóa"
                  >
                    {deletingId === lesson.id
                      ? <RefreshCw size={16} className="animate-spin" />
                      : <Trash size={16} />
                    }
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-24 text-center bg-white rounded-[40px] border-2 border-dashed border-slate-100">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <PlayCircle size={32} className="text-slate-200" />
              </div>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                {selectedCourseId
                  ? 'Khóa học này chưa có bài giảng nào'
                  : 'Vui lòng chọn một khóa học để quản lý bài giảng'}
              </p>
              {selectedCourseId && (
                <button
                  onClick={handleOpenAddModal}
                  className="mt-6 px-6 py-3 bg-[#00bc86] text-white rounded-2xl font-bold text-sm hover:bg-[#00a374] transition-all"
                >
                  Thêm bài học đầu tiên
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <LessonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveLesson}
        initialData={editingLesson}
        courseId={selectedCourseId}
        saving={saving}
      />
    </div>
  );
};

export default LessonAdmin;