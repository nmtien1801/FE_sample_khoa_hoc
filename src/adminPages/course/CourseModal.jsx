import React, { useState, useEffect } from 'react';
import { X, Upload, Save, Loader2 } from 'lucide-react';

const CourseModal = ({ isOpen, onClose, onSave, initialData, saving }) => {
  const defaultForm = {
    title: '',
    subtitle: '',
    description: '',
    price: '',
    categoryId: '',
    level: 'beginner',
    status: 'published',
    image: null,
  };

  const [formData, setFormData] = useState(defaultForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setFormData({
          title: initialData.title || '',
          subtitle: initialData.subtitle || '',
          description: initialData.description || '',
          price: initialData.price || '',
          categoryId: initialData.categoryId || '',
          level: initialData.level || 'beginner',
          status: initialData.status || 'published',
          image: initialData.image || null,
        });
      } else {
        setFormData(defaultForm);
      }
      setErrors({});
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.title.trim()) errs.title = 'Tiêu đề không được để trống';
    if (!formData.price || isNaN(Number(formData.price))) errs.price = 'Giá bán không hợp lệ';
    return errs;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    // Nếu image là File object → dùng FormData để upload
    // Nếu image là string URL → gửi bình thường
    if (formData.image instanceof File) {
      const fd = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        if (val !== null && val !== undefined) fd.append(key, val);
      });
      onSave(fd);
    } else {
      onSave(formData);
    }
  };

  const set = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const imagePreview = formData.image
    ? typeof formData.image === 'string'
      ? formData.image
      : URL.createObjectURL(formData.image)
    : null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl rounded-[40px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">

        {/* Header */}
        <div className="p-8 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-black text-slate-900">
              {initialData ? 'Chỉnh sửa khóa học' : 'Thêm khóa học mới'}
            </h2>
            <p className="text-xs text-slate-400 font-bold uppercase mt-1">Thông tin chi tiết khóa học</p>
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
        <div className="p-8 max-h-[65vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Cột trái */}
          <div className="space-y-5">
            <div>
              <label className="text-[11px] font-black text-slate-400 uppercase ml-1">Tiêu đề khóa học *</label>
              <input
                type="text"
                className={`w-full mt-1 px-5 py-4 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#00bc86] transition-all ${errors.title ? 'ring-2 ring-red-400' : ''}`}
                placeholder="Ví dụ: Lập trình ReactJS từ cơ bản..."
                value={formData.title}
                onChange={(e) => set('title', e.target.value)}
              />
              {errors.title && <p className="text-red-400 text-[11px] font-bold mt-1 ml-1">{errors.title}</p>}
            </div>

            <div>
              <label className="text-[11px] font-black text-slate-400 uppercase ml-1">Mô tả ngắn (Subtitle)</label>
              <input
                type="text"
                className="w-full mt-1 px-5 py-4 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#00bc86] transition-all"
                placeholder="Một câu tóm tắt hấp dẫn..."
                value={formData.subtitle}
                onChange={(e) => set('subtitle', e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-black text-slate-400 uppercase ml-1">Giá bán (VNĐ) *</label>
                <input
                  type="number"
                  className={`w-full mt-1 px-5 py-4 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#00bc86] ${errors.price ? 'ring-2 ring-red-400' : ''}`}
                  placeholder="2990000"
                  value={formData.price}
                  onChange={(e) => set('price', e.target.value)}
                />
                {errors.price && <p className="text-red-400 text-[11px] font-bold mt-1 ml-1">{errors.price}</p>}
              </div>
              <div>
                <label className="text-[11px] font-black text-slate-400 uppercase ml-1">Độ khó</label>
                <select
                  className="w-full mt-1 px-5 py-4 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#00bc86]"
                  value={formData.level}
                  onChange={(e) => set('level', e.target.value)}
                >
                  <option value="beginner">Cơ bản</option>
                  <option value="intermediate">Trung cấp</option>
                  <option value="advanced">Nâng cao</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-black text-slate-400 uppercase ml-1">Nội dung mô tả</label>
              <textarea
                rows="4"
                className="w-full mt-1 px-5 py-4 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#00bc86]"
                placeholder="Mô tả chi tiết nội dung khóa học..."
                value={formData.description}
                onChange={(e) => set('description', e.target.value)}
              />
            </div>
          </div>

          {/* Cột phải */}
          <div className="space-y-5">
            <div>
              <label className="text-[11px] font-black text-slate-400 uppercase ml-1">Hình ảnh đại diện</label>
              <label className="mt-1 group relative flex flex-col items-center justify-center w-full h-[200px] bg-slate-50 border-2 border-dashed border-slate-200 rounded-[32px] hover:bg-slate-100 hover:border-[#00bc86] transition-all cursor-pointer overflow-hidden">
                {imagePreview ? (
                  <img src={imagePreview} className="w-full h-full object-cover" alt="preview" />
                ) : (
                  <>
                    <Upload className="text-slate-300 mb-2 group-hover:text-[#00bc86] transition-colors" size={32} />
                    <p className="text-xs font-bold text-slate-400">Tải ảnh lên (JPG, PNG)</p>
                    <p className="text-[10px] text-slate-300 mt-1">Khuyến nghị: 1280×720px</p>
                  </>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => e.target.files[0] && set('image', e.target.files[0])}
                />
              </label>
              {imagePreview && (
                <button
                  onClick={() => set('image', null)}
                  className="mt-2 text-[11px] font-bold text-red-400 hover:text-red-600 ml-1"
                >
                  Xóa ảnh
                </button>
              )}
            </div>

            <div>
              <label className="text-[11px] font-black text-slate-400 uppercase ml-1">Trạng thái xuất bản</label>
              <div className="flex gap-2 mt-2">
                {[
                  { value: 'published', label: 'Công khai' },
                  { value: 'draft', label: 'Bản nháp' },
                ].map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => set('status', s.value)}
                    className={`flex-1 py-3 rounded-xl text-xs font-bold uppercase transition-all ${
                      formData.status === s.value
                        ? 'bg-[#00bc86] text-white shadow-md shadow-green-100'
                        : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[11px] font-black text-slate-400 uppercase ml-1">Category ID</label>
              <input
                type="number"
                className="w-full mt-1 px-5 py-4 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#00bc86]"
                placeholder="Nhập ID danh mục..."
                value={formData.categoryId}
                onChange={(e) => set('categoryId', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 bg-slate-50 flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={saving}
            className="px-6 py-4 rounded-2xl font-bold text-slate-500 hover:bg-slate-200 transition-all disabled:opacity-50"
          >
            Hủy bỏ
          </button>
          <button
            onClick={handleSubmit}
            disabled={saving}
            className="px-10 py-4 bg-[#00bc86] text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-green-200 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            {saving ? (
              <><Loader2 size={18} className="animate-spin" /> Đang lưu...</>
            ) : (
              <><Save size={18} /> {initialData ? 'Cập nhật' : 'Thêm khóa học'}</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;