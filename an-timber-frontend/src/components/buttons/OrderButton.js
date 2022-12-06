import Button from './Button';
import * as React from "react";

export default function OrderButton(props) {
    return (<Button variant="contained" color="success" size="large"
                    onClick={() => props.setOpenPopUp(true)}>Замовити</Button>)
}