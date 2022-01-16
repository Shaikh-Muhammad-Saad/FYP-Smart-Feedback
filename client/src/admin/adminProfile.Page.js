import React from "react";
import { Grid, Typography, Button, Divider } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from ".././components/header.Component"

const AdminProfilePage = () => {

    const theme = useTheme();
    const classes = styles(theme);
    const isXS = useMediaQuery(theme.breakpoints.only("xs"));

    return (<>
        <Header />
        <br />
        <br />
        <Grid container justifyContent="center" >
            <Grid
                item
                container
                justifyContent="center"
               xs={7} sm={5} md={3} lg={3} xl={3}
            >
                <img src="/assets/userImage.jpg" width="60%" style={classes.userImage} />
            </Grid>

            <Grid item sm={2} md={1} lg={1} xl={1} sx={{display: isXS? "none": "block"}}>
                <Divider orientation="vertical" sx={classes.divider}>
                    Details
                </Divider>
            </Grid>

            <Grid
                item
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                xs={10} sm={5} md={5} lg={5} xl={5}
                sx={classes.userDetailsMainContainer}
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
                    <Button variant="contained"  sx={{ background: "#4d79ff" }}>
                        <Typography variant="caption">
                            Change
                        </Typography>
                    </Button>
                </Grid>

            </Grid>
        </Grid>
    </>);
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
        userDetailsMainContainer:{
            [theme.breakpoints.only("xs")]:{
                marginTop:"20px"
            }
        },
        
    });
};


export default AdminProfilePage;