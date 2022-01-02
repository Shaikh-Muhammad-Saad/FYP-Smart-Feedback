import react from "react";
import { Grid, Typography, Button, TextField } from "@mui/material";
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Header from "../components/header.Component.js"
import StarRatingComponent from "../components/starRating.Component.js";

const FeedBackPage = (props) => {
    const theme = useTheme();
    const classes = styles(theme);
    return (<>
        <Header />
        <br />
        <Grid container justifyContent="space-evenly">

            <Grid
                item
                xs={11} sm={11} md={5.5} lg={5} xl={5}
            >
                <StarRatingComponent question="Did we meet your expactations?" />
                <StarRatingComponent question="How would you rate your interaction with Our employees?" />
                <StarRatingComponent question="How do you rate the variety of options on the menu?" />
                <StarRatingComponent question="How would you rate the quality of the food at our restaurant?" />
                <StarRatingComponent question="How Would you rate the friendlyness of our staff?" />
                <StarRatingComponent question="How were the drinks and beverages?" />
                <StarRatingComponent question="How much did you enjoy your visit?" />
            </Grid>

            <Grid
                item
                xs={11} sm={11} md={5.5} lg={5} xl={5}
                sx={classes.textFieldGrid}
            >
                <Typography variant="h6">
                    Share your feedback
                </Typography>

                <TextField
                    fullWidth
                    multiline
                    rows={10}
                    placeholder="write here..."
                    sx={{ ...classes.xSpacing15, background: "#f2f2f2" }}
                />
                <Button variant="contained">Submit</Button>

            </Grid>

        </Grid>
    </>)
};


const styles = (theme) => {
    return ({
        dividerGeneral: {
            margin: "10px", "&.MuiDivider-root": { borderColor: "#c3c3c3" }
        },
        textFieldGrid: {
            [theme.breakpoints.down("md")]: { marginTop: '50px' }
        },
        xSpacing15: {
            marginTop: "15px",
            marginBottom: "15px"
        }
    });
};

export default FeedBackPage;