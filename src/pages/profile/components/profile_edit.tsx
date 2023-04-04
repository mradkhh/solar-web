import { FC } from 'react';
import styles from './components.module.scss';
import TextInput from "../../../components/inputs/text_input";

type Props = {
    setState: (bool: boolean) => void
}

const ProfileEdit:FC<Props> = ({ setState }) => {


    const handleClick = (e) => {
        e.preventDefault()
        setState(false)
    }

  return (
    <div className={styles.profile__edit_wrapper}>
        <div className={styles.profile__edit}>
            <form className={styles.form}>
                <TextInput name={'first_name'} label={'ism'} placeholder={'Ism'}/>
                <TextInput name={'last_name'} label={'familiya (ixtiyoriy)'} placeholder={'Familiya'}/>
                <TextInput name={'number'} label={'telefon raqam'} placeholder={'Telefon raqam'}/>
                <button onClick={handleClick} className={'btn btn__black'}>Saqlash</button>
            </form>
        </div>
    </div>
  );
};

export default ProfileEdit;