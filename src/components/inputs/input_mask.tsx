import React, {FC} from "react";
import InputMask from "react-input-mask";
import styles from './styles/inputs.module.scss'

type Props = {
    label: string;
    name: string;
    placeholder: string;
    value: string;
    setValue: (str: string) => void
}

const PhoneInput:FC<Props> = ({ label, name, placeholder, setValue, value }) => {

    function handleNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }

    return (
        <div className={styles.mask_wrapper}>
            <label htmlFor={name}>{label}</label>
            <InputMask
                mask="+\9\98 (\99) 999 99 99"
                maskChar=" "
                placeholder={placeholder}
                type="tel"
                value={value}
                onChange={handleNumberChange}
            />
        </div>
    );
};

export default PhoneInput;
