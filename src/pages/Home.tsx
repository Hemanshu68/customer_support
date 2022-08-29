import { Container, List, ListSubheader, Paper } from "@mui/material";
import { useState } from "react";
import { FAQObject, FAQS, text } from "../assets/constants";
import MyListItem from "./ListItem";


const Home = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <Container maxWidth={false} sx={{ padding: '1%' }}>
            <Paper component='div' style={{ textAlign: 'center' }} elevation={0}>
                <b>HELP & FAQ</b>
                <br />
                <b>{text}</b>
            </Paper>

            <Container maxWidth='md' sx={{ display: 'flex', justifyContent: 'left', padding: '1%', flexDirection: 'column' }} >
                <List

                    sx={{ width: '100%', bgcolor: 'background.paper', maxWidth: 'md' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component='div' id='FAQ header' style={{ margin: '0 1%', fontWeight: 'bold', fontSize: '1.5rem' }}>
                            General
                        </ListSubheader>}
                >
                    {FAQS.map((item: FAQObject, idx: number) => {

                        return (<MyListItem key={idx} {...item} />)
                    })}
                </List>
                <p style={{ textAlign: 'center' }}>Still  need Help?</p>
            </Container >

        </Container>
    );
}

export default Home;
