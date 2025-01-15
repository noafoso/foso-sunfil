
import React from 'react'

import { cn } from "@/lib/utils";


import {
    ColumnDef,
    ColumnResizeMode,
    flexRender,
    Table as ReactTable
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import SystemNodata from "@/components/system/SystemNodata";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList
} from "@/components/ui/command";

import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";

import { Skeleton } from "@/components/ui/skeleton";

import { Check, ChevronsUpDown } from 'lucide-react';
import { BsChevronDoubleRight, BsChevronRight } from "react-icons/bs";

interface TableProps<T> {
    table: ReactTable<T>;
    columns: ColumnDef<T>[];
    classNameTableHeader?: string;
    pageCount: number;
    onPaginationChange: (pageIndex: number) => void;
    type?: string
    isLoading?: boolean
    enableColumnResizing?: boolean;
    columnResizeMode?: ColumnResizeMode;
}

const CommonTable = <T,>({ table, columns, classNameTableHeader, pageCount, onPaginationChange, type = "", isLoading, enableColumnResizing, columnResizeMode }: TableProps<T>) => {
    const itemsPerPage = table.getState().pagination.pageSize;

    const totalPages = Math.max(1, Math.ceil(pageCount / itemsPerPage));

    const currentPage = table.getState().pagination.pageIndex;

    const handlePaginationChange = (newPage: number) => {
        if (newPage >= 0 && newPage < totalPages && pageCount > 0) {
            onPaginationChange(newPage);
        }
    };

    return (
        <div className="min-h-[400px] mx-auto md:max-w-full max-w-[340px] sm:mx-0">
            <Table className="min-w-full max-w-full overflow-x-auto  table-auto whitespace-nowrap sm:whitespace-normal">
                <TableHeader className={`${classNameTableHeader}`}  {...(enableColumnResizing && { style: { width: table.getCenterTotalSize() } })}>
                    {/* <TableHeader className={`${classNameTableHeader} hidden sm:table-header-group`}> */}
                    {
                        table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {
                                    headerGroup.headers.map((header) => (
                                        <TableHead key={header.id} style={{ width: header.getSize() }}>
                                            {
                                                header.isPlaceholder
                                                    ?
                                                    null
                                                    :
                                                    <>
                                                        {
                                                            flexRender(
                                                                header.column.columnDef.header,
                                                                header.getContext()
                                                            )
                                                        }

                                                        {
                                                            enableColumnResizing && (
                                                                <div
                                                                    onMouseDown={header.getResizeHandler()}
                                                                    onTouchStart={header.getResizeHandler()}
                                                                    className={`resizer ${header.column.getIsResizing() ? 'isResizing' : ''
                                                                        }`}
                                                                ></div>
                                                            )
                                                        }
                                                    </>
                                            }
                                        </TableHead>
                                    ))
                                }
                            </TableRow>
                        ))
                    }
                </TableHeader>

                <TableBody>
                    {
                        isLoading
                            ?
                            (
                                <React.Fragment>
                                    {
                                        Array.from({ length: 5 }).map((_, index) => (
                                            <TableRow key={index}>
                                                {
                                                    Array.from({ length: columns.length }).map((_, index) => (
                                                        <TableCell key={index} className="text-center py-4">
                                                            <Skeleton className="3xl:h-20 h-16 w-full" />
                                                        </TableCell>
                                                    ))
                                                }
                                            </TableRow>
                                        ))
                                    }
                                </React.Fragment>
                            )
                            :
                            (
                                table.getRowModel().rows?.length ?
                                    (
                                        <React.Fragment>
                                            {
                                                table.getRowModel().rows.map((row) => (
                                                    <TableRow
                                                        key={row.id}
                                                        data-state={row.getIsSelected() && "selected"}
                                                    >
                                                        {
                                                            row.getVisibleCells().map((cell) => (
                                                                <TableCell key={cell.id} className="">
                                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                                </TableCell>
                                                            ))
                                                        }
                                                    </TableRow>
                                                ))
                                            }
                                        </React.Fragment>
                                    )
                                    :
                                    (
                                        <TableRow>
                                            <TableCell colSpan={columns.length} className="h-[150px] text-center py-10">
                                                <SystemNodata type={type} classNameTitle="text-[#1F1F1F8F] font-normal text-sm py-6" />
                                            </TableCell>
                                        </TableRow>
                                    )
                            )
                    }
                </TableBody>
            </Table>

            {
                table?.getRowModel()?.rows?.length > 0 &&
                <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0 sm:space-x-2 py-4">
                    <div className="text-sm text-muted-foreground">
                        {
                            pageCount > 0 &&
                            (
                                `${currentPage * itemsPerPage + 1} - ${Math.min((currentPage + 1) * itemsPerPage, pageCount)} of ${pageCount}`
                            )
                        }
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-12 space-y-4 sm:space-y-0">
                        <div className="flex items-center justify-between sm:justify-start">
                            <span className="mr-2 text-[#5F656A]">Rows per page:</span>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        className="w-[120px] justify-between border-t-0 border-x-0 rounded-none text-[#42464A] font-normal"
                                    >
                                        {table.getState().pagination.pageSize}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[120px] p-0">
                                    <Command>
                                        <CommandList>
                                            <CommandGroup>
                                                {[3, 5, 10, 15, 20, 25].map((size) => (
                                                    <CommandItem
                                                        key={size}
                                                        value={size.toString()}
                                                        onSelect={(currentValue) => {
                                                            table.setPageSize(Number(currentValue));
                                                        }}
                                                        className="text-[#42464A] flex items-center justify-between hover:bg-slate-50 cursor-pointer custom-transition"
                                                    >
                                                        <span>
                                                            {size}
                                                        </span>
                                                        <Check
                                                            className={cn(
                                                                "h-4 w-4",
                                                                size === table.getState().pagination.pageSize ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>

                        <div className="flex items-center justify-between gap-12">
                            <span className="3xl:text-base text-sm flex items-center justify-between sm:justify-start gap-1 text-[#5F656A]">
                                <div>Page</div>
                                <p>
                                    {
                                        pageCount > 0
                                            ?
                                            `${currentPage + 1} of ${totalPages}`
                                            :
                                            `0 of 0`
                                    }
                                </p>
                            </span>

                            <div className="flex items-center justify-between sm:justify-start space-x-2">
                                <Button
                                    variant="outline"
                                    className={`text-[#5F656A] 3xl:p-2.5 p-2 ${currentPage > 0 && pageCount > 0 ? "border-[#33353899] text-[#3A3D40]" : "border-[#EBECED] text-[#B9BDC0]"} border-2 rounded-none`}
                                    onClick={() => handlePaginationChange(0)}
                                    disabled={currentPage === 0 || pageCount === 0}
                                >
                                    <BsChevronDoubleRight className="3xl:text-base text-sm rotate-180" />
                                </Button>
                                <Button
                                    variant="outline"
                                    className={`text-[#5F656A] 3xl:p-2.5 p-2 ${currentPage > 0 && pageCount > 0 ? "border-[#33353899] text-[#3A3D40]" : "border-[#EBECED] text-[#B9BDC0]"} border-2 rounded-none`}
                                    onClick={() => handlePaginationChange(currentPage - 1)}
                                    disabled={currentPage === 0 || pageCount === 0}
                                >
                                    <BsChevronRight className="3xl:text-base text-sm rotate-180" />
                                </Button>

                                <Button
                                    variant="outline"
                                    className={`text-[#5F656A] 3xl:p-2.5 p-2 ${currentPage < totalPages - 1 && pageCount > 0 ? "border-[#33353899] text-[#3A3D40]" : "border-[#EBECED] text-[#B9BDC0]"} border-2 rounded-none`}
                                    onClick={() => handlePaginationChange(currentPage + 1)}
                                    disabled={currentPage === totalPages - 1 || pageCount === 0}
                                >
                                    <BsChevronRight className="3xl:text-base text-sm" />
                                </Button>
                                <Button
                                    variant="outline"
                                    className={`text-[#5F656A] 3xl:p-2.5 p-2 ${currentPage < totalPages - 1 && pageCount > 0 ? "border-[#33353899] text-[#3A3D40]" : "border-[#EBECED] text-[#B9BDC0]"} border-2 rounded-none`}
                                    onClick={() => handlePaginationChange(totalPages - 1)}
                                    disabled={currentPage === totalPages - 1 || pageCount === 0}
                                >
                                    <BsChevronDoubleRight className="3xl:text-base text-sm" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default CommonTable;