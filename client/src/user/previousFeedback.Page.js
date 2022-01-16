import react from "react";
import { Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Header from "../components/header.Component"
import FeedbacksCard from "../components/feedbackCard.Compnent"

const PreviousFeedbackPage = (props) => {
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
                <FeedbacksCard />
                <FeedbacksCard />
                <FeedbacksCard />
                <FeedbacksCard />
                <FeedbacksCard />
                <FeedbacksCard />
                <FeedbacksCard />
                <FeedbacksCard />
                <FeedbacksCard />
                <FeedbacksCard />
                <FeedbacksCard />
                <FeedbacksCard />
            </Grid>

        </Grid>

    </>)
};


const styles = (theme) => {
    return ({

    });
};

export default PreviousFeedbackPage;