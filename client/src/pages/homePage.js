import { Grid, Typography, TextField, Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import useMediaQuery from '@mui/material/useMediaQuery';
// import feedbackstars from "../../public/assets/"
import React from "react";
import { Link } from "react-router-dom"


const HomePage = () => {
    const theme = useTheme();
    const isWidth350 = useMediaQuery("(max-width:350px)");
    const windowheight = window.innerHeight;
    const classes = styles(theme, windowheight);

    return (<>
        <Grid container sx={{ ...classes.mainContainer }}>

            {/* 1ST GRID */}
            <Grid
                item
                container
                flexDirection="column"
                justifyContent='center'
                alignItems="start"
                sx={{ ...classes.headingsContainer }}
                xs={12} sm={12} md={6} lg={6} xl={6}
            >

                <Typography variant="h2" sx={classes.headingsGeneral}>
                    ABC... Comapany
                </Typography>

                <Typography variant="h4" sx={classes.headingsGeneral}>
                    FeedBack Portal
                </Typography>

                <Typography variant="h6" sx={classes.headingsGeneral}>
                    Want to share your point of view? We value your feedback
                </Typography>

                <img width="50%" src="assets/feedbackstars.png" style={{marginLeft: "15%",}} />
            </Grid>

            {/* 2ND GRID */}
            <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                xs={12} sm={12} md={6} lg={6} xl={6}
            >

                {/* SIGN IN CONTAINER */}
                <Grid
                    item
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={classes.signInContainer}
                    xs={isWidth350 ? 11 : 10.5} sm={8} md={8} lg={7} xl={7}
                >

                    {/* SIGN UP HEADING */}
                    <Grid item xs={10} sm={10} md={8} lg={10} xl={10} sx={{ ...classes.itemGridmargin }}>
                        <Typography variant="h4" fontWeight="bold" align="center" >Sign In</Typography>
                    </Grid>

                    {/* EMAIL TXT FIELD */}
                    <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="end"
                        sx={{ ...classes.itemGridmargin }}
                    >
                        <Grid item xs={isWidth350 ? 1.5 : 1} sm={1} md={1} lg={1} xl={1}>
                            <EmailIcon sx={{ ...classes.iconsGeneral }} />
                        </Grid>

                        <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                            <TextField type="email" variant="standard" fullWidth label="E-mail" />
                        </Grid>

                    </Grid>

                    {/* PASSWORD TXT FIELD */}
                    <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="end"
                        sx={{ ...classes.itemGridmargin }}
                    >
                        <Grid item xs={isWidth350 ? 1.5 : 1} sm={1} md={1} lg={1} xl={1}>
                            <LockIcon sx={{ ...classes.iconsGeneral }} />
                        </Grid>

                        <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                            <TextField
                                type="password"
                                variant="standard"
                                fullWidth
                                label="Password" />
                        </Grid>

                    </Grid>

                    {/* REGISTER BUTTON */}
                    <Grid item xs={10} sm={10} md={8} lg={10} xl={10} sx={{ ...classes.itemGridmargin }}>
                        <Button variant="contained" fullWidth>Sign In</Button>
                    </Grid>

                </Grid>

            </Grid>
        </Grid>

    </>);
};

const styles = (theme, windowheight) => {
    return ({
        mainContainer: {
            background: "#4d79ff",
            height: windowheight
        },
        signInContainer: {
            background: "white",
            borderRadius: "15px",
            marginTop: "10vh",
            marginBottom: "10vh"
        },
        itemGridmargin: {
            marginTop: "3vh",
            marginBottom: "3vh",

        },
        iconsGeneral: {
            color: "#4d79ff"
        },
        headingsContainer: {
            [theme.breakpoints.down("md")]: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "-40px"
            }
        },
        headingsGeneral: {
            color: "white",
            fontWeight: "bold",
            marginLeft: "15%",
            [theme.breakpoints.down("md")]: { marginLeft: 0 }
        }
    });
};


export default HomePage;