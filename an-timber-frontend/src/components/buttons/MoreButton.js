import {Button} from "@mui/material";
import * as React from "react";
import {useNavigate} from "react-router-dom";

export default function MoreButton (props){
    const navigate = useNavigate()
    return(<Button variant={props.variant}
                   sx={{mt: 2}}
                   size="large"
                   onClick={() => {
                       navigate("/product-details", {state: {productIdx: props.idx}})
                   }}
                   {...props}
    >Детальніше</Button>)
}