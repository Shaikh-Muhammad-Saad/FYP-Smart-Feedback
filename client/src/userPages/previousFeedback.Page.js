import react from "react";
import { AppBar, Toolbar, Grid, Typography, Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Link, NavLink } from "react-router-dom";
import Header from "../components/header.Component.js"
import PreviousFeedbacksCard from "../components/previousFeedbacksCard.Compnent.js"

const PreviousFeedback = (props) => {
    const theme = useTheme();
    const classes = styles(theme);
    return (<>
        <Header />
        <Grid 
        container
        sx={{marginLeft:"4%"}}
        >

            <Grid 
            item 
            xs={11} sm={9} md={7} lg={7} xl={7}
            sx={{marginTop:"20px"}}
            >
                <Typography variant="h4">
                    Previous Feedbacks
                </Typography>
            </Grid>

            <Grid
                item
                xs={11} sm={9} md={9} lg={9} xl={9}
            >
                <PreviousFeedbacksCard />
                <PreviousFeedbacksCard />
                <PreviousFeedbacksCard />
                <PreviousFeedbacksCard />
                <PreviousFeedbacksCard />
                <PreviousFeedbacksCard />
                <PreviousFeedbacksCard />
                <PreviousFeedbacksCard />
                <PreviousFeedbacksCard />
                <PreviousFeedbacksCard />
                <PreviousFeedbacksCard />
                <PreviousFeedbacksCard />
            </Grid>

        </Grid>

    </>)
};


const styles = (theme) => {
    return ({

    });
};

export default PreviousFeedback;