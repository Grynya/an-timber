import * as React from 'react';
import Typography from '../../modules/components/Typography';
import SwipeableProductLayout from './SwipeableProductLayout';
import MoreButton from "../buttons/MoreButton";
import {useTheme} from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import {text} from "../../text/text"
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import MobileStepper from "@mui/material/MobileStepper";
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
export default function SwipeableProduct() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = text.products.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (<>
        <AutoPlaySwipeableViews
            threshold={10}
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
        >
            {text.products.map((product, idx) => (
                <div key={product.label}>
                    {Math.abs(activeStep - idx) <= 2 ? (
                        <SwipeableProductLayout
                            sxBackground={{
                                backgroundImage: product.backgroundImage,
                                backgroundColor: theme.palette.secondary.main,
                                backgroundPosition: 'center',
                            }}
                        >
                            <Typography color="inherit" variant="h2" sx={{pt:30, fontSize:{xs: 40, sm: 40, md: 48, lg: 48, xl: 48} }}>
                                {product.title}
                            </Typography>
                            <MoreButton idx={idx} />
                            <span id="production" style={{marginTop: 200}}></span>
                        </SwipeableProductLayout>): null}
                </div>
            ))}
        </AutoPlaySwipeableViews>
            <MobileStepper

                steps={maxSteps}
                sx={{backgroundColor:theme.palette.secondary.light}}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                        sx={{color: theme.palette.primary.dark}}
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
                    <Button size="small" onClick={handleBack}
                            disabled={activeStep === 0}
                            sx={{color: theme.palette.primary.dark}}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight/>
                        ) : (
                            <KeyboardArrowLeft/>
                        )}
                        Назад
                    </Button>
                }
            /></>
        )}