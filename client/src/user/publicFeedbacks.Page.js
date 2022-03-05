import React from "react"
import { Grid, Typography } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import PublicFeedbackCard from "../components/publicFeedbackCard.Component"

const PublicFeedbacksPage = () => {

    const theme = useTheme();
    const isWidth350 = useMediaQuery("(max-width:350px)");
    const windowheight = window.innerHeight;
    const classes = styles(theme, windowheight);

    const maping = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    return (
        <>
            <Grid container sx={classes.mainContainer}>

                <Grid
                    item
                    xs={11} sm={11} md={11} lg={11} xl={11}
                    sx={classes.heading}
                >
                    <Typography variant="h4">
                        Public Reviews on ABC... Company
                    </Typography>
                </Grid>

                {
                    maping.map((val, index) => {
                        return (
                            <>
                                <Grid
                                    key={index}
                                    item
                                    xs={11.5} sm={11} md={5.5} lg={5.5} xl={5.5}
                                    sx={{ ml: "2%" }}
                                >
                                    <PublicFeedbackCard />
                                </Grid>
                            </>
                        );
                    })
                }


            </Grid>
        </>
    );
}

const styles = (theme, windowheight) => {
    return ({
        mainContainer: {
            background: "#e6e6e6",
        },
        heading: {
            p: "4%",
        }
    });
};



export default PublicFeedbacksPage;