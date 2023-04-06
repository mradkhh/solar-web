import React, {FC, useState} from "react";
import styles from './styles/inputs.module.scss'
import {EyeIcon, EyeOfIcon} from "../../assets/icons";

type Props = {
    name: string;
    label: string;
    placeholder: string
}


const PasswordInput: FC<Props> = ({ name, label, placeholder }) => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChangePassword = (event: any) => {
        setPassword(event.target.value);
    };

    return (
        <div className={styles.textinput_root}>
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder={placeholder}
                onChange={handleChangePassword}
            />
           <span className={styles.eye_icon} onClick={handleTogglePassword}>
               { showPassword ? <EyeOfIcon/> : <EyeIcon/> }
           </span>
        </div>
    );
};

export default PasswordInput;
