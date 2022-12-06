import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
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
            <Container maxWidth="lg" sx={{minHeight: "calc(80vh)"}}>
            <main>
                        <Grid
                            item
                            xs={12}
                            md={12}
                            sx={{
                                '& .markdown': {
                                    py: 3,
                                },
                                pt:20
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