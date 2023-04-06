import { FC } from 'react';
import styles from './registration.module.scss';
import AppHeader from "../../components/AppHeader/appHeader";
import {ArrowLeftIcon} from "../../assets/icons";
import TextInput from "../../components/inputs/text_input";
import {Link} from "react-router-dom";



const CreateAccount:FC = () => {
  return (
    <div className={styles.root + ' container'}>
        <AppHeader to={'/registration/confirm'} type={'registration'} text={''} center={false} left={<ArrowLeftIcon/>}/>
        <div className="fixed_height-60"></div>
        <h1>Hisob yaratish</h1>
        <TextInput name={'first_name'} label={'Ism *'} placeholder={'Ism'}/>
        <TextInput name={'last_name'} label={'Familiya (ixtiyoriy)'} placeholder={'Familya'}/>
        <TextInput name={'password'} label={'Parol'} placeholder={'Parol'}/>
        <TextInput name={'confirm_password'} label={'Parolni takrorlang'} placeholder={'Parolni takrorlang'}/>


        <div className={styles.bottom}>
            <Link to={'/create-account'} className="btn btn__to-home">Yaratish</Link>
        </div>
    </div>
  );
};

export default CreateAccount;