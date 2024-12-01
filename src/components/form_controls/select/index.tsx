import { useEffect } from "react";
import { Controller, Control, UseFormSetValue } from "react-hook-form"

export interface Option {
    value: any;
    label: string;
}

interface InputFieldProps {
    control: Control<any>;
    name: string;
    className: string;
    options: Option[];
}

export const Selectbox: React.FC<InputFieldProps> = ({ control, name, options, className }) => {
    return (
        <Controller
            render={({ field }) => (
                <select {...field}
                    onChange={(e) => {
                        field.onChange(e);
                    }}
                    className={className}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            )}
            name={name}
            control={control}
        />
    )
}