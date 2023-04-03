import { FC } from 'react';
import styles from './styles/inputs.module.scss';
import {SearchIcon} from "../../assets/icons";

type Props = {
  text: string;
};

const SearchInput:FC<Props> = ({ text }) => {
  return (
    <div className={styles.search__root}>
        <span>
            <SearchIcon/>
        </span>
        <input className={'input input__search'} type="text" placeholder={"Mahsulot va toifalarni qidirsh"}/>
    </div>
  );
};

export default SearchInput;