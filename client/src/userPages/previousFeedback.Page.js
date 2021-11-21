import react from "react";
import { AppBar, Toolbar, Grid, Typography, Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Link, NavLink } from "react-router-dom";
import Header from "../components/header.Component.js"

const PreviousFeedback = (props) => {
    const theme = useTheme();
    const classes = styles(theme);
    return (<>
        <Header />
        <center>
            <h1>previous feedback  page</h1>
        </center>

    </>)
};


const styles = (theme) => {
    return ({

    });
};

export default PreviousFeedback;