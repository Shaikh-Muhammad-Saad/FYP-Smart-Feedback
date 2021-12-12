import react from "react";
import { AppBar, Toolbar, Grid, Typography, Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Link, NavLink } from "react-router-dom";
import Header from "../components/header.Component.js"
import StarRatingComponent from "../components/starRating.Component.js";

const FeedBackPage = (props) => {
    const theme = useTheme();
    const classes = styles(theme);
    return (<>
        <Header />
        <Grid container>

            <Grid item>
                <StarRatingComponent question="Did we meet your expactations?" />
                <StarRatingComponent question="How would you rate your interaction with Our employees?" />
                <StarRatingComponent question="How do you rate the variety of options on the menu?" />
                <StarRatingComponent question="How would you rate the quality of the food at our restaurant?" />
                <StarRatingComponent question="How Would you rate the friendlyness of our staff?" />
                <StarRatingComponent question="How were the drinks and beverages?" />
                <StarRatingComponent question="How much did you enjoy your visit?" />
            </Grid>

            <Grid item></Grid>

        </Grid>
    </>)
};


const styles = (theme) => {
    return ({

    });
};

export default FeedBackPage;