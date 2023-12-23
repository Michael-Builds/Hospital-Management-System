import { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { CiExport } from 'react-icons/ci';
import { FaChartLine } from 'react-icons/fa';
import { RiUser3Fill } from 'react-icons/ri';
import { PiSyringeFill } from 'react-icons/pi';
import { BsFillHouseFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import DataCard from './component/DataCard';
import Graph from "./component/Graph";
import Calendar from './component/Calendar';
import PatientsTable from './component/PatientsTable';

const Main = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Weekly');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const items = ['Weekly', 'Monthly'];

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    return (
        <section className="p-4 bg-slate-100 h-screen overflow-y-scroll pb-32 w-full">
            <div className="mt-8">
                <div className="flex">
                    <div className="flex-1">
                        <p className='text-xl font-quicksand text-gray font-semibold'>Welcome back, Kabanda <span>👋</span></p>
                    </div>

                    <div className="flex float-right -mt-4 mr-6 gap-6">
                        <div className="relative">
                            <div className=" border border-gray-400 text-gray p-2.5 px-3 rounded-md shadow-sm flex gap-2 items-center font-quicksand">
                                {selectedItem}
                                <MdKeyboardArrowDown
                                    onClick={toggleDropdown}
                                    className='text-gray-600 ml-4 cursor-pointer'

                                />
                            </div>
                            {isOpen && (
                                <ul className="absolute z-10 left-0 mt-2 w-[140px] bg-white border border-gray rounded-sm">
                                    {items.map((item, index) => (
                                        <li
                                            key={index}
                                            className="p-2 cursor-pointer text-center hover:bg-faint font-quicksand"
                                            onClick={() => handleItemClick(item)}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <Link to={"add"}>
                            <button className="bg-primary text-white p-3 px-4 rounded-lg shadow-sm flex gap-2 items-center font-quicksand">
                                <CiExport className='text-white h-4 w-4' />
                                Export
                            </button>

                        </Link>
                    </div>
                </div>



                <div className="grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-6 p-2">
                    <DataCard
                        title={"Overall visitors"}
                        progress={"45"}
                        rate={"+10.15"}
                        figure={"250"}
                        description={"Data obtained for the last 7 days from 5.567 "}
                        icon={FaChartLine}
                    />
                    <DataCard
                        title={"Total patients"}
                        progress={"57"}
                        rate={"+29.51%"}
                        figure={"500"}
                        description={"Data obtained for the last 7 days from 5.567 "}
                        icon={RiUser3Fill}
                    />
                    <DataCard
                        title={"Surgeries"}
                        rate={"+15.43%"}
                        progress={"25"}
                        figure={"700"}
                        description={"Data obtained for the last 7 days from 5.567 "}
                        icon={PiSyringeFill}
                    />
                    <DataCard
                        title={"Overall Room"}
                        rate={"+25.33%"}
                        progress={"50"}
                        figure={"850"}
                        description={"Data obtained for the last 7 days from 5.567 "}
                        icon={BsFillHouseFill}
                    />
                </div>

                <div className="w-full mt-6 grid grid-cols-3 h-fit gap-5 mt-4 p-2">
                    {/* Left Section */}
                    <div className="col-span-4 lg:col-span-2 h-full">
                        <Graph selectedItem={selectedItem} handleItemClick={handleItemClick} />
                    </div>

                    {/* Right Section */}
                    <div className="col-span-3 w-full lg:col-span-1 h-full ">
                        <Calendar />
                    </div>
                </div>

                {/* Patients Table */}
                <div className='pb-2 '>
                    <div className='col-span-4 mt-4 mb-4 w-full lg:col-span-2 h-full p-2 '>
                        <PatientsTable />
                    </div>

                </div>

            </div>
        </section>
    )
}
export default Main;