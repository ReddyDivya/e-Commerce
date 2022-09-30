import React, { useState } from 'react';
import { Checkbox, TextField, InputLabel, Select, MenuItem, Button, Grid, Typography } from "@material-ui/core";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


export default function AddressForm() {

    const [data, setData] = useState();

    const schema = yup.object().shape({
        firstName: yup.string().required("First Name should be required please"),
        lastName: yup.string().required("Last Name should be required please"),
        email: yup.string().email().required("Email should be required please"),
        age: yup.number().positive().integer().required(),
        address: yup.string().required("Address should be required please"),
        // password: yup.string().min(4).max(15).required(),
        // confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
    });

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });//destructuring hook

    return (
        <>
            <form onSubmit={handleSubmit(data => console.log(data))} className="m-8 p-6 w-2/4">
                <Typography variant="h6" gutterBottom>Shipping Address</Typography>
                <section>
                    <Controller
                        name="firstName"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => {
                            return <TextField {...field}
                                placeholder="First Name..."
                                onChange={(e) => field.onChange(e.target.value)}
                                value={field.value || ''}
                            />
                        }}
                    />
                    {errors.firstName && <p>First name is required.</p>}
                </section>

                <section>
                    <Controller
                        name="lastName"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => {
                            return <TextField {...field}
                                placeholder="Last Name..."
                                onChange={(e) => field.onChange(e.target.value)}
                                value={field.value || ''}
                            />
                        }}
                    />
                    {errors.lastName && <p>Last name is required.</p>}
                </section>

                <section>
                    <Controller
                        name="age"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => {
                            return <TextField {...field}
                                placeholder="Age..."
                                onChange={(e) => field.onChange(e.target.value)}
                                value={field.value || ''}
                            />
                        }}
                    />
                    {errors.age && <p>Please enter number for age.</p>}
                </section>

                <section>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => {
                            return <TextField {...field}
                                placeholder="Email..."
                                onChange={(e) => field.onChange(e.target.value)}
                                value={field.value || ''}
                            />
                        }}
                    />
                    {errors.email && <p>Email is required.</p>}
                </section>

                <section>
                    <Controller
                        name="address"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => {
                            return <TextField {...field}
                                placeholder="Address"
                                onChange={(e) => field.onChange(e.target.value)}
                                value={field.value || ''}
                            />
                        }}
                    />
                    {errors.address && <p>Address is required.</p>}
                </section>

                <section>
                    <Controller
                        name="city"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => {
                            return <TextField {...field}
                                placeholder="City"
                                onChange={(e) => field.onChange(e.target.value)}
                                value={field.value || ''}
                            />
                        }}
                    />
                    {errors.city && <p>City is required.</p>}
                </section>

                <section>
                    <Controller
                        name="zip"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => {
                            return <TextField {...field}
                                placeholder="ZIP..."
                                onChange={(e) => field.onChange(e.target.value)}
                                value={field.value || ''}
                            />
                        }}
                    />
                    {errors.zip && <p>ZIP is required.</p>}
                </section>

                <input type="submit" className="border-solid border-2 border-sky-500 p-3 m-3 w-36 hover:bg-slate-300 cursor-pointer" />
            </form>
        </>
    );
}