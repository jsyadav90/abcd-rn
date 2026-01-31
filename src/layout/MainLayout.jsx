import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Header onToggleSidebar={() => setCollapsed(!collapsed)} />
      <Sidebar collapsed={collapsed} />
      <main className="main" style={{ marginLeft: collapsed ? 0 : "var(--nav-width)" }}>{children}</main>
      {/* <main style={{ marginLeft: collapsed ? 0 : 0}}>{children}</main> */}
    </>
  );
};

export default MainLayout;
