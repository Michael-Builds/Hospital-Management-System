import { AnimatePresence, motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BiChevronLeft, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Img from "../assets/sidelogo.png";
import routes from "../routes";


const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [expandedRoutes, setExpandedRoutes] = useState({});

    const textAnimation = {
        hidden: {
            padding: 0,
            opacity: 0,
            transition: {
                duration: 0.1,
            },
        },
        show: {
            padding: 0,
            opacity: 1,
            transition: {
                duration: 0.2,
            },
        },
    };

    const toggleRouteExpansion = (routeName) => {
        setExpandedRoutes((prevExpandedRoutes) => ({
            ...prevExpandedRoutes,
            [routeName]: !prevExpandedRoutes[routeName],
        }));
    };

    return (
        <div className="flex">
            <motion.div
                animate={{ width: isOpen ? "200px" : "70px" }}
                className="h-screen shadow-xl text-gray overflow-y-auto bg-white "
                style={{ maxHeight: "100vh" }}
            >
                <div className="flex items-center justify-between my-7 pl-3  h-10">
                    <AnimatePresence>
                        {isOpen && (
                            <motion.h1
                                variants={textAnimation}
                                initial={"hidden"}
                                animate={"show"}
                                exit={"hidden"}
                                className="font-bold text-lg font-quicksand items-center flex gap-2 text-gray uppercase"
                            >
                                <img className="h-8 object-cover object-center" src={Img} alt="" />
                                HealthCare
                            </motion.h1>
                        )}
                    </AnimatePresence>
                    <div className="cursor-pointer text-xl" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <BiChevronLeft /> : <FaBars />}
                    </div>
                </div>
                <section className="mt-10" >
                    {routes.map((route) =>
                        route.children ? (
                            <div key={route.name} className={`${expandedRoutes[route.name] && "shadow-sm bg-slate-50 bg-opacity-30 "
                                }`}>
                                <div
                                    title={!isOpen && route.name?.toLowerCase()}
                                    onClick={() => toggleRouteExpansion(route.name)}
                                    className={`p-3 py-8 flex justify-between whitespace-nowrap items-center hover:border-r-4 border-primary ease-in duration-150 hover:ease-in hover:bg-slate-100 hover:text-black h-6 cursor-pointer`}
                                >
                                    <div className="flex gap-4">
                                        <div className="flex text-md">{route.icon}</div>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    variants={textAnimation}
                                                    initial={"hidden"}
                                                    animate={"show"}
                                                    exit={"hidden"}
                                                    className="flex whitespace-nowrap capitalize text-sm "
                                                >
                                                    {route.name}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {expandedRoutes[route.name] ? (
                                        <BiChevronUp />
                                    ) : (
                                        <BiChevronDown />
                                    )}
                                </div>
                                {route.children && expandedRoutes[route.name] && (
                                    <ul>
                                        {route.children.map((child) => (
                                            <li key={child.name}>
                                                <NavLink
                                                    title={!isOpen && child.name?.toLowerCase()}
                                                    to={child.path}
                                                    onClick={() => toggleRouteExpansion(expandedRoutes[route.name])}
                                                    className={({ isActive }) =>
                                                        `p-3 pl-6 py-6 flex justify-between whitespace-nowrap items-center hover:border-r-4 ease-in duration-150 hover:ease-in hover:bg-faint hover:text-dark h-6 ${isActive &&
                                                        "bg-faint text-primary border-r-4 border-primary "
                                                        }`}>
                                                    <div className="flex gap-4">
                                                        <div className="flex text-md">{child.icon}</div>
                                                        <AnimatePresence>
                                                            {isOpen && (
                                                                <motion.div
                                                                    variants={textAnimation}
                                                                    initial={"hidden"}
                                                                    animate={"show"}
                                                                    exit={"hidden"}
                                                                    className="flex whitespace-nowrap capitalize text-sm"
                                                                >
                                                                    {child.name}
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <NavLink
                                title={!isOpen && route.name?.toLowerCase()}
                                key={route.name}
                                to={route.path}
                                className={({ isActive }) =>
                                    `p-3 py-8 flex justify-between whitespace-nowrap font-quicksand items-center hover:border-r-4 ease-in duration-150 border-primary hover:ease-in hover:bg-faint hover:text-primary h-6 ${isActive &&
                                    "bg-faint text-primary border-r-4 border-primary font-quicksand "
                                    }`
                                }
                            >
                                <div className="flex gap-4">
                                    <div className="flex text-xl">{route.icon}</div>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                variants={textAnimation}
                                                initial={"hidden"}
                                                animate={"show"}
                                                exit={"hidden"}
                                                className="flex whitespace-nowrap capitalize text-md font-quicksand "
                                            >
                                                {route.name}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </NavLink>
                        )
                    )}
                    <div className="mt-6">
                        <div
                            title={!isOpen && "logout"}
                            className="p-3 py-8 flex gap-4 items-center hover:border-r-4 border-primary cursor-pointer ease-in duration-150 hover:ease-in hover:bg-primary hover:text-white h-6 "
                        >
                            <div className="flex text-xl">
                                <FiLogOut />
                            </div>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        variants={textAnimation}
                                        initial={"hidden"}
                                        animate={"show"}
                                        exit={"hidden"}
                                        className="flex whitespace-nowrap capitalize text-md font-quicksand "
                                    >
                                        Log Out
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </section>
            </motion.div>

        </div>
    )

}
export default SideBar;