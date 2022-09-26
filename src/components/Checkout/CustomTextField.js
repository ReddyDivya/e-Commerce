import React from 'react';
import { TextField, Grid, Select, MenuItem } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

function CustomTextField({ name, label, required }) {

    const { control } = useFormContext();
    const isError = false;

    return (
        <Grid item xs={12} sm={6}>
            {/* <Controller
                as={TextField}
                name={name}
                required={required}
                error={isError}
                label={label}
                render={({ field }) => {
                    // sending integer instead of string.
                    return <input {...field} />;
                }}
            /> */}
        </Grid>
    )
}

export default CustomTextField;