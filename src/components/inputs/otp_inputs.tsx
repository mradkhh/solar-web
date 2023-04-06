import React, { useState, useRef, ChangeEvent, KeyboardEvent } from 'react';

interface OtpInputFieldProps {
    numInputs: number;
    onChange: (otp: string) => void;
}

const OtpInputField: React.FC<OtpInputFieldProps> = ({ numInputs, onChange }) => {
    const [values, setValues] = useState<string[]>(Array(numInputs).fill(''));
    const refs = useRef<HTMLInputElement[]>([]);
    const regex = /^[0-9]*$/;

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        if (regex.test(event.target.value)) {
            const value = event.target.value;
            const newValues = [...values];
            newValues[index] = value;

            // Move focus to next input field if value is entered
            if (value && index < numInputs - 1) {
                refs.current[index + 1].focus();
            }

            setValues(newValues);
            onChange(newValues.join('')); // pass the complete OTP to parent component
        }
    };

    const handleOnPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        const pastedData = event.clipboardData.getData('text/plain').trim();
        if (pastedData.length !== numInputs) {
            return;
        }
        const newValues = pastedData.split('');
        setValues(newValues);
        onChange(pastedData); // pass the complete OTP to parent component
    };

    const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (event.key === 'Backspace' && !values[index] && index > 0) {
            // Move focus to previous input field on backspace press
            refs.current[index - 1].focus();
        }
    };

    const inputFields = [];


    for (let i = 0; i < numInputs; i++) {
        inputFields.push(
            <input
                key={i}
                type="text"
                maxLength={1}
                value={values[i]}
                onChange={(event) => handleOnChange(event, i)}
                onKeyDown={(event) => handleOnKeyDown(event, i)}
                onPaste={handleOnPaste}
                ref={(el) => (refs?.current[i] = el)}
            />
        );
    }

    return <div>{inputFields}</div>;
};

export default OtpInputField;
