import {FC, useState} from 'react';
import RootLayout from "../../layout/rootLayout";
import AppHeader from "../../components/AppHeader/appHeader";
import SelectInput from "../../components/inputs/select";
import CustomSelect from "../../components/inputs/select";
import styles from './sign.module.scss';

const options = [
    {
        id: 1,
        name: 'UZ'
    },
    {
        id: 2,
        name: 'RU'
    }
]

const Sign:FC= () => {
    const [ state, setState ] = useState()
  return (
    <RootLayout>
        <AppHeader type={'sign'} text={'Profil'}/>
        <CustomSelect options={options} initialPositon={'UZ'} setState={setState}/>
        <div className={styles.buttons}>
            <button className="btn btn__black">Kirish</button>
            <button className="btn btn__white">Ro’yhatdan o’tish</button>
        </div>

        <h5 className="developed">Developed by <span>ONVETI</span></h5>
    </RootLayout>
  );
};

export default Sign;