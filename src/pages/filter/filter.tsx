import {FC, useState} from 'react';
import AppHeader from "../../components/AppHeader/appHeader";
import {ArrowLeftBlueIcon} from "../../assets/icons";
import CustomSelect from "../../components/inputs/select";
import Colors from "./components/colors";
import styles from './filter.module.scss';

const categories = [
    { id: 1, name: 'smartfon gadjet'},
    { id: 2,name: 'quloqchinlar' },
    { id: 3,name: 'Airpods' },
    { id: 4,name: 'plastik shisha' },
    { id: 5,name: 'chehol' },
    { id: 6,name: 'pover bank' },
    { id: 7,name: 'kalonka' },
    { id: 8,name: 'simsiz zaryadlovchi' },
    { id: 9,name: 'noutbook' },
    { id: 10,name: 'macbook monitor' },
]

const brands = [
    { id: 1, name: 'samsung'},
    { id: 2,name: 'apple' },
    { id: 3,name: 'Xiaomi' },
    { id: 4,name: 'artel' },
    { id: 5,name: 'lG' },
    { id: 6,name: 'redmi' },
    { id: 7,name: 'redmi' }
]

const colors = [ '#FFFFFF', '#000000', '#667B8C', '#FF0000', '#781ECD', '#006CFF', '#64C108', '#50FFF9', '#55FFAA', '#FFAAD3', '#FFE600', '#F9F9F9']

const Filter:FC = () => {
    const [ state, setState ] = useState()

  return (
    <div className={styles.root + ' container'}>
      <AppHeader
          type={'filter'}
          text={'Filter'}
          left={<ArrowLeftBlueIcon/>}
          right={'Tozalash'}
      />
        <div className="fixed_height-60"></div>
        <div className="fixed_height-60"></div>

        <CustomSelect
            label={'Kategoriya'}
            options={categories}
            initialPositon={'Kategoriyani tanlang'}
            setState={setState}
        />
        <CustomSelect
            label={'Brend'}
            options={brands}
            initialPositon={'Brendni tanlang'}
            setState={setState}
        />

        <label htmlFor="colors">Rang</label>
        <div className={styles.colors}>
            {
                colors.map((item: string) => <Colors color={item}/>)
            }
        </div>

            <button className="btn btn__to-home">Qo’llash</button>

    </div>
  );
};

export default Filter;