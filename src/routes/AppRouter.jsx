import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientLayout from "../components/layout/ClientLayout.jsx";
import LandingPage from "../components/LandingPage.jsx";
import Sample1 from "../clientPages/sample1/Index.jsx";
import Sample2 from "../clientPages/sample2/Index.jsx";
import Sample3 from "../clientPages/sample3/Index.jsx";
import Sample4 from "../clientPages/sample4/Index.jsx";
import Sample5 from "../clientPages/sample5/Index.jsx";
import Sample6 from "../clientPages/sample6/Index.jsx";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/samples" element={<ClientLayout />}>
                    <Route path="sample1" element={<Sample1 />} />
                    <Route path="sample2" element={<Sample2 />} />
                    <Route path="sample3" element={<Sample3 />} />
                    <Route path="sample4" element={<Sample4 />} />
                    <Route path="sample5" element={<Sample5 />} />
                    <Route path="sample6" element={<Sample6 />} />
                </Route>
                <Route path="/*" element={<LandingPage />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
