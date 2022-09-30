import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import Grid from "@mui/material/Grid";
import {useNavigate} from "react-router-dom";
import Markdown from "../Markdown";
import Container from "@mui/material/Container";
import MoreButton from "../buttons/MoreButton";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableProduct(props) {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = props.products.length;
    const navigate = useNavigate()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{maxWidth: '100%', flexGrow: 1, p: 1}}>
            <AutoPlaySwipeableViews
                threshold={10}
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {props.products.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Grid container>
                                <Paper
                                    style={{
                                        background:
                                            "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), " +
                                            step.backgroundImage,
                                        width: '100%',
                                        height: '35vh',
                                        display: "flex",
                                        alignItems: "center",
                                        backgroundSize: "cover",
                                        justifyContent: "center"
                                    }}
                                >
                                    <Container>
                                        <Typography
                                        variant="h3"
                                        gutterBottom
                                        sx={{padding: 2, color: "white", font: 'Georgia, sans-serif'}}
                                    >
                                        <Markdown>{step.title}</Markdown></Typography>
                                        <MoreButton variant="contained" idx={index}
                                                    color="secondary"
                                                    style={{color: theme.palette.primary.main}}/>
                                    </Container>
                                </Paper>
                            </Grid>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Вперед
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft/>
                        ) : (
                            <KeyboardArrowRight/>
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight/>
                        ) : (
                            <KeyboardArrowLeft/>
                        )}
                        Назад
                    </Button>
                }
            />
        </Box>
    );
}

export default SwipeableProduct;