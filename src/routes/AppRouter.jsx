import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientLayout from "../components/layout/ClientLayout.jsx";
import PortalPage from "../clientPages/portal/TrangChu.jsx";
import Layout1TrangChu from "../clientPages/layout1/TrangChu.jsx";
import Layout2TrangChu from "../clientPages/layout2/TrangChu.jsx";
import Layout3TrangChu from "../clientPages/layout3/TrangChu.jsx";
import Layout4TrangChu from "../clientPages/layout4/TrangChu.jsx";
import Layout5TrangChu from "../clientPages/layout5/TrangChu.jsx";
import Layout6TrangChu from "../clientPages/layout6/TrangChu.jsx";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PortalPage />} />
                <Route path="/layout1" element={<ClientLayout />}>
                    <Route index element={<Layout1TrangChu />} />
                </Route>
                <Route path="/layout2" element={<ClientLayout />}>
                    <Route index element={<Layout2TrangChu />} />
                </Route>
                <Route path="/layout3" element={<ClientLayout />}>
                    <Route index element={<Layout3TrangChu />} />
                </Route>
                <Route path="/layout4" element={<ClientLayout />}>
                    <Route index element={<Layout4TrangChu />} />
                </Route>
                <Route path="/layout5" element={<ClientLayout />}>
                    <Route index element={<Layout5TrangChu />} />
                </Route>
                <Route path="/layout6" element={<ClientLayout />}>
                    <Route index element={<Layout6TrangChu />} />
                </Route>
                <Route path="/*" element={<PortalPage />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
