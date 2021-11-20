import react from "react";
import { AppBar, Toolbar, Grid, Typography, Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Link, NavLink } from "react-router-dom";
import Header from "../components/header.Component.js"

const UserFeedBackPage = (props) => {
    const theme = useTheme();
    const classes = styles(theme);
    return (<>
        <Header />
        <center>
            <h1>user feed back page</h1>
        </center>

    </>)
};


const styles = (theme) => {
    return ({

    });
};

export default UserFeedBackPage;