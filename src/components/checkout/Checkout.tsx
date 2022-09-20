import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import AddressForm from './AddressForm';
import Confirmation from './Confirmation';
import PaymentForm from './PaymentForm';
import { Paper, Typography, StepLabel, Stepper, Step } from '@material-ui/core';
import { commerce } from '../../lib/commerce'

const steps = ['Shipping address', 'Payment details'];


interface ICheckoutToken {
    id: string;
    line_items: {
        product_name: string;
        quantity: number;
        line_total: {
            formatted_with_symbol: string;
        };
    }[]
    total: {
        formatted_with_symbol: string;
    }
}

export interface IShippingData {
    firstName?: string;
    lastName?: string;
    email?: string;
    address?: string;
    city?: string;
    zip?: string;
    shippingCountry?: string;
    shippingOption?: {
        id: string;
        description: string;
        price: {
            formatted_with_symbol: string;
        }
    }
    shippingSubdivision?: string;

}

const defaultCheckoutToken: ICheckoutToken = {
    id: '',
    line_items: [{
        product_name: '',
        quantity: 0,
        line_total: {
            formatted_with_symbol: ''
        }
    }],
    total: {
        formatted_with_symbol: ''
    }
}

export default function Checkout(props: propsCheckout) {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState<ICheckoutToken>(defaultCheckoutToken);

    const [shippingData, setShippingData] = useState({})


    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(props.cart.id, { type: 'cart' });
                setCheckoutToken(token);
            } catch (error) {
            }
        }
        generateToken();
    }, [props.cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

    const next = (data: any) => {
        setShippingData(data)

        nextStep();
    }

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next} />
        : <PaymentForm
            shippingData={shippingData}
            checkoutToken={checkoutToken}
            backStep={backStep}
            nextStep={nextStep}
            onCaptureCheckout={props.onCaptureCheckout} />


    console.log(shippingData)

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
    order: {};
    onCaptureCheckout: (checkoutTokenId: any, newOrder: any) => Promise<void>;
    error: string;

}



