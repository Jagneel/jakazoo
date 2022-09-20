import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import Review from './Review';
import { IShippingData } from './Checkout';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY!)


export default function PaymentForm(props: propsPaymentForm) {

    const handleSubmit = async (event: MouseEvent, elements: any, stripe: any) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement })

        if (error) {
            console.log(error)
        } else {
            const orderData = {
                list_items: props.checkoutToken.line_items,
                // customer: {
                //     firstname: props.shippingData.firstName,
                //     lastname: props.shippingData.lastName,
                //     email: props.shippingData.email
                // },
                // shipping: {
                //     name: 'Primary',
                //     street: props.shippingData.address1,
                //     town_city: props.shippingData.city
                // },
                fulfillment: { shipping_method: props.shippingData.shippingOption?.description },
                payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id,
                    },
                },
            }

            props.onCaptureCheckout(props.checkoutToken.id, orderData)

            props.nextStep()
        }
    }
    return (
        <>
            <Review checkoutToken={props.checkoutToken} />
            <Divider />
            <Typography variant='h6' gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form >
                            <CardElement />
                            <br /><br />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button variant='outlined' onClick={() => props.backStep()}>Back</Button>
                                <Button type='submit' variant='contained' disabled={!stripe} color='primary'>
                                    Pay {props.checkoutToken.total.formatted_with_symbol}
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    )
}

interface propsPaymentForm {
    checkoutToken: {
        id: string;
        line_items: {
            product_name: string;
            quantity: number;
            line_total: {
                formatted_with_symbol: string;
            }
        }[]
        total: {
            formatted_with_symbol: string;
        }
    }
    shippingData: IShippingData;
    onCaptureCheckout: (checkoutTokenId: any, newOrder: any) => Promise<void>
    backStep: () => void;
    nextStep: () => void;

}