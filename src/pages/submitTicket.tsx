import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, TextareaAutosize, TextField } from "@mui/material"
import logoimg from '../assets/logo.png'

const SubmitTicket = () => {
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
            <Paper component='div' style={{ display: 'flex', height: '100%', justifyContent: 'center', padding: '5%', flexDirection: 'row' }}>
                <Stack>
                    <form >
                        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <TextField
                                    style={{ backgroundColor: '#f0f0f0' }}
                                    id="input-with-icon-textfield"
                                    label="Name"
                                    required
                                    fullWidth
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    style={{ backgroundColor: '#f0f0f0' }}
                                    id="input-with-icon-textfield"
                                    label="Email"
                                    required
                                    fullWidth
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl required fullWidth>
                                    <InputLabel id="issue-type">Issue Type</InputLabel>
                                    <Select
                                        labelId="issueType"
                                        id="issue-type"
                                        value={"age"}
                                        label="Age *"
                                    // onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={"Payment"}>Payment</MenuItem>
                                        <MenuItem value={"Quality"}>Quality</MenuItem>
                                        <MenuItem value={"Other"}>Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    aria-label="Description"
                                    minRows={6}
                                    placeholder="Describe the issue"
                                    required
                                    style={{ resize: 'none', width: '100%' }}
                                />
                            </Grid>

                        </Grid>
                        <br />
                        <br />

                    </form>
                    <Button variant="contained" type="submit" style={{ width: '30% ', margin: '0 auto' }}>Submit</Button>
                </Stack>
            </Paper>
        </Container >
    );
}



export default SubmitTicket
