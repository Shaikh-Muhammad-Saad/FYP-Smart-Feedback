import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Switch from '@mui/material/Switch';
import Header from "../components/header.Component"
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';

const AdminFeedbacksPage = () => {

    const theme = useTheme();
    const classes = styles(theme);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [rating, setRating] = React.useState();
    const [day, setDay] = React.useState();
    const [date, setDate] = React.useState(null);
    console.log(date)
    console.log(rating)
    console.log(day);

    // sorting dropdown
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
            sx={classes.secondaryNav}
        >

            <Grid
                item
                container
                justifyContent="center"
                xs={12} sm={5} md={5} lg={5} xl={5}
                sx={classes.showPublicFeedBacksContainer}
            >
                <Typography>
                    Show Feedbacks to public
                    <Switch />
                </Typography>
            </Grid>

            <Grid
                item
                container
                justifyContent="center"
                xs={12} sm={4} md={4} lg={4} xl={4}
                sx={classes.sortingContainer}
            >
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{ background: "#d9d9d9", width: "150px", color: "black" }}
                >
                    <Typography >Sort By</Typography>
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
                    <MenuItem onClick={handleClose}>Sort By Date</MenuItem>
                    <MenuItem onClick={handleClose}>Sort By Rating</MenuItem>
                    <MenuItem onClick={handleClose}>Latest Feedbacks</MenuItem>
                </Menu>
            </Grid>
        </Grid>

        {/* searching Grid */}
        <Grid
            container
            sx={classes.searchingContainer}
        >

            {/* Date Picker */}
            <Grid
                item
                container
                justifyContent={"start"}
                alignItems={"center"}
                xs={12} sm={12} md={12} lg={12} xl={12}
                sx={classes.DatePickerGrid}
            >
                <TextField
                    id="date"
                    label="Sort By Date"
                    type="date"
                    defaultValue={date}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{...classes.datePicker,display:"none" }}
                    onChange={(e) => setDate(e.target.value)}
                />

                {/* Rating Box */}
                <Box sx={{...classes.ratingBox,display:"none" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Rating</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={rating}
                            label="Select Rating"
                            onChange={(e)=>setRating(e.target.value)}
                        >
                            <MenuItem value={1}>1 Star</MenuItem>
                            <MenuItem value={2}>2 Star</MenuItem>
                            <MenuItem value={3}>3 Star</MenuItem>
                            <MenuItem value={4}>4 Star</MenuItem>
                            <MenuItem value={5}>5 Star</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* latest Feedbacks search */}
                <Box sx={{...classes.latestFeedbacks}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Day</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={day}
                            label="Select day"
                            onChange={(e)=>setDay(e.target.value)}
                        >
                            <MenuItem value={1}>1 day ago</MenuItem>
                            <MenuItem value={2}>2 day ago</MenuItem>
                            <MenuItem value={3}>3 day ago</MenuItem>
                            <MenuItem value={4}>4 day ago</MenuItem>
                            <MenuItem value={5}>5 day ago</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* Search Button */}
                <Button variant="contained" sx={classes.searchBtn}>
                    search
                </Button>
            </Grid>



        </Grid>


    </>);
};

const styles = (theme) => ({
    secondaryNav: {
        // height: "50px",
        background: "#f2f2f2"
    },
    showPublicFeedBacksContainer: {
        [theme.breakpoints.only("xs")]: {
            paddingLeft: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
        }

    },
    sortingContainer: {
        [theme.breakpoints.only("xs")]: {
            paddingLeft: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
        }
    },
    searchingContainer: {
        background: "#f2f2f2",
        marginTop: "15px",
        paddingTop: "15px",
        paddingBottom: "15px",
    },
    searchBtn: {
        height: "50px",
        marginLeft: "1%",
        [theme.breakpoints.only("xs")]: { marginTop: "5px" }
    },
    DatePickerGrid: {
        marginLeft: "5%",
        [theme.breakpoints.only("xs")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "start"
        }
    },
    datePicker: {
        width: { xs: "80%", sm: "30%" }
    },
    ratingBox:{
        width:{xs: "40%", sm: "30%"}
    },
    latestFeedbacks:{
        width:{xs: "45%", sm: "30%"}
     }

});

export default AdminFeedbacksPage;