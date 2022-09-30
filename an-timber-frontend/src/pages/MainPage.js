import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {ThemeProvider} from '@mui/material/styles';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/product/ProductCard";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import {text} from "../text/text";
import {useState} from "react";
import SwipeableProduct from "../components/product/SwipeableProduct";
import SuccessAlert from "../components/alerts/SuccessAlert";
import ErrorAlert from "../components/alerts/ErrorAlert";
import {theme} from "../style/theme";
import {LinearProgress} from "@mui/material";
import Box from "@mui/material/Box";

export default function MainPage() {
    const [products] = useState(text.products)
    const [openSuccess, setOpenSuccess] =  useState(false)
    const [openError, setOpenError] =  useState(false)
    const [hiddenProgress, setHiddenProgress] =  useState(true)
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
                <Header/>
            <Container maxWidth="lg" sx={{minHeight: "calc(80vh)"}}>
            <main>
                    <SwipeableProduct products={products}/>
                    <Typography variant="h4" gutterBottom>
                        Продукція
                    </Typography>
                    <Divider color="primary"  sx={{ borderBottomWidth: 1 }}/>
                    <Grid container spacing={4} sx={{mt: 3}}>
                        <SuccessAlert open={openSuccess} setOpen={setOpenSuccess} message={"Ваш запит відправлено у обробку"}/>
                        <ErrorAlert open={openError} setOpen={setOpenError} message={"Сталася помилка"}/>
                        <Box sx={{ width: '100%', ml:4}} hidden={hiddenProgress}>
                            <LinearProgress color={'primary'}/>
                        </Box>
                        {products.map((product, idx) => {
                            return <ProductCard
                                idx={idx}
                                product={product}
                                openSuccess={openSuccess}
                                setOpenSuccess={setOpenSuccess}
                                openError={openError}
                                setOpenError={setOpenError}
                                setHiddenProgress={setHiddenProgress}
                            />
                        })}
                    </Grid>
                </main>
            </Container>
            <Footer />
        </ThemeProvider>
    );
}
