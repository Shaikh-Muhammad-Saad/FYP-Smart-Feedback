import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Switch from '@mui/material/Switch';
import Header from "../components/header.Component"
import { style } from "@mui/system";

const AdminFeedbacksPage = () => {

    const classes = styles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<>
        <Header />
        <br />
        <br />
        <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={classes.secondaryNav}>

            <Grid
                item
                xs={11} sm={6} md={6} lg={6} xl={6}
            >
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{ background: "#d9d9d9" }}
                >
                    <Typography>Sort By</Typography>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Date</MenuItem>
                    <MenuItem onClick={handleClose}>Rating</MenuItem>
                </Menu>
            </Grid>

            <Grid
                item
                container
                justifyContent="flex-end"
                xs={11} sm={6} md={6} lg={6} xl={6}
            >
                <Typography>
                    Show Feedbacks to public
                    <Switch />
                </Typography>
            </Grid>

        </Grid>
    </>);
};

const styles = () => ({
    secondaryNav: {
        // height: "50px",
        background: "#f2f2f2"
    }
});

export default AdminFeedbacksPage;