import {ChangeEvent, FormEvent, useState} from 'react';
import validator from "validator";
import useAuth from "./useAuth";

interface FormValues {
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
}

interface CodeFormValues {
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
}

interface HookResult {
    values: FormValues | CodeFormValues;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: FormEvent<HTMLButtonElement>) => Promise<void>;
    errors: { [key: string]: string };
    loading: boolean;
}

function useRegisterForm(): HookResult {
    const [values, setValues] = useState<FormValues>({
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState<boolean>(false);
    const { register } = useAuth();

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
                const success = await register(values.firstName, values.lastName, values.password, values.confirmPassword);
                if (success) {
                    console.log('User registered successfully');
                    // Do something after registration is successful
                } else {
                    setErrors({ general: 'Register failed. Please try again later.' });
                }
            } catch (error) {
                console.error(error);
                setErrors({ general: 'An error occurred. Please try again later.' });
            }
            setLoading(false);
        }
    }

    return { values, handleChange, handleSubmit, errors, loading };
}


function useSendCodeNumberForm(): HookResult {

}

export default useRegisterForm;
