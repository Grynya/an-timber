import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Checkbox, FormControlLabel} from "@mui/material";
import {useState} from "react";
import Service from "../services/Service";
import {ThemeProvider} from "@mui/material/styles";
import theme from "../style/theme";
import Button from "./buttons/Button";

const isPhone = (phone) => {
    const re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/
    return re.test(String(phone).toLowerCase());
}
export default function ContactUsPopUp(props) {

    const [formValue, setFormValue] = useState({
        name: "",
        phone: "",
        comment: "",
        product: props.productTitle,
        isAgreed: false
    });
    const [formValueError, setFormValueError] = useState({
        name: "",
        phone: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValue((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };
    const setAnyFormValueErrors = (name, value) => {
        setFormValueError((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };
    const sendFormValue = async () => {
        props.setHiddenProgress(false);
        props.setOpen(false);
        if (formValue.product && formValue.name && formValue.phone) {
            let res = await new Service().sendEmail(formValue);
            if (res.status === 200) {
                props.setHiddenProgress(true);
                props.setOpenSuccess(true);
                setTimeout(() => {
                    props.setOpenSuccess(false);
                }, 4000)
            } else {
                props.setHiddenProgress(true);
                props.setOpenError(true);
                setTimeout(() => {
                    props.setOpenError(false);
                }, 4000)
            }
            setFormValue({
                    name: "",
                    phone: "",
                    comment: "",
                    isAgreed: false
                }
            )
        }else {
            props.setHiddenProgress(true);
            props.setOpenError(true);
            setTimeout(() => {
                props.setOpenError(false);
            }, 4000)
        }
    }
    return (
        <ThemeProvider theme={theme}>
            <Dialog
                open={props.open} onClose={() => {
                props.setOpen(false);
            }}>
                <DialogTitle
                    sx={{backgroundColor: theme.palette.secondary.light}}>Замовити {props.productTitle}</DialogTitle>
                <DialogContent sx={{backgroundColor: theme.palette.secondary.light}}>
                    <DialogContentText>
                        Залишіть свої контакти, і ми зв'яжемося з Вами.
                    </DialogContentText>
                    <TextField
                        value={formValue.name}
                        margin="dense"
                        name="name"
                        label="Ім'я"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                        error={formValueError.name !== ""}
                        helperText={formValueError.name}
                        onChange={(e) => {
                            handleChange(e)
                            if (e.target.value.length < 3 || e.target.value.length > 50)
                                setAnyFormValueErrors("name", "Ім'я має містити від 3 до 50 символів")
                            else setAnyFormValueErrors("name", "")
                        }}
                    />
                    <TextField
                        value={formValue.phone}
                        margin="dense"
                        name="phone"
                        label="Телефон"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                        error={formValueError.phone !== ""}
                        helperText={formValueError.phone}
                        onChange={(e) => {
                            handleChange(e)
                            if (!isPhone(e.target.value))
                                setAnyFormValueErrors("phone", "Некоректний номер телефону")
                            else setAnyFormValueErrors("phone", "")
                        }}
                    />

                    <TextField
                        value={formValue.comment}
                        margin="dense"
                        name="comment"
                        label="Коментар"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                    <FormControlLabel control={<Checkbox value={formValue.isAgreed}
                                                         name={"isAgreed"}
                                                         onChange={handleChange}
                    />} label="Згоден(а) на обробку особистих даних"/>
                </DialogContent>
                <DialogActions sx={{backgroundColor: theme.palette.secondary.light}}>
                    <Button
                        size="small"
                        variant="contained"
                        color="warning"
                        sx={{color:theme.palette.primary.main}}
                        disabled={formValue.isAgreed === false || formValue.name === "" || formValue.phone === "" ||
                            formValueError.name !== "" || formValueError.phone !== ""}
                        onClick={async () => {
                            await sendFormValue()
                        }}>Надіслати</Button>
                    <Button
                    variant="outlined"
                        color="error"
                            size="small" onClick={() => {
                        props.setOpen(false)
                    }}>Закрити</Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
}