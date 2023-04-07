import { FC } from 'react';
import AppHeader from "../../components/AppHeader/appHeader";
import {ArrowLeftIcon} from "../../assets/icons";
import TextInput from "../../components/inputs/text_input";
import {Link} from "react-router-dom";
import styles from './register.module.scss';
import PhoneInput from "../../components/inputs/input_mask";
import useSendCodeToNumber from "../../hooks/useSendCodeToNumber";


const Register:FC = () => {


    const { phoneNumber, handleChange, handleSubmit, loading, errors } = useSendCodeToNumber()

  return (
    <div className={styles.root + ' container'}>
      <AppHeader type={'register'} text={''} center={false} left={<ArrowLeftIcon/>}/>
        <div className="fixed_height-60"></div>
        <h1>Ro'yxatdan o'tish</h1>
        <p>Hisob yaratish yoki mavjud hisobingizga kirish uchun telefon raqamingizni kiriting</p>
        <PhoneInput value={phoneNumber} handleChange={handleChange} label={'Telefon raqam'} name={'phoneNumber'} placeholder={"Telefon raqam"}/>



        <div className={styles.bottom}>
            <Link to={'/register/confirm'} className="btn btn__to-home">Keyingi</Link>
            <div>Sizda allaqachon profil bo’lsa <Link to={'/login'}>Kirish</Link></div>
        </div>
    </div>
  );
};

export default Register;