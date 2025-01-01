import { Routes, Route } from "react-router";

import Dashboard from "./pages/Dashboard";
import Display from "./pages/Dashboard/Display";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Display />} />
      </Route>
    </Routes>
  );
};
