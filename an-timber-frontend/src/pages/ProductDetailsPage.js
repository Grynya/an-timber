import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Markdown from "../components/Markdown";
import {text} from "../text/text.js"
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useState} from "react";
import {useLocation} from "react-router-dom";
import ContactUsPopUp from "../components/ContactUsPopUp";
import SuccessAlert from "../components/alerts/SuccessAlert";
import ErrorAlert from "../components/alerts/ErrorAlert";
import {theme} from "../style/theme";
import BackButton from "../components/buttons/BackButton";
import Divider from "@mui/material/Divider";
import OrderButton from "../components/buttons/OrderButton";
import Box from "@mui/material/Box";
import {LinearProgress} from "@mui/material";

export default function ProductDetailsPage() {
    const {state} = useLocation();
    const [product] = useState(text.products[state.productIdx])
    const [openPopUp, setOpenPopUp] = useState(false)
    const [openSuccess, setOpenSuccess] = useState(false)
    const [openError, setOpenError] = useState(false)
    const [hiddenProgress, setHiddenProgress] =  useState(true)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            <Container maxWidth="lg" sx={{minHeight: "calc(80vh)"}}>
                <main>
                    <ContactUsPopUp open={openPopUp}
                                    setOpen={setOpenPopUp}
                                    setOpenSuccess={setOpenSuccess}
                                    setOpenError={setOpenError}
                                    productTitle={product.title}
                                    setHiddenProgress={setHiddenProgress}
                    />
                    <SuccessAlert open={openSuccess} setOpen={setOpenSuccess} message={"Ваш запит відправлено у обробку"}/>
                    <ErrorAlert open={openError} setOpen={setOpenError} message={"Сталася помилка"}/>
                    <Box sx={{ width: '100%', mb:3}} hidden={hiddenProgress}>
                        <LinearProgress color={'primary'}/>
                    </Box>
                    <BackButton/>
                    <Grid container spacing={5} sx={{mt: 1}}>
                        <Grid
                            item
                            xs={12}
                            md={12}
                            sx={{
                                '& .markdown': {
                                    py: 3,
                                },
                            }}
                        >
                            <Typography variant="h5" gutterBottom>
                                <Markdown>{product.title}</Markdown>
                            </Typography>
                            <Divider color="primary" sx={{borderBottomWidth: 1}}/>
                            <Grid container alignItems="center" justifyContent="space-between"
                                  sx={{p:2, textAlign: 'left'}}
                            >
                            <Grid item lg={7} md={7} xs={12}>
                                <Markdown className="markdown">
                                    {product.desc}
                                </Markdown>
                                <OrderButton setOpenPopUp={setOpenPopUp}/>
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
                                        py:3
                                    }}
                                    src={product["details-src"]}
                                    alt={product.title}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </main>
            </Container>
            <Footer/>
        </ThemeProvider>
    );
}