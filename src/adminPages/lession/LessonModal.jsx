import React, { useState, useEffect } from 'react';
import { X, Video, Save, Loader2 } from 'lucide-react';

const LessonModal = ({ isOpen, onClose, onSave, initialData, courseId, saving }) => {
  const defaultForm = {
    title: '',
    videoUrl: '',
    duration: '',
    order: 1,
    content: '',
    description: '',
    courseId: courseId,
  };

  const [formData, setFormData] = useState(defaultForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setFormData({
          title: initialData.title || '',
          videoUrl: initialData.videoUrl || '',
          duration: initialData.duration || '',
          order: initialData.order ?? 1,
          content: initialData.content || '',
          description: initialData.description || '',
          courseId: initialData.courseId || courseId,
        });
      } else {
        setFormData({ ...defaultForm, courseId });
      }
      setErrors({});
    }
  }, [initialData, isOpen, courseId]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.title.trim()) errs.title = 'Tiêu đề không được để trống';
    if (formData.order < 1) errs.order = 'Thứ tự phải >= 1';
    return errs;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    onSave({
      ...formData,
      order: Number(formData.order),
      courseId: Number(courseId),
    });
  };

  const set = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-xl rounded-[40px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">

        {/* Header */}
        <div className="p-8 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-black text-slate-900">
              {initialData ? 'Sửa bài học' : 'Thêm bài học mới'}
            </h2>
            <p className="text-[10px] text-slate-400 font-black uppercase mt-1">Thông tin chi tiết bài giảng</p>
          </div>
          <button
            onClick={onClose}
            disabled={saving}
            className="p-2 hover:bg-slate-100 rounded-full transition-all disabled:opacity-50"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 space-y-5 max-h-[60vh] overflow-y-auto">
          {/* Tiêu đề */}
          <div>
            <label className="text-[11px] font-black text-slate-400 uppercase ml-1">Tiêu đề bài học *</label>
            <input
              type="text"
              className={`w-full mt-1 px-5 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-[#00bc86] transition-all ${errors.title ? 'ring-2 ring-red-400' : ''}`}
              placeholder="Ví dụ: Cài đặt môi trường Node.js..."
              value={formData.title}
              onChange={(e) => set('title', e.target.value)}
            />
            {errors.title && <p className="text-red-400 text-[11px] font-bold mt-1 ml-1">{errors.title}</p>}
          </div>

          {/* Video URL + Thứ tự */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] font-black text-slate-400 uppercase ml-1">URL Video</label>
              <div className="relative mt-1">
                <Video className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                <input
                  type="text"
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-[#00bc86]"
                  placeholder="https://youtube.com/..."
                  value={formData.videoUrl}
                  onChange={(e) => set('videoUrl', e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="text-[11px] font-black text-slate-400 uppercase ml-1">Thứ tự *</label>
              <input
                type="number"
                min="1"
                className={`w-full mt-1 px-5 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-[#00bc86] ${errors.order ? 'ring-2 ring-red-400' : ''}`}
                value={formData.order}
                onChange={(e) => set('order', e.target.value)}
              />
              {errors.order && <p className="text-red-400 text-[11px] font-bold mt-1 ml-1">{errors.order}</p>}
            </div>
          </div>

          {/* Thời lượng */}
          <div>
            <label className="text-[11px] font-black text-slate-400 uppercase ml-1">Thời lượng</label>
            <input
              type="text"
              className="w-full mt-1 px-5 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-[#00bc86]"
              placeholder="Ví dụ: 15:30 hoặc 15 phút"
              value={formData.duration}
              onChange={(e) => set('duration', e.target.value)}
            />
          </div>

          {/* Nội dung bài giảng */}
          <div>
            <label className="text-[11px] font-black text-slate-400 uppercase ml-1">Nội dung / Ghi chú bài giảng</label>
            <textarea
              rows="5"
              className="w-full mt-1 px-5 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-[#00bc86]"
              placeholder="Ghi chú, mã nguồn, hoặc tài liệu bổ sung..."
              value={formData.content}
              onChange={(e) => set('content', e.target.value)}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 bg-slate-50 flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={saving}
            className="px-6 py-4 rounded-2xl font-bold text-slate-500 hover:bg-slate-200 transition-all disabled:opacity-50"
          >
            Hủy
          </button>
          <button
            onClick={handleSubmit}
            disabled={saving}
            className="flex items-center gap-2 px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-slate-200 active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            {saving ? (
              <><Loader2 size={18} className="animate-spin" /> Đang lưu...</>
            ) : (
              <><Save size={18} /> {initialData ? 'Cập nhật' : 'Thêm bài học'}</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonModal;