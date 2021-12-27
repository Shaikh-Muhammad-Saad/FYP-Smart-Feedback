import { Grid, Typography } from "@mui/material";

const PreviousFeedbacksCard = (props) => {

    const classes = styles();

    const date = "09-12-2021";
    const rating = 4;
    const feedback = "this is some dummy text to show the user feed back and for the testing of user Interface this is some dummy text to show the user feed back and for the testing of user Interface this is some dummy text to show the user feed back and for the testing of user Interface";

    return (<>
        <Grid
            container
            justifyContent="center"
            sx={classes.conatiner}
        >

            {/* Date/rating container */}
            <Grid
                item
                container
                justifyContent="start"
                xs={11} sm={11} md={11} lg={11} xl={11}
                sx={{ ...classes.date_RatingContainer }}
            >
                <Typography color="white" variant="subtitle1">
                    Date: {date}
                </Typography>

                <Typography color="white" variant="subtitle1" sx={{marginLeft:"3%"}}>
                    Rating: {rating}/5
                </Typography>
            </Grid>

            {/* Feedback container */}
            <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
                <Typography color="white" variant="subtitle1" >
                    {feedback}
                </Typography>
            </Grid>

        </Grid>
    </>);
};

const styles = () => ({
    conatiner: {
        background: "#4d79ff",
        borderRadius: "15px",
        marginTop: "25px"
    },
    date_RatingContainer: {
        marginTop: "8px",
        marginBottom: "10px",
    }
});

export default PreviousFeedbacksCard;