import {ChangeEvent, FC, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import AppHeader from "../../components/AppHeader/appHeader";
import {XIcon} from "../../assets/icons";
import PhoneInput from "../../components/inputs/input_mask";
import styles from './login.module.scss';
import PasswordInput from "../../components/inputs/password_input";
import {useFetch} from "../../services";
import {Category, ILogin} from "../../models";
import {filterPhoneNumber} from "../../helper";


const Login:FC = () => {

    const [number, setNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [numberError, setNumberError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    function handleNumberChange(event: ChangeEvent<HTMLInputElement>) {
        setNumber(event.target.value);
    }

    function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    const handleLogin = () => {

    }


  return (

    <div className={styles.root + ' container'}>
        <AppHeader type={'login'} text={''} left={false} center={false} right={<XIcon/>}/>
        <div className="fixed_height-60"></div>
        <h1>Tizimga Kirish</h1>
        <p>Hisob yaratish yoki mavjud hisobingizga kirish uchun telefon raqamingizni kiriting</p>
        <PhoneInput value={number} setValue={setNumber} label={'Telefon raqam'} name={'number'} placeholder={"Telefon raqam"}/>
        <PasswordInput name={'number'} label={'parol'} placeholder={'Parol'}/>

        <div className={styles.link}>
            <Link to={'/registration'}>Ro’yhatdan o’tish</Link>
        </div>

        <button onClick={handleLogin} className="btn btn__to-home">Keyingi</button>
    </div>
  );
};

export default Login;