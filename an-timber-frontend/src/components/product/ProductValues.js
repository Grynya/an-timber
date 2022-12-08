import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../../modules/components/Typography';
import ProductCard from "./ProductCard";
import {useState} from "react";
import {text} from "../../text/text";
import SuccessAlert from "../alerts/SuccessAlert";
import ErrorAlert from "../alerts/ErrorAlert";
import {LinearProgress} from "@mui/material";

function ProductValues() {
  const [products] = useState(text.products)
  const [openSuccess, setOpenSuccess] =  useState(false)
  const [openError, setOpenError] =  useState(false)
  const [hiddenProgress, setHiddenProgress] =  useState(true)

  return (
      <React.Fragment>
    <Box component="section"
      sx={{ display: 'flex', justifyContent:'center', flexDirection:'row', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container maxWidth={false} sx={{ mt: 5, mb: 30, display: 'flex', flexDirection:'row', position: 'relative' }}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <SuccessAlert open={openSuccess} setOpen={setOpenSuccess} message={"Ваш запит відправлено у обробку"}/>
            <ErrorAlert open={openError} setOpen={setOpenError} message={"Сталася помилка"}/>
            <Box sx={{ width: '100%', ml:4, mb:4}} hidden={hiddenProgress}>
              <LinearProgress color={'warning'}/>
            </Box>
            <Typography id="production" color="inherit" align="center" variant="h3">
              Продукція
            </Typography>
          </Grid>
          {products.map((product, idx) => {
            return <ProductCard
                idx={idx}
                product={product}
                openSuccess={openSuccess}
                setOpenSuccess={setOpenSuccess}
                openError={openError}
                setOpenError={setOpenError}
                setHiddenProgress={setHiddenProgress}
            />
          })}
        </Grid>
      </Container>
    </Box></React.Fragment>
  );
}

export default ProductValues;
