
import { AppBar, Box, Button, Toolbar } from '@mui/material';

const navBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='sticky'>
                <Toolbar sx={{ justifyContent: 'end', alignContent: 'space-around' }}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Login</Button>
                    <Button color='inherit'>Create Ticket</Button>
                    <Button color='inherit'>Api</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default navBar;
