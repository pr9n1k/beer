import * as React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Beer } from "../pages/Beer";
import { Home } from "../pages/Home";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/beer" element={<Home />} />
      <Route path="/beer/:id" element={<Beer />} />
      <Route path="*" element={<Navigate to={"/beer"} />} />
    </Routes>
  );
}
