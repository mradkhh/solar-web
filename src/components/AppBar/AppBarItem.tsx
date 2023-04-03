import styles from './styles/root.module.scss'
import {HomeIcon} from "../../assets/icons";
import {FC} from "react";
import {NavLink} from "react-router-dom";

interface IAppBarItem {
    icon: JSX.Element
    text: string,
    active: boolean,
    to: string,
    setActive: (bool: boolean) => void,
}

const AppBarItem: FC<IAppBarItem> = ({ text, icon , to, active, setActive}) => {

    const handleChange = () => {
        setActive(true);
    };

    return (
        <NavLink
            to={to}
            onClick={handleChange}
            className={active ? 'active-bar' : ''}
            >
            <div className={styles.item__root}>
                <span>
                    {icon}
                </span>
                <h4>{text}</h4>
            </div>
        </NavLink>
    )
}

export default AppBarItem