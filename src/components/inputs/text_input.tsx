import { FC } from 'react';
import styles from './styles/inputs.module.scss';

type Props = {
  name: string;
  label: string;
  placeholder: string;
};

const TextInput:FC<Props> = ({ name, label, placeholder }) => {
  return (
    <div className={styles.textinput_root}>
        <label htmlFor={name}>{label}</label>
        <input type="text" name={name} placeholder={placeholder}/>
    </div>
  );
};

export default TextInput;