import {ChangeEvent, FC, useState} from 'react';
import {Link} from "react-router-dom";
import AppHeader from "../../components/AppHeader/appHeader";
import PhoneInput from "../../components/inputs/input_mask";
import PasswordInput from "../../components/inputs/password_input";
import useLoginForm from "../../hooks/useLoginForm";
import {XIcon} from "../../assets/icons";
import styles from './login.module.scss';


const Login:FC = () => {

    const { values, handleChange, handleSubmit, error, loading } = useLoginForm();


  return (

    <div className={styles.root + ' container'}>
        <AppHeader type={'login'} text={''} left={false} center={false} right={<XIcon/>}/>
        <div className="fixed_height-60"></div>
        <h1>Tizimga Kirish</h1>
        <p>Hisob yaratish yoki mavjud hisobingizga kirish uchun telefon raqamingizni kiriting</p>
        <PhoneInput value={values.phoneNumber} handleChange={handleChange} label={'Telefon raqam'} name={'number'} placeholder={"Telefon raqam"}/>
        <PasswordInput value={values.password} handleChange={handleChange} name={'number'} label={'parol'} placeholder={'Parol'}/>

        <div className={styles.link}>
            <Link to={'/register'}>Ro’yhatdan o’tish</Link>
        </div>

        <button onClick={handleSubmit} className="btn btn__to-home" disabled={loading}>Keyingi</button>
    </div>
  );
};

export default Login;