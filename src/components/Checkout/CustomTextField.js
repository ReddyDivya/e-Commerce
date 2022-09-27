import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function CustomTextField({ name, label }) {

    console.log(name, label)

    const { control } = useFormContext();
    const isError = false;

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                name="firstName"
                label="First Name"
                fullWidth
            />
        </Grid>
    )
}

export default CustomTextField;