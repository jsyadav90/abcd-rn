// import { useState } from "react";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";

// const MainLayout = ({ children }) => {
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <>
//       <Header onToggleSidebar={() => setCollapsed(!collapsed)} />
//       <Sidebar collapsed={collapsed} />
//       <main className="main" style={{ marginLeft: collapsed ? 0 : "var(--nav-width)" }}>{children}</main>
      
//     </>
//   );
// };

// export default MainLayout;


// import { Outlet } from "react-router-dom";

// const MainLayout = () => {
//   return (
//     <>
//       {/* header / sidebar */}
      
//       <Outlet />
//     </>
//   );
// };

// export default MainLayout;

import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Header onToggleSidebar={() => setCollapsed(!collapsed)} />

      <Sidebar collapsed={collapsed} />

      <main
        className="main"
        style={{ marginLeft: collapsed ? 0 : "var(--nav-width)" }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;

