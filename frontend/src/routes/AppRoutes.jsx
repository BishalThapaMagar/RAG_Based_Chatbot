import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ChatPage from "../pages/ChatPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<ChatPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;