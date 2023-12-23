import SideBar from "../component/SideBar";
import TopBar from "../component/TopBar";
import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <div className="flex h-screen overflow-hidden">
            <SideBar />
            <div className="w-full">
                <TopBar />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
