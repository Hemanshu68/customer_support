import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, CssBaseline, Grid, InputAdornment, Paper, TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";
import imgsSrc from "../assets/auimg.jpg"


const AuthPage = () => {

    const [visible, setVisible] = useState<boolean>(false)
    return (

        <>
            <CssBaseline />
            <Box sx={{ flexGrow: 1, margin: "0", padding: '0', bgcolor: 'white' }}>
                <Grid container spacing={0} alignItems="stretch" >
                    <Grid item xs>

                        <Paper style={{ height: '93.7vh', backgroundImage: `url(${imgsSrc})`, backgroundSize: 'cover', filter: 'brightness(3)' }}>

                        </Paper>

                    </Grid>
                    <Grid item xs>
                        <Paper component='div' style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <form style={{ width: '35%' }}>
                                <Stack

                                    spacing={2}
                                    alignItems="Center"
                                    justifyContent="center"
                                >
                                    <TextField
                                        style={{ backgroundColor: '#f0f0f0' }}
                                        id="input-with-icon-textfield"
                                        label="Email"
                                        fullWidth
                                        required
                                        type="text"
                                    />
                                    <TextField
                                        style={{ backgroundColor: '#f0f0f0' }}
                                        id="input-with-icon-textfield"
                                        label="Password"
                                        fullWidth
                                        type={visible ? "text" : "password"}
                                        InputProps={{
                                            endAdornment: (
                                                < InputAdornment style={{ cursor: 'pointer' }} position="start" onClick={() => setVisible(!visible)} >
                                                    {visible ? <Visibility /> : <VisibilityOff />}
                                                </InputAdornment>
                                            )

                                        }}
                                        required
                                    />

                                    <Button variant="contained" fullWidth type="submit">Login</Button>
                                </Stack>
                            </form>
                        </Paper>

                    </Grid>
                </Grid>
            </Box >
        </>
    );
}
export default AuthPage;
