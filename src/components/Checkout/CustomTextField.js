import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

function CustomTextField({ name, label, control }) {

    return (
        <section>
            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field }) => {
                    return <TextField {...field}
                        placeholder={label}
                        onChange={(e) => field.onChange(e.target.value)}
                        value={field.value || ''}
                    />
                }}
            />

        </section>
    )
}

export default CustomTextField