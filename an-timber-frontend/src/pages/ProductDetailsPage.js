import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Markdown from "../components/Markdown";
import {text} from "../text/text.js"
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import ContactUsPopUp from "../components/ContactUsPopUp";
import SuccessAlert from "../components/alerts/SuccessAlert";
import ErrorAlert from "../components/alerts/ErrorAlert";
import BackButton from "../components/buttons/BackButton";
import OrderButton from "../components/buttons/OrderButton";
import Box from "@mui/material/Box";
import {LinearProgress} from "@mui/material";
import withRoot from "../style/withRoot";
import Background from "../img/background.jpg";
import theme from "../style/theme";
import {SwipeableProductLayoutLight} from "../components/product/SwipeableProductLayout";
import SwipeableViews from "react-swipeable-views";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function ProductDetailsPage() {
    let { productId } = useParams();
    const [product] = useState(text.products[productId])
    const [openPopUp, setOpenPopUp] = useState(false)
    const [openSuccess, setOpenSuccess] = useState(false)
    const [openError, setOpenError] = useState(false)
    const [hiddenProgress, setHiddenProgress] = useState(true)

    return (
        <React.Fragment>
            <SuccessAlert open={openSuccess} setOpen={setOpenSuccess}
                          message={"Ваш запит відправлено у обробку"}/>
            <ErrorAlert open={openError} setOpen={setOpenError} message={"Сталася помилка"}/>
            <Header/>
            <Box sx={{width: '100%', mb: 3,}} hidden={hiddenProgress}>
                <LinearProgress color={'warning'}/>
            </Box>
            <Box sx={{minHeight: "calc(70vh)"}}>
                <SwipeableViews>
                    <SwipeableProductLayoutLight sxBackground={{
                        backgroundImage: `url(${Background})`,
                        backgroundColor: theme.palette.secondary.light,
                        backgroundPosition: 'center',
                    }}>
                        <ContactUsPopUp open={openPopUp}
                                    setOpen={setOpenPopUp}
                                    setOpenSuccess={setOpenSuccess}
                                    setOpenError={setOpenError}
                                    productTitle={product.title}
                                    setHiddenProgress={setHiddenProgress}
                    />
                        <Grid
                            item
                            xs={12}
                            md={12}
                            sx={{
                                '& .markdown': {
                                    py: 3,
                                }
                            }
                            }
                        >
                            <Grid container alignItems="center" justifyContent="space-between"
                                  sx={{p: 2, textAlign: 'left'}}
                            >
                                <Grid item lg={7} md={7} xs={12}>
                                    <Card sx={{m:1}}><CardContent>
                                    <Typography color="inherit" align="center" variant="h4">
                                        {product.title}
                                    </Typography>
                                    <Typography color="inherit" variant="subtitle1">
                                        <Markdown className="markdown">
                                            {product.desc}
                                        </Markdown>
                                    </Typography>
                                    <Box sx={{display: 'flex', width:'100%', justifyContent: 'space-evenly'}}>
                                        <OrderButton setOpenPopUp={setOpenPopUp}/>
                                        <BackButton/>
                                    </Box>
                                    </CardContent></Card>
                                </Grid>
                                <Grid
                                    item lg={5} md={5} xs={12}
                                    component="img"
                                    sx={{
                                        height: 'auto',
                                        display: 'block',
                                        maxWidth: '100%',
                                        overflow: 'hidden',
                                        width: '100%',
                                        py: 3
                                    }}
                                    src={product["details-src"]}
                                    alt={product.title}
                                />
                            </Grid>
                        </Grid>
                    </SwipeableProductLayoutLight>
                </SwipeableViews>
            </Box>
            <Footer/>
        </React.Fragment>
    );
}

export default withRoot(ProductDetailsPage);