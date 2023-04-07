import {ChangeEvent, FormEvent, useState} from 'react';
import validator from 'validator';
import Auth from '../services/auth';
import useAuth from "./useAuth";

interface HookResult {
    verificationCode: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<boolean>;
    errors: Record<string, string>;
    loading: boolean;
}

const { verify } = useAuth()

function useSendVerificationCode(phoneNumber: string): HookResult {
    const [verificationCode, setVerificationCode] = useState('');
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        setVerificationCode(event.target.value);
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<boolean> {
        event.preventDefault();
        setErrors({});
        setLoading(true);

        const validationErrors = {};
        if (!validator.isNumeric(verificationCode)) {
            validationErrors.verificationCode = 'Verification code must be a number';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
            return false;
        }

        try {
            const success = await verify(verificationCode, phoneNumber);
            setLoading(false);
            return success;
        } catch (error) {
            console.error(error);
            setLoading(false);
            return false;
        }
    }

    return {
        verificationCode,
        handleChange,
        handleSubmit,
        errors,
        loading,
    };
}

export default useSendVerificationCode;
