import {ChangeEvent, FC} from 'react';
import styles from './styles/inputs.module.scss';

type Props = {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange:  (event: ChangeEvent<HTMLInputElement>) => void;
};

const TextInput:FC<Props> = ({ name, label, placeholder, onChange, value }) => {
  return (
    <div className={styles.textinput_root}>
        <label htmlFor={name}>{label}</label>
        <input value={value} onChange={onChange} type="text" name={name} placeholder={placeholder}/>
    </div>
  );
};

export default TextInput;