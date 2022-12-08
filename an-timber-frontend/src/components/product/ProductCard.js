import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import ContactUsPopUp from "../ContactUsPopUp";
import {useState} from "react";
import OrderButton from "../buttons/OrderButton";
import MoreButton from "../buttons/MoreButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
            <Card>
                <CardContent>
                    <Box sx={item}>
                        <CardMedia
                            component="img"
                            sx={{height: 350}}
                            src={props.product.src}
                            alt={props.product.title}
                        />
                        <Typography variant="h6" sx={{my: 1, fontSize: 23,height: '40px'}}>{props.product.title}</Typography>
                        <Box sx={{display: 'flex', width:'100%', justifyContent: 'space-evenly'}}>
                            <OrderButton setOpenPopUp={setOpenPopUp}/>
                            <MoreButton idx={props.idx}/>
                        </Box>

                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )
}