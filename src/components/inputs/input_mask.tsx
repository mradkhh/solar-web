import React, {FC, useState} from "react";
import InputMask from "react-input-mask";
import styles from './styles/inputs.module.scss'

type Props = {
    label: string;
    name: string;
    placeholder: string;
    value: string;
    handleChange: any
}

const PhoneInput:FC<Props> = ({ label, name, placeholder, value, handleChange }) => {

    const [ state, setState ] = useState(value)

    return (
        <div className={styles.mask_wrapper}>
            <label htmlFor={name}>{label}</label>
            <InputMask
                name={"phoneNumber"}
                mask="+\9\98 (\99) 999 99 99"
                maskChar=" "
                placeholder={placeholder}
                type="tel"
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default PhoneInput;
