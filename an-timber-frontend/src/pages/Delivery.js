import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Markdown from "../components/Markdown";
import {text} from "../text/text.js"
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackButton from "../components/buttons/BackButton";
import withRoot from "../style/withRoot";

function Delivery() {
    return (
        <React.Fragment>
                <Header/>
            <Container sx={{minHeight: "calc(70vh)", pt:2}}>
            <main>
                        <Grid
                            item
                            xs={12}
                            md={12}
                            sx={{
                                '& .markdown': {
                                    py: 3,
                                }
                            }}
                        >
                            <Typography color="inherit" align="center" variant="h4">
                                Доставка
                            </Typography>
                            <Typography color="inherit" variant="subtitle1">
                                <Markdown className="markdown">
                                    {text.delivery}
                                </Markdown>
                            </Typography>
                            <BackButton/>
                        </Grid>
                </main>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}
export default withRoot(Delivery);