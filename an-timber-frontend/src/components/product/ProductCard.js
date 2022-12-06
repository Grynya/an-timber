import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import ContactUsPopUp from "../ContactUsPopUp";
import {useState} from "react";
import OrderButton from "../buttons/OrderButton";
import MoreButton from "../buttons/MoreButton";

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    pt: 6
};
export default function ProductCard(props) {
    const [openPopUp, setOpenPopUp] = useState(false)
    return (
        <Grid item xs={12} md={4}>
            <ContactUsPopUp open={openPopUp}
                            setOpen={setOpenPopUp}
                            setOpenSuccess={props.setOpenSuccess}
                            setOpenError={props.setOpenError}
                            productTitle={props.product.title}
                            setHiddenProgress={props.setHiddenProgress}
            />
            <Box sx={item}>
                <CardMedia
                    component="img"
                    sx={{height: 250}}
                    src={props.product.src}
                    alt={props.product.title}
                />
                <Typography variant="h6" sx={{my: 2, height: '40px'}}>{props.product.title}</Typography>
                <OrderButton setOpenPopUp={setOpenPopUp}/>
                <MoreButton idx={props.idx}/>
            </Box>
        </Grid>
    )
}