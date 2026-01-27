import { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Header onToggleSidebar={() => setCollapsed(!collapsed)} />
      <Sidebar collapsed={collapsed} />
      <main style={{ marginLeft: collapsed ? 0 : "var(--nav-width)" }}>{children}</main>
    </>
  );
};

export default MainLayout;
