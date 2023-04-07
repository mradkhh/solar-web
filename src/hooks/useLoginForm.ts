import {ChangeEvent, FormEvent, useState} from 'react';
import useAuth from "./useAuth";
import {filterPhoneNumber} from "../helper";

interface FormValues {
    phoneNumber: string;
    password: string;
}

interface HookResult {
    values: FormValues;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: FormEvent<HTMLButtonElement>) => Promise<void>;
    error: string | null;
    loading: boolean;
}

function useLoginForm(): HookResult {
    const [values, setValues] = useState<FormValues>({ phoneNumber: '', password: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState<boolean>(false);
    const { login } = useAuth();

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: '' });
    }

    async function handleSubmit(event: FormEvent<HTMLButtonElement>) {
        event.preventDefault();
        const { errors: validationErrors, isValid } = validator(values, {
            firstName: 'required',
            lastName: 'required',
            password: 'required|min:6',
            confirmPassword: `required|confirmed:${values.password}`,
        });

        setErrors(validationErrors);

        if (isValid) {
            setLoading(true);
            try {
                const clearNumber = filterPhoneNumber(values.phoneNumber)
                const success = await login(clearNumber, values.password);
                if (success) {
                    console.log('User logged in successfully');
                    // Do something after login is successful
                } else {
                    setError('Invalid number or password');
                }
            } catch (error) {
                console.error(error);
                setError('An error occurred');
            }
            setLoading(false);
        }
    }

    return { values, handleChange, handleSubmit, error, loading };
}

export default useLoginForm;
