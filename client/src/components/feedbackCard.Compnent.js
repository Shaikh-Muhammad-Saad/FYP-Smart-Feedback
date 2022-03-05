import { Grid, Typography, Button } from "@mui/material";
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';




const FeedbacksCard = (props) => {
    const theme = useTheme();
    const isWidth400px = useMediaQuery("(max-width:400px)");
    const classes = styles(theme);

    const date = "09-12-2021";
    const rating = 4;
    const feedback = "this is some dummy text to show the user feed back and for the testing of user Interface this is some dummy text to show the user feed back and for the testing of user Interface this is some dummy text to show the user feed back and for the testing of user Interface";
    const role = "user"
    const userName = "Shaikh Muhammad Saad"
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

                <Typography color="white" variant="subtitle1" sx={{ marginLeft: "3%" }}>
                    Rating: {rating}/5
                </Typography>
            </Grid>




            {/* divider */}
            <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
                <Divider sx={{ ...classes.dividerGeneral }} />
            </Grid>

            {/* user-name container */}
            <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
                <Typography color="white" variant="subtitle1" sx={{ fontWeight: "bold", mb:1 }} >
                    @{userName}
                </Typography>
            </Grid>

            {/* Feedback container */}
            <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
                <Typography color="white" variant="subtitle1" >
                    {feedback}
                </Typography>
            </Grid>

            <Grid
                item
                container
                xs={11} sm={11} md={11} lg={11} xl={11}
                sx={classes.btnsGrid}
                justifyContent={isWidth400px ? "center" : null}
            >

                {role !== "admin" ? (
                    <Button sx={{ ...classes.editBtn }}>
                        Edit
                    </Button>
                ) : null}

                <Button sx={{ ...classes.deleteBtn }}>
                    Delete
                </Button>
            </Grid>

        </Grid>
    </>);
};

const styles = (theme) => ({
    conatiner: {
        background: "#4d79ff",
        borderRadius: "10px",
        marginTop: "25px"
    },
    date_RatingContainer: {
        marginTop: "8px",
        marginBottom: "5px",
    },
    dividerGeneral: {
        margin: "5px",
        marginBottom: "10px",
        "&.MuiDivider-root": { borderColor: "white" },
    },
    editBtn: {
        background: "white",
        padding: "2px",
        border: " 2px solid white",
        margin: "10px",
        marginLeft: "0px",
        "&:hover": {
            color: "white",
        }
    },
    deleteBtn: {
        background: "#ff3333",
        padding: "2px",
        color: "white",
        margin: "10px",
        marginLeft: "0px",
        border: "2px solid #ff3333",
        "&:hover": { border: "2px solid white" }
    },
    btnsGrid: {
        // [theme.breakpoints.only("xs")]: {
        //     display:"flex",
        //     justifyContent:"center",
        //     alignItems:"center",
        //     margin:"15px"
        // }
    }
});

export default FeedbacksCard;