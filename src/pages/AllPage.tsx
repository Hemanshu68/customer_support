import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import React from "react";
import { data, Tdata } from "../assets/constants";




interface Column {
    id: 'sr' | 'name' | 'email' | 'issueType' | 'description' | 'create' | 'isActive';
    label: string;
    minWidth?: number;
    align?: 'left';
    formatStatus?: (value: boolean) => string;
}

const columns: readonly Column[] = [
    {
        id: 'sr',
        label: 'Sr.No',
        minWidth: 100,
        align: 'left',
    },
    {
        id: 'name',
        label: 'Name',
        minWidth: 100,
        align: 'left',
    },
    {
        id: 'email',
        label: 'Email',
        minWidth: 170,
        align: 'left',

    },
    {
        id: 'issueType',
        label: 'Issue Type',
        minWidth: 170,
        align: 'left',

    },
    {
        id: 'isActive',
        label: 'Status',
        minWidth: 50,
        align: 'left',
        formatStatus: (value: boolean) => value ? "Open" : "Closed",
    },
];


const rows: Tdata[] = data;

const AllPage = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ padding: '2rem 0', height: 'fir-content', minHeight: '100%' }}>
            <TableContainer component={Paper} sx={{ width: "70%", margin: '0 auto', overflow: 'hidden' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead >
                        <TableRow sx={{ bgcolor: '#37304a', }}>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, backgroundColor: 'transparent', color: 'white' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, idx) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                                        {columns.map((column) => {
                                            if (column.id === 'sr')
                                                return (<TableCell key={idx} align={column.align} >
                                                    {idx + 1}
                                                </TableCell>)
                                            const value = row[column.id];


                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {
                                                        column.formatStatus && typeof value === 'boolean' ? column.formatStatus(value) : value
                                                    }

                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Paper>
    );
}

export default AllPage;
