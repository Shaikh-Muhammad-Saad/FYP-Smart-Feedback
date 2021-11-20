import react from "react";
import { AppBar, Toolbar, Grid, Typography, Button, Hidden, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
    const theme = useTheme();
    const classes = styles(theme);
    return (<>
        <AppBar position="static">
            <Toolbar>
                <Grid
                    container
                    direction="row"
                >
                    <Hidden smUp={true}>
                        <IconButton sx={{ border:"2.5px solid white", padding:"2px", borderRadius:"8px"}} >
                            <MenuIcon sx={{color:"white"}}/>
                        </IconButton>
                    </Hidden>

                    <Hidden only="xs">
                        <Grid
                            item
                            container
                            justifyContent="space-evenly"
                            alignItems="flex-end"
                            sm={4} md={4} lg={4} xl={4}
                        >
                            <NavLink
                                to="/user"
                                activeStyle={classes.navlinksGeneral}
                                style={classes.linksGeneral}
                            >
                                <Typography variant="subtitle1" >
                                    Username
                                </Typography>
                            </NavLink>

                            <NavLink
                                to="/user-feedback"
                                activeStyle={classes.navlinksGeneral}
                                style={classes.linksGeneral}
                            >
                                <Typography variant="subtitle1" >
                                    Feedback
                                </Typography>
                            </NavLink>
                        </Grid>

                        <Grid
                            item
                            container
                            justifyContent="flex-end"
                            alignItems="center"
                            sm={8} md={8} lg={8} xl={8}
                        >
                            <Button sx={classes.logoutBtn} variant="contained">Logout</Button>
                        </Grid>
                    </Hidden>
                </Grid>
            </Toolbar>
        </AppBar>

    </>)
};


const styles = (theme) => {
    return ({
        logoutBtn: {
            background: "white",
            color: "blue",
            borderRadius: "20px",
            "&:hover": {
                background: "lightgray"
            }
        },
        linksGeneral: {
            color: "white",
            textDecoration: "none",
            padding: "3px"
        },
        navlinksGeneral: {
            color: "white",
            textDecoration: "none",
            borderBottom: "3px solid white",
        }
    });
};

export default Header;