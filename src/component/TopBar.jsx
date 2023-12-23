import { BiCog, BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoIosMenu, IoIosSearch } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import Img from "../assets/user.jpeg";
import { GoBell } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

const TopBar = () => {
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showNotificationModal, setShowNotificationModal] = useState(false);
    const [isBlinking, setIsBlinking] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsBlinking((prev) => !prev);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    const handleProfileItemClick = () => {
        setShowProfileModal(false);
    };

    return (
        <div className="w-full bg-white text-black p-4 block shadow-md">
            <header className=" rounded-lg lg:grid md:grid-cols-12 ">
                <div className="inline-block  lg:hidden  w-full">
                    <div className="flex w-full">
                        <div className="w-1/2 text-right">
                            <button
                                onClick={toggleDropdown}
                                className="float-right px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:ring"
                            >
                                <IoIosMenu className="h-8 w-8 float-right text-primary font-bold" />
                            </button>
                        </div>
                    </div>
                    {isDropdownOpen && (
                        <div className=" right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div
                                className="py-1 "
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="options-menu"
                            >
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-quicksand"
                                    role="menuitem"
                                >
                                    Profile
                                </a>
                                <a
                                    href="/settings"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-quicksand "
                                    role="menuitem"
                                >
                                    Settings
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-quicksand "
                                    role="menuitem"
                                >
                                    Logout
                                </a>
                            </div>
                        </div>
                    )}
                </div>
                <div className="col-span-2 lg:col-span-8 ml-12 flex gap-6 ">
                    <div className="flex bg-white border-light border shadow-sm rounded-lg h-10 items-center px-2">
                        <IoIosSearch className=" h-5 w-5 text-md text-gray mr-2" />
                        <input
                            type="search"
                            placeholder="Search anything..."
                            className=" border-none placeholder:text-sm text-gray rounded-lg font-quicksand focus:outline-none focus:border-none bg-transparent"
                        />
                    </div>
                </div>
                <div className="px-4 hidden lg:inline-block col-span-4 relative  ">
                    <div className="flex  lg:gap-x-3  float-right">

                        <div className="mr-2 mt-3">
                            <div className="  ">
                                <div
                                    className={`w-4 h-4 bg-primary rounded-full ${isBlinking ? 'animate-blink' : ''
                                        }`}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div
                                onClick={() => setShowNotificationModal(!showNotificationModal)}
                                className=" text-dark relative p-2 w-full rounded-full cursor-pointer"
                            >
                                <GoBell className="h-6 w-6" />
                            </div>
                        </div>

                        <div className="mb-2 relative p-2 mr-2">
                            <p className="text-gray">|</p>
                        </div>


                        <div className="w-full relative ">
                            <ul

                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <div className="w-[2.2rem] h-[2.2rem] rounded-full bg-gray-50 shadow p-[2px]">
                                    <img
                                        src={Img}
                                        alt="image"
                                        className="w-full h-full object-center rounded-full object-cover "
                                    />
                                </div>
                                <div className="ml-2 mt-1">
                                    <p className="font-quicksand">Alexandro</p>
                                </div>

                                <div className="ml-1 mt-1">
                                    <IoIosArrowDown
                                        onClick={() => setShowProfileModal(!showProfileModal)} />
                                </div>
                            </ul>
                            {showProfileModal && (
                                <div className="min-w-[200px] absolute right-0 bg-white z-40 rounded-sm border-gray mt-2 shadow-xl p-4">
                                    <ul className="w-full whitespace-nowrap gap-3">
                                        <Link to="/users" className="">
                                            <li
                                                className="flex gap-3 py-2 font-quicksand p-2"
                                                onClick={handleProfileItemClick}
                                            >
                                                <BiSolidUser className="pt-1 w-6 h-6 text-gray" />
                                                Profile
                                            </li>
                                        </Link>
                                        <Link to="/settings">
                                            <li
                                                className="flex gap-3 py-2 font-quicksand "
                                                onClick={handleProfileItemClick}
                                            >
                                                <BiCog className="pt-1 w-6 h-6 text-gray " />
                                                Settings
                                            </li>
                                        </Link>
                                        <Link to="/">
                                            <li
                                                className="flex gap-3 py-2 font-quicksand "
                                            >
                                                <BiLogOut className="pt-1 w-6 h-6 text-gray " />
                                                Logout
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )

}

export default TopBar;