import { FC } from 'react';
import {FilterIcon, SearchIcon} from "../../assets/icons";
import styles from './styles/inputs.module.scss';

type Props = {
  text: string;
  type?: string
};

const Search_input:FC<Props> = ({ text, type }) => {
  return (
      <div className={styles.search__wrapper + (type ? ' not_header' : '')}>
          <div className={styles.search__root}>
              <div className={styles.input__wrapper}>
                    <span>
                     <SearchIcon/>
                    </span>
                  <input className={'input input__search'} type="text" placeholder={"Mahsulot va toifalarni qidirsh"}/>
              </div>
              {
                  type === 'search' ?
                      <div className={styles.filter_icon}>
                          <FilterIcon/>
                      </div> : null
              }
          </div>

      </div>
  );
};

export default Search_input;