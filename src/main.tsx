import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "~/styles/global.css";

import { TopPage } from "~/pages";
import { CssModulesPage } from "~/pages/css-modules";
import { TailwindCssPage } from "~/pages/tailwind-css";
import { NotFoundPage } from "~/pages/404";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<TopPage />} />
        <Route path="/tailwind-css" element={<CssModulesPage />} />
        <Route path="/css-modules" element={<TailwindCssPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
