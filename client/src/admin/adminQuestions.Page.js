import React from "react"
import { Grid, Typography, TextField, Button } from "@mui/material"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import QuestionCardComponent from "../components/questionCard.Component"
import Header from "../components/header.Component"

const AdminQuestionsPage = () => {
    const theme = useTheme();
    const classes = styles(theme);
    const isXS = useMediaQuery(theme.breakpoints.only("xs"));

    return (<>
        <Header />
        <Grid container justifyContent={"end"} sx={classes.addContainer}>

            <Grid item sx={classes.addHeading} xs={11.5} sm={11.5} md={11.5} lg={11.5} xl={11.5}>
                <Typography variant="body1">Add a question</Typography>
            </Grid>

            <Grid item container direction={isXS ? "column" : "row"} alignItems={isXS ? "start" : ""} xs={11.5} sm={11.5} md={11.5} lg={11.5} xl={11.5}>
                <TextField type="text" multiline rows={isXS ? 4 : 1} sx={classes.addTextField} size="small" label="Add question" variant="outlined" />
                <Button variant="contained" size="medium" sx={classes.addBtn}>Add</Button>
            </Grid>

        </Grid>

        <Grid container sx={classes.questionsContainer}> 

            <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5} xl={0.5} />

            <Grid item xs={11} sm={8} md={8} lg={8} xl={8}>
                <QuestionCardComponent question="How would you rate the quality of the food at our restaurant? How would you rate the quality of the food at our restaurant?" />
                <QuestionCardComponent question="How would you rate the quality of the food at our restaurant? How would you rate the quality of the food at our restaurant? How would you rate the quality of the food at our restaurant? How would you rate the quality of the food at our restaurant?" />
                <QuestionCardComponent question="How would you rate the quality of the food at our restaurant?" />
                <QuestionCardComponent question="How would you rate the quality of the food at our restaurant?" />
                <QuestionCardComponent question="How would you rate the quality of the food at our restaurant?" />
                <QuestionCardComponent question="How would you rate the quality of the food at our restaurant?" />
            </Grid>

        </Grid>
    </>);
};

const styles = () => {
    return ({
        addContainer: {
            mt: { xs: "20px", sm: 5, md: 5, lg: 5, xl: 5 }
        },
        addBtn: {
            ml: "0.5%",
            mt: { xs: "5px", sm: 0, md: 0, lg: 0, xl: 0 }
        },
        addHeading: {
            mb: { xs: "8px", sm: "15px", md: "15px", lg: "15px", xl: "15px" }
        },
        addTextField: {
            width: { xs: "70%", sm: "50%", md: "50%", lg: "50%", xl: "50%" }
        },
        questionsContainer:{
            mt:{ xs: 5, sm: 7, md: 7, lg: 7, xl: 7 }
        }
    })
};
export default AdminQuestionsPage;