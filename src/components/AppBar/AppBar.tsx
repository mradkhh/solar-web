import styles from './styles/root.module.scss'
import AppBarItem from "./AppBarItem";
import {BagIcon, CategoryIcon, HeartIcon, HomeIcon, ProfileIcon} from "../../assets/icons";
import {useState} from "react";

const AppBar = () => {

    const [ active, setActive ] = useState<boolean>(false)

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <AppBarItem active={active} setActive={setActive} to={'/'} key={1} icon={<HomeIcon/>} text={"Главная"}/>
                <AppBarItem active={active} setActive={setActive} to={'/category'} key={1} icon={<CategoryIcon/>} text={"Категории"}/>
                <AppBarItem active={active} setActive={setActive} to={'/favourites'} key={1} icon={<HeartIcon/>} text={"Избранное"}/>
                <AppBarItem active={active} setActive={setActive} to={'/bags'} key={1} icon={<BagIcon/>} text={"Корзина"}/>
                <AppBarItem active={active} setActive={setActive} to={'/profile'} key={1} icon={<ProfileIcon/>} text={"Профиль"}/>
            </div>
        </div>
    )
}


export default AppBar