import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default MainLayout;
