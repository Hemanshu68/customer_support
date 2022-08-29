
import { Button, Dialog, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';



const MyDialog = (props: any) => {
    const { isOpen, ticketId, setIsOpen } = props;

    return (
        <div>
            <Dialog
                onClose={() => setIsOpen(false)}
                aria-labelledby="customized-dialog-title"
                open={isOpen}
            >
                <DialogContent dividers sx={{ padding: '15% 5%', textAlign: 'center' }}>
                    <CheckRoundedIcon style={{ color: 'green' }} /><Typography gutterBottom>
                        Your Ticket Id for furthere reference is <strong>{`${ticketId}`}</strong>
                    </Typography>
                    <br />
                    <Button variant='contained' onClick={() => setIsOpen(false)}>Okay</Button>
                </DialogContent>

            </Dialog>
        </div>
    );
}

export default MyDialog;
