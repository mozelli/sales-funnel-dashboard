import { Outlet } from "react-router";
import LeftSideBar from "../../components/left-side-bar";
import RightSideBar from "../../components/right-side-bar";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <LeftSideBar />
        <Outlet />
        <RightSideBar />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
