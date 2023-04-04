import {FC, useState} from 'react';
import styles from './countires.module.scss';
import {ArrowLeftIcon} from "../../assets/icons";
import CustomSelect from "../../components/inputs/select";
import AppHeader from "../../components/AppHeader/appHeader";


const viloyat = [
    { id: 1, name: 'Samarqand'},
    { id: 2,name: 'Andijon' },
    { id: 3,name: 'Navoi' },
    { id: 4,name: 'Jizzax' },
    { id: 5,name: 'Sirdaryo' },
    { id: 6,name: 'Xorazm' },
    { id: 7,name: 'Buxoro' },
    { id: 8,name: 'Qashqadaryo' },
    { id: 9,name: 'Surxondaryo' },
    { id: 10,name: 'Guliston' },
    { id: 11,name: "Farg'ona" },
    { id: 12,name: 'Toshkent' },
    { id: 13,name: 'Nukus' },
]

const tuman = [
    { id: 1, name: 'Chilonzor'},
    { id: 2,name: 'Yunusobod' },
    { id: 3,name: 'Sergeli' },
    { id: 4,name: 'Mirobod' },
    { id: 5,name: 'Yangiobod' },
    { id: 6,name: 'Yashnaobod' },
    { id: 7,name: 'Mirzo Ulug’bek' }
]


const Countries:FC = () => {
    const [ state, setState ] = useState()
  return (
    <div className={styles.root + ' container'}>
        <AppHeader
            left={<ArrowLeftIcon/>}
            center={false}
            right={false}
            type={'countries'}
            text={'Shaharni tanlang'}
        />
        <div className="fixed_height-60"></div>
        <h1>Shaxar tanlang</h1>
        <p>Buyurtmangizni yetkazib berishimiz uchun iltimos
          yetkazib berish manzilini kiriting</p>

        <CustomSelect
            label={'Shahar (Viloyat) *'}
            options={viloyat}
            initialPositon={'Viloyatni tanlang'}
            setState={setState}
        />
        <CustomSelect
            label={"Tuman *"}
            options={tuman}
            initialPositon={'Tumanni tanlang'}
            setState={setState}
        />

        <button className="btn btn__to-home">Keyingi</button>
    </div>
  );
};

export default Countries;