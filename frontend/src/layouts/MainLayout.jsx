import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import MainContainer from "../components/layout/MainContainer";

const MainLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#212121] text-white">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <MainContainer>
          <Outlet />
        </MainContainer>
      </div>
    </div>
  );
};

export default MainLayout;