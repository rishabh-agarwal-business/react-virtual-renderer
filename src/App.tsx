import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className="min-h-screen"
      style={{
        background: "#09090B",
        color: "#FAFAFA",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
