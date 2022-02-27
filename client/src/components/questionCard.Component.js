import React from "react"
import { Grid, Typography, TextField, Button } from "@mui/material"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const QuestionCardComponent = ({ question }) => {
    const theme = useTheme();
    const classes = styles(theme);
    const isXS = useMediaQuery(theme.breakpoints.only("xs"));

    return (<>
        <Grid container sx={classes.container}>

            <Grid item>
                <Typography >{question}</Typography>
            </Grid>

            <Grid item container>
                <Button variant="contained" sx={{ ...classes.editBtn }}>Edit</Button>
                <Button sx={{ ...classes.deleteBtn }}>Delete</Button>
            </Grid>

        </Grid>
    </>);
};

const styles = () => {
    return ({
        container:{
            border:"3px solid #4d79ff",
            p:"20px",
            borderRadius:"30px",
            mb:{ xs: "10px", sm: "15px", md: "15px", lg: "15px", xl: "15px" }
        },
        deleteBtn: {
            background: "#ff3333",
            padding: "2px",
            color: "white",
            margin: "10px",
            marginLeft: "0px",
            border: "2px solid #ff3333",
            "&:hover": { border: "2px solid white" , color:"red"}
        },
        editBtn: {
            // background: "white",
            padding: "2px",
            // border: " 2px solid lightblue",
            margin: "10px",
            marginLeft: "0px",
            "&:hover": {
                color: "white", 
            }
        },
    })
};
export default QuestionCardComponent;