import { FC } from 'react';
import styles from './styles/Search.module.scss';

type Props = {
  text: string;
};

const Search:FC<Props> = ({ text }) => {
  return (
    <div className={styles.root}>
      <h1>{text}</h1>
    </div>
  );
};

export default Search;