import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {text} from "../text/text.js"
import Markdown from "../components/Markdown";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {theme} from "../style/theme";
import BackButton from "../components/buttons/BackButton";

export default function AboutUs() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
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
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            Про компанію
                        </Typography>
                        <Divider color="primary" sx={{borderBottomWidth: 1}}/>
                        <Markdown className="markdown">
                            {text.aboutUs}
                        </Markdown>
                        <BackButton/>
                    </Grid>
                </main>
            </Container>
            <Footer/>
        </ThemeProvider>
    );
}