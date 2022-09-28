import React, { useState } from 'react';
import { Checkbox, TextField, InputLabel, Select, MenuItem, Button, Grid, Typography } from "@material-ui/core";
import { useForm, Controller, FormProvider } from "react-hook-form";
import CustomTextField from "./CustomTextField";

function AddressForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [data, setData] = useState();

    const { register, handleSubmit, control, formState: { errors } } = useForm();

    // form submit function which will invoke after successful validation
    const onSubmit = (data) => {
        setData(data);
    }
    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={3}>
                        {/* registering our input into the hook by invoking the "register" function */}
                        <input type="text" name="firstName" {...register("firstName",
                            {
                                required: "First Name is required",
                                minLength: {
                                    value: 4,
                                    message: "First name is required."
                                },
                                maxLength: 20
                            })} placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                        />

                        {/* errors will return when field validation fails  */}
                        <p>{errors.firstName?.message}</p>
                        <input type="text" name="lastName" {...register("lastName",
                            {
                                required: "Last Name is required",
                                minLength: {
                                    value: 4,
                                    message: "minimum length is 4"
                                },
                                maxLength: 20
                            })} placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                        />
                        {/* errors will return when field validation fails  */}
                        <p>{errors.lastName?.message}</p>
                        <div>
                            <button>Submit</button>
                        </div>
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm