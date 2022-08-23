import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, Container, Divider, ListItemButton, ListItemText } from "@mui/material";
import { FC, useState } from "react";
import { FAQObject } from "../assets/constants";

const MyListItem: FC<FAQObject> = ({ Q, A }: FAQObject): JSX.Element => {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Container style={{ margin: '10px 0' }}>
            <Divider />
            <ListItemButton onClick={handleClick} >

                <ListItemText primary={`Q.${Q}`} style={{ fontWeight: 'bolder', color: open ? 'green' : 'black' }} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit style={{ padding: '0 20px' }}>
                <ListItemText primary={`A.${A}`} />
            </Collapse>

        </Container>
    );
}

export default MyListItem;
