import Alert from '@mui/material/Alert';
import {IconButton} from "@mui/material";
import Collapse from '@mui/material/Collapse';
import Box from "@mui/material/Box";
import CloseIcon from '@mui/icons-material/Close';

const SuccessAlert = (props) => {

    return (<Box sx={{width: '100%'}}>
        <Collapse in={props.open}>
            <Alert severity="success"
                   action={
                       <IconButton
                           aria-label="close"
                           color="inherit"
                           size="small"
                           onClick={() => {
                               props.setOpen(false);
                           }}
                       >
                           <CloseIcon fontSize="inherit"/>
                       </IconButton>
                   }
                   sx={{mb: 2}}
            >
                {props.message}
            </Alert>
        </Collapse>
    </Box>)
}
export default SuccessAlert;