import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientLayout from "../components/layout/ClientLayout.jsx";
import PortalPage from "../clientPages/portal/TrangChu.jsx";

import Header1 from "../clientPages/layout1/Header.jsx";
import Footer1 from "../clientPages/layout1/Footer.jsx";
import Layout1TrangChu from "../clientPages/layout1/TrangChu.jsx";
import Layout1GioiThieu from "../clientPages/layout1/GioiThieu.jsx";
import Layout1KhoaHoc from "../clientPages/layout1/KhoaHoc.jsx";
import Layout1LienHe from "../clientPages/layout1/LienHe.jsx";
import Layout1TinTuc from "../clientPages/layout1/TinTuc.jsx";
import Layout1KienThuc from "../clientPages/layout1/KienThuc.jsx";
import Layout1BaiViet from "../clientPages/layout1/BaiViet.jsx";
import Layout1ClientLogin from "../clientPages/layout1/ClientLogin.jsx";
import Layout1LessonsList from "../clientPages/layout1/LessonsList.jsx";
import Layout1LessonDetail from "../clientPages/layout1/LessonDetail.jsx";

import Header2 from "../clientPages/layout2/Header.jsx";
import Footer2 from "../clientPages/layout2/Footer.jsx";
import Layout2TrangChu from "../clientPages/layout2/TrangChu.jsx";
import Layout2Courses from "../clientPages/layout2/Courses.jsx";
import Layout2CourseDetail from "../clientPages/layout2/CourseDetail.jsx";
import Layout2Cart from "../clientPages/layout2/Cart.jsx";
import Layout2TinTuc from "../clientPages/layout2/TinTuc.jsx";
import Layout2LienHe from "../clientPages/layout2/LienHe.jsx";
import Layout2ClientLogin from "../clientPages/layout2/ClientLogin.jsx";
import Layout2MyCourses from "../clientPages/layout2/MyCourses.jsx";
import Layout2MyCourseDetail from "../clientPages/layout2/MyCourseDetail.jsx";

import AdminLayout from "../components/layout/AdminLayout.jsx";
import CourseAdmin from "../adminPages/course/CourseAdmin.jsx";
import LessonAdmin from "../adminPages/lession/LessonAdmin.jsx";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PortalPage />} />
                <Route path="/layout1" element={<ClientLayout header={Header1} footer={Footer1} />}>
                    <Route index element={<Layout1TrangChu />} />
                    <Route path="gioi-thieu" element={<Layout1GioiThieu />} />
                    <Route path="khoa-hoc" element={<Layout1KhoaHoc />} />
                    <Route path="kien-thuc" element={<Layout1KienThuc />} />
                    <Route path="kien-thuc/:topic" element={<Layout1KienThuc />} />
                    <Route path="bai-viet" element={<Layout1BaiViet />} />
                    <Route path="lien-he" element={<Layout1LienHe />} />
                    <Route path="tin-tuc" element={<Layout1TinTuc />} />
                    <Route path="login" element={<Layout1ClientLogin />} />
                    <Route path="lessons" element={<Layout1LessonsList />} />
                    <Route path="lessons/:id" element={<Layout1LessonDetail />} />
                </Route>

                <Route path="/layout2" element={<ClientLayout header={Header2} footer={Footer2} />}>
                    <Route index element={<Layout2TrangChu />} />
                    <Route path="courses" element={<Layout2Courses />} />
                    <Route path="courses/:id" element={<Layout2CourseDetail />} />
                    <Route path="cart" element={<Layout2Cart />} />
                    <Route path="login" element={<Layout2ClientLogin />} />
                    <Route path="my-courses" element={<Layout2MyCourses />} />
                    <Route path="my-courses/:id" element={<Layout2MyCourseDetail />} />
                    <Route path="tin-tuc" element={<Layout2TinTuc />} />
                    <Route path="lien-he" element={<Layout2LienHe />} />
                </Route>

                {/* private route */}
                <Route
                    path="/admin"
                    element={
                        // <ProtectedRoute>
                        <AdminLayout />
                        // </ProtectedRoute>
                    }
                >
                    {/* route course */}
                    <Route path="courses" element={<CourseAdmin />} />
                    <Route path="courses/:id" element={<CourseAdmin />} />

                    {/* route lesson */}
                    <Route path="lessons" element={<LessonAdmin />} />
                    <Route path="lessons/:id" element={<LessonAdmin />} />
                </Route>

                <Route path="/*" element={<PortalPage />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
