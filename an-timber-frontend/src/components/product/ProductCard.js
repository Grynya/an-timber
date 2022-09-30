import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import ContactUsPopUp from "../ContactUsPopUp";
import {useState} from "react";
import Markdown from "../Markdown";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../../style/theme";
import OrderButton from "../buttons/OrderButton";
import MoreButton from "../buttons/MoreButton";

export default function ProductCard(props) {
    const [openPopUp, setOpenPopUp] = useState(false)
    return (
            <Grid item xs={12} md={6} sm={12}>
                <ContactUsPopUp open={openPopUp}
                                setOpen={setOpenPopUp}
                                setOpenSuccess={props.setOpenSuccess}
                                setOpenError={props.setOpenError}
                                productTitle={props.product.title}
                                setHiddenProgress={props.setHiddenProgress}
                />
                <ThemeProvider theme={theme}>
                <Card sx={{display: 'flex', backgroundColor: theme.palette.background.default}}>
                    <Grid container justifyContent="space-between">
                        <CardContent sx={{flex: 1}}>
                            <Grid item>
                                <Typography variant="h6"
                                            gutterBottom><Markdown>{props.product.title}</Markdown></Typography>
                            </Grid>
                            <Grid item>
                                <Box sx={{mt: 5}}>
                                    <OrderButton setOpenPopUp={setOpenPopUp}/>
                                    <br/>
                                    <MoreButton variant="outlined" idx={props.idx}/>
                                </Box>
                            </Grid>
                        </CardContent>
                    </Grid>
                    <Grid item>
                        <CardMedia
                            component="img"
                            sx={{height: 220, width: 160}}
                            src={props.product.src}
                            alt={props.product.title}
                        />
                    </Grid>
                </Card>
                </ThemeProvider>
            </Grid>
    )
}