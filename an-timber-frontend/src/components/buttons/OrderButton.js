import Button from './Button';
import * as React from "react";
import theme from "../../style/theme";

export default function OrderButton(props) {
    return (<Button variant="contained" color="success" size="large"
                    onClick={() => props.setOpenPopUp(true)}>Замовити</Button>)
}