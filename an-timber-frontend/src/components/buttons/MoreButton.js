import Button from './Button';
import * as React from "react";
import {useNavigate} from "react-router-dom";
import theme from "../../style/theme";

export default function MoreButton(props) {
    const navigate = useNavigate()
    return (
            <Button variant="contained"
                       color='warning'
                       sx={{mt: 2, color:theme.palette.secondary.light}}
                       size="large"
                       onClick={() => {
                           navigate("/product-details", {state: {productIdx: props.idx}})
                       }}
                       {...props}
        >Детальніше</Button>
    )
}