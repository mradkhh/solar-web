import {FC, useState} from 'react';
import AppHeader from "../../components/AppHeader/appHeader";
import {ArrowLeftIcon} from "../../assets/icons";
import TextInput from "../../components/inputs/text_input";
import {Link} from "react-router-dom";
import styles from './register.module.scss';
import OtpInputField from "../../components/inputs/otp_inputs";
import useSendVerificationCode from "../../hooks/useSendVerificationCode";

const Confirm:FC = () => {

    const [otp, setOtp] = useState<string>('');

    const { verificationCode, handleChange, handleSubmit, loading, errors } = useSendVerificationCode('+998939339937')

    const handleOtpChange = (otpValue: string) => {
        setOtp(otpValue);
    };


  return (
    <div className={styles.root + ' container'}>
        <AppHeader type={'register'} text={''} center={false} left={<ArrowLeftIcon/>}/>
        <div className="fixed_height-60"></div>
        <h1>Tasdiqlash kodi</h1>
        <p>Tasdiqlash kodi  ko'rsatilgan telefon raqamiga yuborildi</p>

        <div className={styles.confirm_code}>
            <OtpInputField numInputs={5} onChange={handleOtpChange}/>
        </div>
        <h6>Kod Muvaffaqiyatli</h6>

        <div className={styles.bottom}>
            <Link to={'/create-account'} className="btn btn__to-home">Keyingi</Link>
        </div>
    </div>
  );
};

export default Confirm;