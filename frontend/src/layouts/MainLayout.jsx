import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

const MainLayout = () => {
  return (
    <div className="flex h-screen flex-col bg-[#212121] text-white">
      <Header />

      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;