import { Button, Container, Paper, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewTicketForm = () => {

    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const [ticketId, setTicket] = useState<string>('');
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e: any) => {
        e.preventDefault();
        if (ticketId.length < 1)
            setErr(true);
        navigate(`/ticket/${ticketId}`)

    }
    return (
        <Container sx={{ padding: '1%', textAlign: 'center' }}>
            <h2>Track Ticket</h2>

            <Paper component='div' style={{ display: 'flex', height: '100%', justifyContent: 'center', padding: '5%', flexDirection: 'row' }}>

                <form onSubmit={handleSubmit}>
                    <Stack>
                        <TextField
                            autoComplete='ViewCrunch'
                            style={{ backgroundColor: '#f0f0f0' }}
                            id="input-with-icon-textfield"
                            label="Ticket Id"
                            required
                            fullWidth
                            type="number"
                            name='Ticket Id'
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            onChange={(e) => setTicket(e.target.value)}
                        />
                        <br />
                        <Button variant="contained" type="submit" style={{ width: '30% ', margin: '0 auto' }} >Submit</Button>
                    </Stack>
                </form>
                {err ? <p style={{ color: 'red', textAlign: 'left', margin: '0' }}>Provide correct TicketID</p> : null}


            </Paper>
        </Container >
    );
}



export default ViewTicketForm;
