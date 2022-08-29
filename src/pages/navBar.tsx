
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='sticky'>
                <Toolbar sx={{ justifyContent: 'end', alignContent: 'space-around' }}>
                    <Button component={Link} to="" color="inherit" >Home</Button>
                    <Button component={Link} to="login" color="inherit" >Login</Button>
                    <Button component={Link} to="register-complain" color='inherit' >Create Ticket</Button>
                    <Button component={Link} to="ticket" color='inherit' >Track Ticket</Button>

                    <Button component={Link} to="docs" color='inherit' >Api</Button>
                    <Button component={Link} to="all" color='inherit' >ALl Ticket</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
