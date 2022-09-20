import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

export default function Review(props: propsReview) {
    return (
        <>
            <Typography variant='h6' gutterBottom>Order Summary</Typography>
            <List disablePadding>
                {props.checkoutToken.line_items.map((product) => (
                    <ListItem style={{ padding: '10px 0' }} key={product.product_name}>
                        <ListItemText primary={product.product_name} secondary={`Quantity: ${product.quantity}`} />
                        <Typography variant='body2'>{product.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{ padding: '10px 0' }}>
                    <ListItemText primary='Total' />
                    <Typography variant='subtitle1' style={{ fontWeight: 700 }}>
                        {props.checkoutToken.total.formatted_with_symbol}
                    </Typography>
                </ListItem>
            </List>
        </>
    )
}

interface propsReview {
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
}