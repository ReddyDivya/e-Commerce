import React, { useEffect, useState } from 'react';
import { Checkbox, TextField, InputLabel, Select, MenuItem, Button, Grid, Typography } from "@material-ui/core";
import CustomTextField from "./CustomTextField";
import { useForm, Controller, FormProvider } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { commerce } from '../../lib/commerce';

export default function AddressForm({ checkoutToken, test }) {

    const [data, setData] = useState();

    //Countries
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');

    //Sub divisions
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');

    //Shipping Options
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');


    //schema for form field validations
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

    //fetching countries
    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    }

    //fetching sub divisions
    const fetchSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListShippingSubdivisions(countryCode);

        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
    }

    //fetching Shipping Options
    const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });

        setShippingOptions(options);
        setShippingOption(options[0].id);
    }

    //fetching countries
    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
    }, []);

    //fetching subdivisions for a selected country
    useEffect(() => {
        if (shippingCountry)
            fetchSubdivisions(shippingCountry)
    }, [shippingCountry]);

    //fetching shipping options on a selected shipping Subdivision
    useEffect(() => {
        if (shippingSubdivision)
            fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)
    }, [shippingSubdivision])

    return (
        <>
            <form onSubmit={handleSubmit(data => console.log(data))} className="m-8 p-6 w-2/4">
                <Typography variant="h6" gutterBottom>Shipping Address</Typography>

                <CustomTextField name="firstName" label="First Name" control={control} />
                {errors.firstName && <p>First Name is required.</p>}

                <CustomTextField name="lastName" label="Last Name" control={control} />
                {errors.lastName && <p>Last Name is required.</p>}

                <CustomTextField name="age" label="age" control={control} />
                {errors.age && <p>Age is required.</p>}

                <CustomTextField name="email" label="Email" control={control} />
                {errors.email && <p>Email is required.</p>}

                <CustomTextField name="address" label="Address" control={control} />
                {errors.address && <p>Address is required.</p>}

                <CustomTextField name="city" label="City" control={control} />
                {errors.city && <p>City is required.</p>}

                <CustomTextField name="zip" label="Zip" control={control} />
                {errors.zip && <p>Zip is required.</p>}

                <Grid item xs={12} sm={6}>
                    <InputLabel>Shipping Country</InputLabel>
                    <Select fullWidth value={shippingCountry} onChange={(e) => setShippingCountry(e.target.value)}>
                        {
                            Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.label}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </Grid>

                <input type="submit" className="border-solid border-2 border-sky-500 p-3 m-3 w-36 hover:bg-slate-300 cursor-pointer" />
            </form>
        </>
    );
}