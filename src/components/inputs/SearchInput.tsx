import { FC } from 'react';
import styles from './styles/inputs.module.scss';
import {SearchIcon} from "../../assets/icons";

type Props = {
  text: string;
};

const SearchInput:FC<Props> = ({ text }) => {
  return (
      <div className={styles.search__wrapper}>
          <div className={styles.search__root}>
              <div className={styles.input__wrapper}>
            <span>
             <SearchIcon/>
            </span>
                  <input className={'input input__search'} type="text" placeholder={"Mahsulot va toifalarni qidirsh"}/>
              </div>
          </div>
      </div>
  );
};

export default SearchInput;