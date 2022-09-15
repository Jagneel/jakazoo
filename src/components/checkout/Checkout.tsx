import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import AddressForm from './AddressForm';
import Confirmation from './Confirmation';
import PaymentForm from './PaymentForm';
import { Paper, Typography, StepLabel, Stepper, Step } from '@material-ui/core';
import { commerce } from '../../lib/commerce'

const steps = ['Shipping address', 'Payment details'];

export default function Checkout(props: propsCheckout) {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState({ id: '' });
    const [shippingData, setShippingData] = useState({})

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(props.cart.id, { type: 'cart' });
                console.log(token)
                setCheckoutToken(token);
            } catch (error) {
            }
        }
        generateToken();
    }, [props.cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

    const next = (data: {}) => {
        setShippingData(data)

        nextStep();
    }


    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next} />
        : <PaymentForm checkoutToken={checkoutToken} />

    return (
        <>
            <div className='toolbar' />
            <Container>
                <Paper>
                    <Typography variant='h4' align='center'>Checkout</Typography>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </Container>
        </>
    )
}

interface propsCheckout {
    cart: {
        id: string;
    }
}