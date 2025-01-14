import { Outlet } from "react-router";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Menu from "../../components/Menu";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Menu />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
