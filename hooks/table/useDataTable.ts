import { useState } from "react";
import {
    ColumnDef,
    ColumnFiltersState,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table";

interface UseDataTableProps<T> {
    data: T[];
    columns: ColumnDef<T>[];
    pageCount: number;
    manualPagination?: boolean;
    columnResizeMode?: any
    pageSizeState: number;
    onPaginationChange?: (pagination: { pageIndex: number; pageSize: number }) => void;
}

const useDataTable = <T>({
    data,
    columns,
    pageCount,
    manualPagination = false,
    columnResizeMode,
    pageSizeState,
    onPaginationChange,
}: UseDataTableProps<T>) => {
    const [sorting, setSorting] = useState<SortingState>([]);

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

    const [rowSelection, setRowSelection] = useState({});

    const [globalFilter, setGlobalFilter] = useState("");

    const [{ pageIndex, pageSize }, setPagination] = useState({
        pageIndex: 0,
        pageSize: pageSizeState,
    });

    const pagination = {
        pageIndex,
        pageSize,
    };

    const table = useReactTable({
        data,
        columns,
        pageCount: pageCount,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            globalFilter,
            pagination,
        },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        onGlobalFilterChange: setGlobalFilter,
        onPaginationChange: (updater) => {
            setPagination((prev) => {
                const next = typeof updater === "function" ? updater(prev) : updater;
                if (onPaginationChange) {
                    onPaginationChange(next);
                }
                return next;
            });
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        manualPagination,
        columnResizeMode
    });

    return table;
};

export default useDataTable;
