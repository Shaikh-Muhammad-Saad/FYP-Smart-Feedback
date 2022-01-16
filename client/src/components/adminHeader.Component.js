import react, { useState } from "react";
import { AppBar, Toolbar, Grid, Typography, Button, Hidden, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { NavLink } from "react-router-dom";

const AdminHeader = () => {
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
                            justifyContent="flex-start"
                            alignItems="flex-end"
                            sm={9} md={9} lg={9} xl={9}
                        >
                            <NavLink
                                to="*"
                                activeStyle={classes.navlinksGeneral}
                                style={classes.linksGeneral}
                            >
                                <Typography variant="subtitle1" >
                                    Admin name
                                </Typography>
                            </NavLink>

                            <NavLink
                                to="*"
                                activeStyle={classes.navlinksGeneral}
                                style={classes.linksGeneral}
                            >
                                <Typography variant="subtitle1" >
                                    Previous Feedbacks
                                </Typography>
                            </NavLink>

                            <NavLink
                                to="*"
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
                            sm={3} md={3} lg={3} xl={3}
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
                                    to="/"
                                    activeStyle={classes.navlinksGeneral}
                                    style={classes.linksGeneral}
                                >
                                    <Typography variant="subtitle1" >
                                        Username
                                    </Typography>
                                </NavLink>

                                <NavLink
                                    to="/"
                                    activeStyle={classes.navlinksGeneral}
                                    style={classes.linksGeneral}
                                >
                                    <Typography variant="subtitle1" >
                                        Previous Feedbacks
                                    </Typography>
                                </NavLink>

                                <NavLink
                                    to="/"
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
            padding: "3px",
            marginLeft:"5%"
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

export default AdminHeader;