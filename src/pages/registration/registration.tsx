import { FC } from 'react';
import AppHeader from "../../components/AppHeader/appHeader";
import {ArrowLeftIcon} from "../../assets/icons";
import styles from './registration.module.scss';
import TextInput from "../../components/inputs/text_input";
import {Link} from "react-router-dom";
import OtpInputField from "../../components/inputs/otp_inputs";


const Registration:FC = () => {




  return (
    <div className={styles.root + ' container'}>
      <AppHeader type={'registration'} text={''} center={false} left={<ArrowLeftIcon/>}/>
        <div className="fixed_height-60"></div>
        <h1>Ro'yxatdan o'tish</h1>
        <p>Hisob yaratish yoki mavjud hisobingizga kirish uchun telefon raqamingizni kiriting</p>
        <TextInput name={'last_name'} label={'Telefon raqam'} placeholder={'Telefon raqam'}/>



        <div className={styles.bottom}>
            <Link to={'/registration/confirm'} className="btn btn__to-home">Keyingi</Link>
            <div>Sizda allaqachon profil bo’lsa <Link to={'/login'}>Kirish</Link></div>
        </div>
    </div>
  );
};

export default Registration;