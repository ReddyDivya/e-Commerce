import React, { useState } from 'react';
import { Typography, InputLabel, TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function AddressForm() {

    const [firstName, setFirstName] = useState('');
    const [data, setData] = useState('');

    // const [lastName, setLastName] = useState();
    // const [email, setEmail] = useState();
    // const [age, setAge] = useState();
    // const [address, setAddress] = useState();

    // const [myFormFields, setFormFields] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     age: '',
    //     address: '',
    // })

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


    // Always have your functions before your return to keep state batches in sync.
    // const onFormFieldChange = (e) => {
    //     // No need to return this function can be void
    //     e.preventDefault();
    //     setFormFields({
    //         ...myFormFields,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // alert(data);

    return (
        <>
            <Typography varient="h6" gutterBottom>Shipping Address</Typography>
            <form onSubmit={handleSubmit(data => setData(data))}>
                {/* First Name */}
                <section>
                    {/* <input type='text' placeholder='First Name...' name="firstName" {...register('firstName')} onChange={onFormFieldChange} value={myFormFields.firstName || ''} /> */}

                    <Controller
                        name="firstName"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => {
                            return <TextField {...field}
                                placeholder="Enter your First Name"
                                onChange={(e) => field.onChange(e.target.value)}
                                value={field.value || ''}
                            />
                        }}
                    />
                    {/* <p>{errors.myFormFields.firstName?.message}</p> */}
                </section>
                <section>
                    {/* <input type='text' placeholder='Last Name...' name="lastName" {...register('lastName')} onChange={onFormFieldChange} value={myFormFields.lastName || ''} /> */}
                    {/* <p>{errors.lastName?.message}</p> */}
                </section>
                {/* Email */}
                <section>
                    {/* <input type='text' placeholder='Email...' name="email" {...register('email')} onChange={onFormFieldChange} value={myFormFields.email || ''} /> */}
                    {/* <p>{errors.email?.message}</p> */}
                </section>
                {/* Age */}
                <section>
                    {/* <input type='number' placeholder='age' name="age" {...register('age')} onChange={onFormFieldChange} value={myFormFields.age || ''} /> */}
                    {/* <p>{errors.age?.message}</p> */}
                </section>
                {/* Address */}
                <section>
                    {/* <input type='text' placeholder='Address' name="address"  {...register('address')} onChange={onFormFieldChange} value={myFormFields.address || ''} /> */}
                    {/* <p>{errors.address?.message}</p> */}
                </section>

                <section>
                    <input type="submit" id="submit" value="Submit" />
                </section>
            </form>
        </>
    )
}
