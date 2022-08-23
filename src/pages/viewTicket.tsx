import { Container, Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { data, Tdata } from "../assets/constants";




interface Column {
    id: 'sr' | 'remark' | 'date';
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
        minWidth: 50,
        align: 'left',
    },
];

const rows: Tdata = data[0]


const ViewTicket = () => {
    return (
        <Container sx={{ marginTop: '2%' }}>
            <Paper sx={{ padding: '2rem', height: 'fit-content' }}>
                <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ width: '80%', margin: '0 auto' }}>
                    <Grid item xs={6}>
                        <Typography align='left'>Name: {rows['name']}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography align='left'>IssueType: {rows['issueType']}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align='left'>Description: {rows['description']}</Typography>
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
                            {rows['remarks'].map((row, idx) => {
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
                                                        value
                                                    }

                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>

                </TableContainer>
            </Paper>



        </Container>
    )
}

export default ViewTicket;
