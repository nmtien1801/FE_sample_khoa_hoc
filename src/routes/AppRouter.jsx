import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientLayout from "../components/layout/ClientLayout.jsx";
import PortalPage from "../clientPages/portal/TrangChu.jsx";
import Layout2TrangChu from "../clientPages/layout2/TrangChu.jsx";
import Layout3TrangChu from "../clientPages/layout3/TrangChu.jsx";
import Layout4TrangChu from "../clientPages/layout4/TrangChu.jsx";
import Layout5TrangChu from "../clientPages/layout5/TrangChu.jsx";
import Layout6TrangChu from "../clientPages/layout6/TrangChu.jsx";

import Header from "../components/header/HeaderClient.jsx";
import Footer from "../components/footer.jsx";

import Header1 from "../clientPages/layout1/header.jsx";
import Footer1 from "../clientPages/layout1/footer.jsx";
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
                <Route path="/layout2" element={<ClientLayout header={Header} footer={Footer} />}>
                    <Route index element={<Layout2TrangChu />} />
                </Route>
                <Route path="/layout3" element={<ClientLayout header={Header} footer={Footer} />}>
                    <Route index element={<Layout3TrangChu />} />
                </Route>
                <Route path="/layout4" element={<ClientLayout header={Header} footer={Footer} />}>
                    <Route index element={<Layout4TrangChu />} />
                </Route>
                <Route path="/layout5" element={<ClientLayout header={Header} footer={Footer} />}>
                    <Route index element={<Layout5TrangChu />} />
                </Route>
                <Route path="/layout6" element={<ClientLayout header={Header} footer={Footer} />}>
                    <Route index element={<Layout6TrangChu />} />
                </Route>
                <Route path="/*" element={<PortalPage />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
