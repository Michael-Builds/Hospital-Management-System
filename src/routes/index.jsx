import { LuLayoutGrid } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegFlag } from "react-icons/fa6";
import { TbGitBranch } from "react-icons/tb";
import { TbCoin } from "react-icons/tb";
// import { MdOutlineProductionQuantityLimits } from "react-icons/md"
import { IoIosHelpCircleOutline } from "react-icons/io";
import { HiMiniCog8Tooth } from "react-icons/hi2";

const routes = [
    {
        path: "/overview",
        name: "Overview",
        icon: <LuLayoutGrid />,
    },
    {
        path: "/patients",
        name: "Patients",
        icon: <HiOutlineUserGroup />,
    },
    {
        path: "/appointments",
        name: "Appointments",
        icon: < FaRegCalendarAlt />,
    },
    {
        path: "/reports",
        name: "Reports",
        icon: <FaRegFlag />,
    },
    {
        path: "/departments",
        name: "Departments",
        icon: <TbGitBranch />,
    },
    {
        path: "/payments",
        name: "Payments",
        icon: <TbCoin />,
    },
    // {
    //     path: "/product-stock",
    //     name: "Product & Stock",
    //     icon: <MdOutlineProductionQuantityLimits />,
    // },
    {
        path: "/help-center",
        name: "Help & Center",
        icon: <IoIosHelpCircleOutline />,
    },
    {
        path: "/settings",
        name: "Settings",
        icon: <HiMiniCog8Tooth />,
    },
];

export default routes;
