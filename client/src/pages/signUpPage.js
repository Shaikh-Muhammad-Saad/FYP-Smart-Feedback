import { Grid, Button, TextField, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from "react-router-dom";
import react from "react"

const SignUpPage = () => {
    const theme = useTheme();
    const isWidth350 = useMediaQuery("(max-width:350px)");
    const classes = styles(theme);

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={classes.mainContainer}>

            {/* SIGN UP CONTAINER */}
                <Grid
                    item
                    container
                    justifyContent="center"
                    alignItems="center"
                    xs={isWidth350 ? 11 : 10.5} sm={7} md={5} lg={5} xl={4}
                    sx={classes.signUpContainer}>

                    {/* SIGN UP HEADING */}
                    <Grid item xs={10} sm={10} md={8} lg={10} xl={10} sx={{ ...classes.itemGridmargin }}>
                        <Typography variant="h4" fontWeight="bold" align="center" >Sign Up</Typography>
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

                    {/* USER NAME TXT FIELD */}
                    <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="end"
                        sx={{ ...classes.itemGridmargin }}
                    >
                        <Grid item xs={isWidth350 ? 1.5 : 1} sm={1} md={1} lg={1} xl={1}>
                            <PersonIcon sx={{ ...classes.iconsGeneral }} />
                        </Grid>

                        <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                            <TextField 
                            type="email" 
                            variant="standard" 
                            fullWidth label="Username" />
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


                    {/*CONFIRM PASSWORD TXT FIELD */}
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
                            fullWidth label="Confirm password" />
                        </Grid>

                    </Grid>

                    {/* REGISTER BUTTON */}
                    <Grid item xs={10} sm={10} md={8} lg={10} xl={10} sx={{ ...classes.itemGridmargin }}>
                        <Button variant="contained" fullWidth>Register User</Button>
                        <Typography variant="subtitle2" align="center" sx={{ marginTop: "15px" }} >
                            <Link to="/home">
                                Already registerd? Signin
                            </Link>
                        </Typography>
                    </Grid>

                </Grid>
            </Grid>

        </>
    );
};


const styles = (theme) => {
    return (
        {
            mainContainer: {
                background: "#4d79ff"
            },
            signUpContainer: {
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
            }

        }
    );
};


export default SignUpPage;