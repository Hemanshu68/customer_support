import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, CssBaseline, Grid, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useEffect, useState } from "react";
import imgsSrc from "../assets/auimg.jpg"
import { API } from "./API";
import { useCookies } from "react-cookie";
interface MyProp {
    email: string,
    password: string
}

const AuthPage = () => {

    const [visible, setVisible] = useState<boolean>(false);
    const [data, setData] = useState<MyProp>({ email: '', password: '' })
    const [err, setErr] = useState(false);
    const [cookie, setCookie, removeCookie] = useCookies(['cs-cookie'])
    const [user, setUser] = useState<any>(null);

    const formValidate = () => {
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        return regexp.test(data.email) && data.password.length > 7;
    }

    const getAcessToken = async () => {
        try {
            const res = await API.post('/auth/login', data)
            setCookie('cs-cookie', res?.data?.access_token, {
                path: '/',
                maxAge: 3600
            })

        }
        catch (err) {
            console.error(err)
            removeCookie('cs-cookie')
        }
    }
    const getUser = async () => {
        try {
            const response = await API.get('/auth/user', {
                headers: { "Authorization": `Bearer ${cookie['cs-cookie']}` }
            });
            setUser(response.data)
            localStorage.setItem('user', response.data)

        } catch (err) {
            console.error(err)
            localStorage.clear()
        }

    }
    const onSubmit = async (e: any) => {

        e.preventDefault();
        localStorage.clear()

        if (!formValidate()) {
            setErr(true);
            return;
        }
        getAcessToken();
    }


    useEffect(() => {

        if (typeof cookie['cs-cookie'] !== 'undefined') {
            getUser();
        }
    }, [cookie])

    if (user) {
        return (
            <>
                <CssBaseline />
                <Box sx={{ flexGrow: 1, margin: "0", padding: '0', bgcolor: 'white' }}>
                    <Paper sx={{ maxWidth: '50%', margin: '5% auto', textAlign: 'center', padding: '1%' }}>
                        <Typography>Already logged in as</Typography>
                        <br />
                        <Typography>{user.name}</Typography>
                        <br />
                        <Button variant="contained" type="button" onClick={() => {
                            removeCookie('cs-cookie');
                            setUser(null)
                            localStorage.clear()
                        }}> Log Out</Button>
                    </Paper>

                </Box>
            </>
        )
    }


    return (

        <>

            <Box sx={{ flexGrow: 1, margin: "0", padding: '0', bgcolor: 'white' }}>
                <Grid container spacing={0} alignItems="stretch" >
                    <Grid item xs>

                        <Paper style={{ height: '93.7vh', backgroundImage: `url(${imgsSrc})`, backgroundSize: 'cover', filter: 'brightness(3)' }}>

                        </Paper>

                    </Grid>
                    <Grid item xs>
                        <Paper component='div' style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <form style={{ width: '35%' }} onSubmit={onSubmit}>
                                <Stack

                                    spacing={2}
                                    alignItems="Center"
                                    justifyContent="center"
                                >
                                    <TextField
                                        name="email"
                                        style={{ backgroundColor: '#f0f0f0' }}
                                        id="email-textfeild"
                                        label="Email"
                                        fullWidth
                                        required
                                        type="text"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, [e.target.name]: e.target.value })}
                                    />
                                    <TextField
                                        name="password"
                                        style={{ backgroundColor: '#f0f0f0' }}
                                        id="password-textfeild"
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
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, [e.target.name]: e.target.value })}
                                    />
                                    {err ? <p style={{ color: 'red', textAlign: 'left' }}>Please provide correct input</p> : null}
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
