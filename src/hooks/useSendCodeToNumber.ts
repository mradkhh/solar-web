import {ChangeEvent, FormEvent, useState} from 'react';
import useAuth from './useAuth';
import validator from 'validator';
import {filterPhoneNumber} from "../helper";

interface HookResult {
    phoneNumber: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: FormEvent<HTMLAnchorElement>) => Promise<void>;
    errors: string | null;
    loading: boolean;
}

function useSendCodeToNumber(): HookResult {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errors, setErrors] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const { confirmNumber } = useAuth();

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        setPhoneNumber(value);
        setErrors(null);
    }

    async function handleSubmit(event: FormEvent<HTMLAnchorElement>) {
        event.preventDefault();

        if (!validator.isMobilePhone(phoneNumber)) {
            setErrors('Please enter a valid phone number');
            return;
        }

        setLoading(true);

        try {
            const clearNumber = filterPhoneNumber(phoneNumber)
            const success = await confirmNumber(clearNumber);
            if (success) {
                console.log('Confirmation code sent successfully');
                // Do something after confirmation code is sent successfully
            } else {
                setErrors('Confirmation code could not be sent. Please try again later.');
            }
        } catch (error) {
            console.error(error);
            setErrors('An error occurred. Please try again later.');
        }

        setLoading(false);
    }

    return { phoneNumber, handleChange, handleSubmit, errors, loading };
}

export default useSendCodeToNumber;
