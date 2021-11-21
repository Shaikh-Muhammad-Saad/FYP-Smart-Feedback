import react from "react";
import { AppBar, Toolbar, Grid, Typography, Button, Divider } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Link, NavLink } from "react-router-dom";
import Header from "../components/header.Component.js"

const UserPage = (props) => {
    const theme = useTheme();
    const classes = styles(theme);
    return (<>
        <Header />
        <br />
        <br />
        {/* USER DETAILS GRID */}
        <Grid container justifyContent="center" >
            <Grid
                item
                container
                justifyContent="center"
                sm={4} md={3} lg={3} xl={3}
            >
                <img src="/assets/userImage.jpg" width="60%" style={classes.userImage} />
            </Grid>

            <Grid item sm={2} md={1} lg={1} xl={1} >
                <Divider orientation="vertical" sx={classes.divider}>
                    Details
                </Divider>
            </Grid>

            <Grid
                item
                container
                direction="column"
                justifyContent="center"
                alignItems=""
                sm={5} md={5} lg={5} xl={5}
            >

                <Grid item container direction="row" sx={classes.useerDetailsGrid}>
                    <Typography variant="body1" >First Name:</Typography>
                    <Typography variant="body1" sx={classes.userDetailsGeneral} >USERNAME</Typography>
                </Grid>

                <Grid item container direction="row" sx={classes.useerDetailsGrid} >
                    <Typography variant="body1" >Last Name:</Typography>
                    <Typography variant="body1" sx={classes.userDetailsGeneral}>USERNAME</Typography>
                </Grid>

                <Grid item container direction="row" sx={classes.useerDetailsGrid}>
                    <Typography variant="body1" >Email:</Typography>
                    <Typography variant="body1" sx={classes.userDetailsGeneral}>USER EMAIL</Typography>
                </Grid>

                <Grid item container direction="row" sx={classes.useerDetailsGrid}>
                    <Button variant="contained" sx={{ background: "#4d79ff" }}>
                        <Typography variant="caption">
                            Change
                        </Typography>
                    </Button>
                </Grid>

            </Grid>
        </Grid>

        <br />
        <br />
        <Divider sx={classes.divider} variant="middle" />
        <br />
        <br />
        <Grid container justifyContent="center" >

            <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                <Typography variant="h5" fontWeight="bold" align="center">
                    Time Remaining For Next Feedback
                </Typography>
            </Grid>
            
            <Grid item xs={8} sm={5.5} md={4} lg={4} xl={4} sx={classes.timeRemainingGrid}>
                <Typography variant="h4" fontWeight="bold" align="center">
                    13hr 23m 54s
                </Typography>
            </Grid>
        </Grid>

    </>)
};


const styles = (theme) => {
    return ({
        userImage: {
            borderRadius: "50%", 
            border: "10px solid #4d79ff", 
            padding: "3px"
        },
        divider: {
            "& .MuiDivider-wrapper": { color: "#737373" },
            "&.MuiDivider-root:before": { borderColor: "#B8B8B8" },
            "&.MuiDivider-root:after": { borderColor: "#B8B8B8" },
        },
        userDetailsGeneral: {
            marginLeft: "15px"
        },
        useerDetailsGrid: {
            marginY: "10px"
        },
        timeRemainingGrid:{ 
            padding: "30px", 
            background: "#4d79ff", 
            borderRadius: "20px", 
            color: "white", 
            marginTop:"10px" }
    });
};

export default UserPage;