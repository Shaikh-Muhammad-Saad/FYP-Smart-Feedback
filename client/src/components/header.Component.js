import react, { useState } from "react";
import { AppBar, Toolbar, Grid, Typography, Button, Hidden, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
    const theme = useTheme();
    const classes = styles(theme);
    const [dropDownMenu, setDropDownMenu] = useState(false);
    console.log(dropDownMenu);
    return (<>
        <AppBar position="static">
            <Toolbar>



                {/* desktop size menu bar */}
                <Hidden only="xs">
                    <Grid
                        container
                        direction="row"
                    >
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
                            <Button sx={classes.logoutBtn} variant="contained">
                                <Typography variant="caption">
                                    Logout
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Hidden>



                {/* Mobile size menu bar */}
                <Hidden smUp={true}>
                    <Grid container direction="column">

                        <Grid item sx={{ marginTop: dropDownMenu ? "12px" : 0 }}>
                            <IconButton
                                onClick={() => setDropDownMenu(!dropDownMenu)}
                                sx={classes.menuIconButton} >
                                <MenuIcon sx={{ color: "white" }} />
                            </IconButton>
                        </Grid>

                        <Grid item container direction="column" sx={{ marginY: "10px", display: dropDownMenu ? "block" : "none" }}>
                            <Grid
                                item
                                container
                                direction="column"
                                justifyContent="space-evenly"
                                alignItems="flex-start"
                                sx={{ marginBottom: "30px", marginTop: "10px" }}
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
                                justifyContent="flex-strat"
                                alignItems="center"
                            >
                                <Button sx={classes.logoutBtn} variant="contained">
                                    <Typography variant="caption">
                                        Logout
                                    </Typography>
                                </Button>
                            </Grid>

                        </Grid>
                    </Grid>
                </Hidden>

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
        },
        menuIconButton: {
            border: "2.5px solid white",
            padding: "2px",
            borderRadius: "8px",
        }
    });
};

export default Header;