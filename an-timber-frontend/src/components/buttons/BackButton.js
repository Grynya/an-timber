import * as React from "react";
import Button from "./Button";
import theme from "../../style/theme";

export default function BackButton (props){
    return ( <Button {...props}
                     sx={{color:theme.palette.secondary.light}}
                     variant="contained" color="warning" size="large" href="/">На головну</Button>)
}