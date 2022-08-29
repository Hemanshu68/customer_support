import {
    Box,
    Button,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    Stack,
    TextareaAutosize,
    TextField
} from "@mui/material"
import { ChangeEvent, useState } from "react";
import logoimg from '../assets/logo.png'
import { API } from "./API";
import MyDialog from "./MyDialog";

export enum IssueType {
    NONE = 'NONE',
    PAYMENT = 'Payment',
    QUALITY = 'Quality',
    OTHER = 'Other',
}

interface ticketInterface {
    name: string,
    email: string,
    issueType: IssueType,
    description: string

}
const initialState = {
    name: '',
    email: '',
    issueType: IssueType.NONE,
    description: ''
};
const SubmitTicket = () => {

    const [ticket, setTicket] = useState<ticketInterface>(initialState)
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [err, setErr] = useState(false);
    const formValidate = () => {
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regexp.test(ticket.email) && ticket.issueType !== IssueType.NONE && ticket.name.length > 3 && ticket.description.length > 10;
    }
    const [sucessId, setSucessId] = useState<number | undefined>(undefined);
    const createTicket = async () => {
        try {
            const { data } = await API.post('/ticket/create', ticket)

            setOpenDialog(true);
            setSucessId(data.ticketId)
        } catch (err) {
            console.error(err)
        }
        setTicket(initialState);
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!formValidate()) {
            setErr(true);
            return;
        }
        createTicket();
        setTicket(initialState);
    }
    return (
        <Container sx={{ padding: '1%', textAlign: 'center' }}>
            <h2>Submit A Ticket</h2>
            <Box
                component="img"
                sx={{
                    margin: '10px auto',
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={logoimg}
            />
            {openDialog && <MyDialog isOpen={openDialog} ticketId={sucessId} setIsOpen={setOpenDialog} />}
            <Paper component='div' style={{ display: 'flex', height: '100%', justifyContent: 'center', padding: '5%', flexDirection: 'row' }}>
                <Stack>
                    <form >
                        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ display: 'flex', justifyContent: 'left' }} direction='row'>
                            <Grid item xs={6}>
                                <TextField
                                    autoComplete='ViewCrunch'
                                    style={{ backgroundColor: '#f0f0f0' }}
                                    id="input-with-icon-textfield"
                                    label="Name"
                                    required
                                    fullWidth
                                    type="text"
                                    name='name'
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTicket({ ...ticket, [e.target.name]: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    autoComplete='ViewCrunch'
                                    style={{ backgroundColor: '#f0f0f0' }}
                                    id="input-with-icon-textfield"
                                    label="Email"
                                    required
                                    fullWidth
                                    type="text"
                                    name="email"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTicket({ ...ticket, [e.target.name]: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ textAlign: 'left' }}>
                                <FormControl required sx={{ minWidth: '50%' }}>
                                    <InputLabel id="issue-type">Issue Type</InputLabel>
                                    <Select
                                        labelId="issueType"
                                        label='Issue Type'
                                        id="issue-type"
                                        value={ticket.issueType}
                                        name="issueType"
                                        onChange={(e: SelectChangeEvent<string>) => setTicket({ ...ticket, [e.target.name]: e.target.value })}
                                    >
                                        <MenuItem value={IssueType.PAYMENT}>Payment</MenuItem>
                                        <MenuItem value={IssueType.QUALITY}>Quality</MenuItem>
                                        <MenuItem value={IssueType.OTHER}>Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    aria-label="Description"
                                    name='description'
                                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setTicket({ ...ticket, [e.target.name]: e.target.value })}
                                    minRows={6}
                                    placeholder="Describe the issue"
                                    required
                                    style={{ resize: 'none', width: '100%' }}
                                />
                            </Grid>

                        </Grid>
                        <br />
                    </form>
                    {err ? <p style={{ color: 'red', textAlign: 'left', margin: '0' }}>All feilds are required</p> : null}
                    <Button variant="contained" type="submit" style={{ width: '30% ', margin: '0 auto' }} onClick={handleSubmit}>Submit</Button>
                </Stack>
            </Paper>
        </Container >
    );
}



export default SubmitTicket;
