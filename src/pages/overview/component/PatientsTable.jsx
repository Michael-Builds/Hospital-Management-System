import React, { useMemo, useState } from "react";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
} from "@tanstack/react-table";
import {
    BsEyeFill,
    BsPencil,
    BsSortDown,
    BsSortUp,
} from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import {
    Button,
    Typography,
} from "@material-tailwind/react";
import mockData from '../data/Data.json';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import IndeterminateCheckbox from '../../../component/inderterminateCheckbox';
import { BsTrash } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { BsFilterLeft } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";

const PatientsTable = () => {
    const data = useMemo(() => mockData, []);
    const [setSelectedItems] = useState([]);


    const columns = [
        {
            id: 'select',
            header: ({ table }) => (
                <IndeterminateCheckbox
                    {...{
                        checked: table.getIsAllRowsSelected(),
                        indeterminate: table.getIsSomeRowsSelected(),
                        onChange: table.getToggleAllRowsSelectedHandler(),
                    }}
                />
            ),
            cell: ({ row }) => (
                <div className="px-1">
                    <IndeterminateCheckbox
                        {...{
                            checked: row.getIsSelected(),
                            disabled: !row.getCanSelect(),
                            indeterminate: row.getIsSomeSelected(),
                            onChange: row.getToggleSelectedHandler(),
                        }}
                    />
                </div>
            ),
        },
        {
            header: "No",
            accessorKey: "no",
        },
        {
            header: "ID Code",
            accessorKey: "id",
        },
        {
            header: "Patient Name",
            accessorKey: "patient_name",
        },
        {
            header: "Age ",
            accessorKey: "age",
        },
        {
            header: "Created Date ",
            accessorKey: "created_date",
        },
        {
            header: "Time",
            accessorKey: "time",
        },
        {
            header: "Patient Type",
            accessorKey: "type_patient",
        },
        {
            header: "Status",
            accessorKey: "status",
            cell: (props) => (
                <div className="px-1 flex gap-2 capitalize">
                    {props.getValue() === "Success" ? (
                        <div className="w-full flex  items-center gap-2">
                            <span className="text-green-600 bg-green-200 p-2 pl-7 pr-7 rounded-lg">{props.getValue()}</span>
                        </div>
                    ) : props.getValue() === "Pending" ? (
                        <div className="w-full flex capitalize items-center gap-2">
                            <span className="text-orange-900 bg-orange-300 p-2 pl-7 pr-7 rounded-lg">{props.getValue()}</span>
                        </div>
                    ) : (
                        <div className="w-full flex items-center gap-2">
                            <span className="text-red-600 bg-red-200 p-2 pl-6 pr-6 rounded-lg">{props.getValue()}</span>
                        </div>
                    )}
                </div>

            ),
        },
        {
            id: "actions",
            cell: () => (
                <div className="flex gap-2">
                    <div className="bg-green-600 rounded-lg p-2">
                        <BsEyeFill className="h-3 w-3 fill-white cursor-pointer hover:bg-green-900" />
                    </div>
                    <div className="bg-blue-600 rounded-lg p-2">
                        <BsPencil className="h-3 w-3 fill-white cursor-pointer hover:bg-blue-900" />
                    </div>
                    <div className="bg-red-600 rounded-lg p-2">
                        <BsTrash className="h-3 w-3 fill-white cursor-pointer hover:bg-red-900" />
                    </div>
                </div>


            ),
        },
    ];

    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");
    const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable({
        data,
        columns,
        getFilteredRowModel: getFilteredRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting: sorting,
            globalFilter: filtering,
            rowSelection: rowSelection,
        },
        enableRowSelection: true,
        onRowSelectionChange: (newSelection) => {
            setSelectedItems(newSelection.rows);
            setRowSelection(newSelection);
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
    });


    const paginationButtons = [];
    for (let i = 0; i < table.getPageCount(); i++) {
        paginationButtons.push(
            <Button
                onClick={() => table.setPageIndex(i)}
                className={`${table.getState().pagination.pageIndex === i
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600"
                    } h-10 w-10 p-2`}
                key={i}>
                {i + 1}
            </Button>
        );
    }


    return (
        <div className="w-full bg-white py-10 px-4 rounded-lg shadow-lg">
            <div>
                <div className="flex gap-5 justify-between">
                    <div className="flex gap-2 items-center">
                        <div className="flex items-center">
                            <div className="bg-white p-2 rounded-lg shadow-lg">
                                <TbUsers className="text-primary" />

                            </div>
                            <h2 className="font-quicksand ml-2">All Patients</h2>
                        </div>

                    </div>
                    <div className="flex gap-3">
                        <div className="bg-gray-100 flex items-center border border-light flex items-center rounded px-1">
                            <IoIosSearch className="w-6 h-6 text-gray ml-2" />
                            <input
                                type="text "
                                value={filtering}
                                onChange={(e) => setFiltering(e.target.value)}
                                className="px-2 text-gray-600 py-2 font-quicksand border-0 focus:border-none focus:outline-none mr-2 rounded-t h-full w-full bg-transparent "
                                placeholder="Search ..."
                            />

                        </div>

                        <button className="bg-white text-gray border border-light p-2 px-4 rounded-md shadow-sm flex gap-2 items-center font-quicksand">
                            <BsFilterLeft className='text-gray h-4 w-4' />
                            Filter
                        </button>
                    </div>
                </div>
            </div>

            {data.length > 0 ? (
                <div className="mt-10 w-full ">
                    <table className="w-full mt-4 text-left overflow-scroll outlet">
                        <thead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th
                                            key={header.id}
                                            onClick={header.column.getToggleSortingHandler()}
                                            className="capitalise border-b border-b-primary bg-gray-100 p-4"
                                        >
                                            <Typography
                                                // variant="h3"
                                                color="blue-gray"
                                                className=" capitalise font-quicksand block text-base font-semibold leading-tight tracking-normal text-inherit antialiased text-gray opacity-70 whitespace-nowrap"
                                            >
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                                {
                                                    {
                                                        asc: <BsSortUp className="w-5 h-5 inline mx-2" />,
                                                        desc: <BsSortDown className="w-5 h-5 inline mx-2" />,
                                                    }[header.column.getIsSorted()]
                                                }
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>

                        <tbody>
                            {table.getRowModel().rows.map((row) => (
                                <tr key={row.id} className=" cursor-pointer ">
                                    {row.getVisibleCells().map((cell) => (
                                        <td
                                            key={cell.id}
                                            className="p-4 border-b border-primary ">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal font-quicksand ">
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </Typography>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex items-center justify-center gap-4 w-full mt-6">
                        <div className="flex items-center gap-2 mt-2">
                            <Button
                                variant="text"
                                className="flex items-center gap-2 disabled:text-gray font-quicksand hover:bg-primary hover:text-white"
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}>
                                <IoIosArrowBack
                                    strokeWidth={2}
                                    className="h-4 w-4"
                                />{" "}
                                Previous
                            </Button>
                            <div className="flex items-center gap-2 mt-2">
                                {paginationButtons.map((u) => u)}
                            </div>
                            <Button
                                variant="text"
                                className="flex items-center gap-2 disabled:text-gray font-quicksand hover:bg-primary hover:text-white"
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}>
                                Next
                                <IoIosArrowForward
                                    strokeWidth={2}
                                    className="h-4 w-4"
                                />
                            </Button>
                        </div>
                        <div className="flex items-center justify-center gap-4 w-full mt-6">
                            <label className="text-sm font-medium capitalize font-quicksand">
                                page {table.getState().pagination.pageIndex + 1} of{" "}
                                {table.getPageCount()}
                            </label>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mt-10 w-full ">
                    <h1 className="w-full text-center font-medium text-gray-500 text-xl">
                        No Data Available at the moment
                    </h1>
                </div>
            )}
        </div>
    );
};

PatientsTable.propTypes = {
    getValue: PropTypes.func.isRequired,
};

export default PatientsTable;