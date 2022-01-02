import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';

const AdminLoginPage = () => {

    const theme = useTheme();
    const isWidth350 = useMediaQuery("(max-width:350px)");
    const windowheight = window.innerHeight;
    const classes = styles(theme, windowheight);

    return (<>

        <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="row"
            sx={{ ...classes.mainContainer }}
        >


            {/* SIGN IN CONTAINER */}
            <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                sx={classes.signInContainer}
                xs={isWidth350 ? 11 : 10.5} sm={8} md={5} lg={5} xl={5}
            >

                {/* SIGN UP HEADING */}
                <Grid item xs={10} sm={10} md={8} lg={10} xl={10} sx={{ ...classes.itemGridmargin }}>
                    <Typography variant="h4" fontWeight="bold" align="center" >
                        Admin Panel
                    </Typography>
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
            [theme.breakpoints.only("xs")]: {
                marginBottom: "100px"
            }
        },
        itemGridmargin: {
            marginTop: "2vh",
            marginBottom: "2vh",

        },
        iconsGeneral: {
            color: "#4d79ff"
        }
    });
};

export default AdminLoginPage;