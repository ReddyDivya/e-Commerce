import React from 'react'
import { Checkbox, InputLabel, Select, MenuItem, Button, Grid, Typography } from "@material-ui/core";
import { useForm, FormProvider } from 'react-hook-form';
import CustomTextField from "./CustomTextField";

function AddressForm() {

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        // defaultValues: {
        //     firstName: "",
        //     lastName: "",
        //     checkbox: false,
        // }
    });

    // form submit function which will invoke after successful validation
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={3}>
                        <CustomTextField required name="firstName" label="First Name" />
                        <CustomTextField required name="lastName" label="Last Name" />
                        <CustomTextField required name="address1" label="Address" />
                        <CustomTextField required name="email" label="Email" />
                        <CustomTextField required name="city" label="City" />
                        <CustomTextField required name="zip" label="ZIP" />
                        <div>
                            <input type="submit" />
                        </div>
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm