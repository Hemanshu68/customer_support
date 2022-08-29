import { Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Tdata } from "../assets/constants";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { API } from "./API";


interface Column {
    id: 'sr' | 'remark' | 'date';
    subid?: string;
    label: string;
    minWidth?: number;
    align?: 'left';
}

const columns: readonly Column[] = [
    {
        id: 'sr',
        label: 'Sr.No',
        minWidth: 100,
        align: 'left',
    },

    {
        id: 'remark',

        label: 'Remark',
        minWidth: 170,
        align: 'left',

    },
    {
        id: 'date',
        label: 'Date',
        minWidth: 170,
        align: 'left',

    },
];

const initialRows: Tdata = {
    name: '',
    email: '',
    issueType: '',
    description: '',
    remarks: [],
    create: '',
    isActive: true,
}

const ViewTicket = () => {
    const { id } = useParams();
    const [row, setRow] = useState<Tdata>(initialRows);
    const [loading, setloading] = useState<boolean>(false)
    const getTicket = async () => {
        setloading(true)
        try {
            const { data } = await API.get(`/ticket/${id}`);
            setRow(data)
        }
        catch (err) {
            console.error(err)
        }
        setloading(false)
    }

    useEffect(() => {
        getTicket();

    }, [id])


    if (loading)
        return (<>loading</>);


    return (
        <Container sx={{ marginTop: '2%' }}>
            <Paper sx={{ padding: '2rem', height: 'fit-content' }}>
                <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ width: '80%', margin: '0 auto' }}>
                    <Grid item xs={6}>
                        <Typography align='left'>Name: {row['name']}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography align='left'>IssueType: {row['issueType']}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align='left'>Description: {row['description']}</Typography>
                    </Grid>


                </Grid>
            </Paper>
            <Paper sx={{ padding: '2rem 0', height: 'fit-content', minHeight: '100%' }}>
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
                            {
                                row['remarks'].map((remark, idx) => {

                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                                            {columns.map((column, idx) => {
                                                if (column.id === 'sr')
                                                    return (<TableCell key={idx} align={column.align} >
                                                        {idx + 1}
                                                    </TableCell>)


                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {
                                                            remark[column.id]
                                                        }
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );


                                })
                            }



                        </TableBody>
                    </Table>

                </TableContainer>
            </Paper>



        </Container>
    )
}

export default ViewTicket;
