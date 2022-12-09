import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {text} from "../text/text.js"
import Markdown from "../components/Markdown";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackButton from "../components/buttons/BackButton";
import withRoot from "../style/withRoot";
import Background from "../img/background.jpg";
import {SwipeableProductLayoutLight} from "../components/product/SwipeableProductLayout";
import theme from "../style/theme";
import SwipeableViews from "react-swipeable-views";
import Box from "@mui/material/Box";

function AboutUs() {
    return (
        <React.Fragment>
            <Header/>
            <Box sx={{minHeight: "calc(70vh)"}}>
                <SwipeableViews>
                    <SwipeableProductLayoutLight sxBackground={{
                        backgroundImage: `url(${Background})`,
                        backgroundColor: theme.palette.secondary.main,
                        backgroundPosition: 'center',
                    }}>
                        <Grid
                            item
                            xs={12}
                            md={12}
                            sx={{
                                '& .markdown': {
                                    py: 3,
                                }
                            }}
                        >
                            <Typography color="inherit" align="center" variant="h3">
                                Про компанію
                            </Typography>
                            <Typography color="inherit" variant="subtitle1">
                                <Markdown className="markdown">
                                    {text.aboutUs}
                                </Markdown>
                            </Typography>
                            <BackButton/>
                        </Grid>
                    </SwipeableProductLayoutLight></SwipeableViews>
            </Box>
            <Footer/>
        </React.Fragment>
    );
}

export default withRoot(AboutUs);