import { FC } from 'react';
import AppHeader from "../../components/AppHeader/appHeader";
import TextInput from "../../components/inputs/text_input";
import useRegisterForm from "../../hooks/useRegisterForm";
import {ArrowLeftIcon} from "../../assets/icons";
import styles from './register.module.scss';
import PasswordInput from "../../components/inputs/password_input";



const CreateAccount:FC = () => {

    const { values, errors, handleChange, handleSubmit } = useRegisterForm();

  return (
    <div className={styles.root + ' container'}>
        <AppHeader to={'/register/confirm'} type={'register'} text={''} center={false} left={<ArrowLeftIcon/>}/>
        <div className="fixed_height-60"></div>
        <h1>Hisob yaratish</h1>
        <TextInput value={values.firstName} onChange={handleChange} name={'firstName'} label={'Ism *'} placeholder={'Ism'}/>
        <TextInput value={values.lastName} onChange={handleChange} name={'lastName'} label={'Familiya (ixtiyoriy)'} placeholder={'Familya'}/>
        <PasswordInput value={values.password} handleChange={handleChange} name={'password'} label={'Parol'} placeholder={'Parol'}/>
        <PasswordInput value={values.confirmPassword} handleChange={handleChange} name={'confirmPassword'} label={'Parolni takrorlang'} placeholder={'Parolni takrorlang'}/>

        <div className={styles.bottom}>
            <button onClick={handleSubmit} className="btn btn__to-home">Yaratish</button>
        </div>
    </div>
  );
};

export default CreateAccount;