import { FC } from 'react';
import {EnFlagIcon, Logo, RuFlagIcon, UzFlagIcon} from "../../assets/icons";
import styles from './header.module.scss';
import {NavLink} from "react-router-dom";


const Header:FC = () => {
  return (
    <div className={styles.root_wrapper}>
      <div className={styles.root + ' container'}>
          <div className={styles.logo}>
              <Logo/>
          </div>
          <div className={styles.right}>
              <nav className={styles.navbar}>
                  <ul>
                      <li>
                          <NavLink to={'/about'}>О нас</NavLink>
                      </li>
                      <li>
                          <NavLink to={'/solutions'}>Решение</NavLink>
                      </li>
                      <li>
                          <NavLink to={'/products'}>Продукция</NavLink>
                      </li>
                      <li>
                          <NavLink to={'/center'}>Сервисный центр</NavLink>
                      </li>
                      <li>
                          <NavLink to={'/our-work'}>Наши работы</NavLink>
                      </li>
                      <li>
                          <NavLink to={'/interest'}>Для инвесторов</NavLink>
                      </li>
                      <li>
                          <NavLink to={'/contact-us'}>Контакты</NavLink>
                      </li>
                  </ul>
              </nav>
              <div className={styles.langs}>
                  <div>
                      <UzFlagIcon/>
                  </div>
                  <div>
                      <RuFlagIcon/>
                  </div>
                  <div>
                      <EnFlagIcon/>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Header;