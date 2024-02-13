import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import { Contact, Services, TheTeam, Members, Portfolio } from "pages";

const DesktopOne = React.lazy(() => import("pages/DesktopOne"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<DesktopOne />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/the-team" element={<TheTeam />} />
          <Route path="/members" element={<Members />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
