import React from 'react'
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

export default function FormInput(props: propsFormInput) {
    const { register, control } = useFormContext();
    return (
        <Grid item xs={12} sm={6}>
            <div>
                <label htmlFor={props.name}>{props.label}</label>
                <input type="text" name={props.name} required={true} />
            </div>

        </Grid>
    )
}

interface propsFormInput {
    name: string;
    label: string;
}