import React from 'react';
import { useForm } from 'react-hook-form';

export default function AddressForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>

            <input type="text" placeholder="First Name...." {...register('firstName', { required: true })} />
            {errors.firstName && <p>First name is required.</p>}

            <input type="text" placeholder="Last Name...."  {...register('lastName', { required: true })} />
            {errors.lastName && <p>Last name is required.</p>}

            <input type="number" placeholder="Age...."  {...register('age', { pattern: /\d+/ })} />
            {errors.age && <p>Please enter number for age.</p>}

            <input type="submit" />
        </form>
    );
}