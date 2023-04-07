import React, {ChangeEvent, FC, useState} from "react";
import {EyeIcon, EyeOfIcon} from "../../assets/icons";
import styles from './styles/inputs.module.scss'

type Props = {
    name: string;
    label: string;
    placeholder: string;
    value: string;
    handleChange:  (event: ChangeEvent<HTMLInputElement>) => void;
}


const PasswordInput: FC<Props> = ({ name, label, placeholder, value, handleChange }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={styles.textinput_root}>
            <label htmlFor="password">Password</label>
            <input
                name={name}
                id={name}
                type={showPassword ? "text" : "password"}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            />
           <span className={styles.eye_icon} onClick={handleTogglePassword}>
               { showPassword ? <EyeOfIcon/> : <EyeIcon/> }
           </span>
        </div>
    );
};

export default PasswordInput;
