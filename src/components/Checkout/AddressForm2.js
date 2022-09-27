import React from 'react'
import { Checkbox, InputLabel, Select, MenuItem, Button, Grid, Typography } from "@material-ui/core";
import { useForm, Controller, FormProvider } from "react-hook-form";
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
                        <div>
                            {/* registering our input into the hook by invoking the "register" function */}
                            <input type="text" defaultValue="Div" {...register("firstName", {
                                required: "First Name is required",
                                minLength: {
                                    value: 4,
                                    message: "First name is required."
                                },
                                maxLength: 20
                            })} placeholder="First Name"
                            />

                            {/* errors will return when field validation fails  */}
                            <p>{errors.firstName?.message}</p>
                        </div>
                        <div>
                            <input type="text" {...register("lastName",
                                {
                                    required: "Last Name is required",
                                    minLength: {
                                        value: 4,
                                        message: "minimum length is 4"
                                    },
                                    maxLength: 20
                                })} placeholder="Last Name" />

                            {/* errors will return when field validation fails  */}
                            <p>{errors.lastName?.message}</p>
                        </div>
                        <div>
                            <input type="number" {...register("age", { min: 18, max: 99 })} placeholder="Age" />
                        </div>
                        <InputLabel>Are you a major?</InputLabel>
                        <Controller
                            name="checkbox"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Checkbox {...field} />}
                        />
                        {/* 
                        <CustomTextField required name="firstName" label="First Name" />
                        <CustomTextField required name="lastName" label="Last Name" />
                        <CustomTextField required name="address1" label="Address" />
                        <CustomTextField required name="email" label="Email" />
                        <CustomTextField required name="city" label="city" />
                        <CustomTextField required name="zip" label="ZIP" /> */}
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