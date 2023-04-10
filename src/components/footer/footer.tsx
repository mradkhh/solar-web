import { FC } from 'react';
import {FacebookIcon, InstagramIcon, LogoSmallIcon, TelegramIcon, WhatsAppIcon} from "../../assets/icons";
import {Link} from "react-router-dom";
import styles from './footer.module.scss';

const Footer:FC = () => {
  return (
    <div className={styles.root}>
        <div className={styles.content + ' container'}>
            <div>
                <LogoSmallIcon/>
            </div>
            <div className={styles.footer_items}>
                <div>
                    <h5>На сайте</h5>
                    <ul>
                        <li>
                            <Link to={'/'}>О нас</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Решение</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Сервисный центр</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Наши работы</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Для инвесторов</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Контакты</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>Наши продукции</h5>
                    <ul>
                        <li>
                            <Link to={'/'}>Солнечные панели</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Солнечные инверторы</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Аккумляторная батарея</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <h5>Наши контакты</h5>
                    <ul>
                        <li>
                            103445, г. Ташкент,
                            ул. Ш.Арипар, 96А
                        </li>
                        <li>+998-71-778-78-78</li>
                        <li>+998-71-788-87-78</li>
                        <li>info@ies.uz</li>
                    </ul>
                    <div className={styles.social}>
                        <ul>
                            <li>
                                <a href="/"><InstagramIcon/></a>
                            </li>
                            <li>
                                <a href="/"><TelegramIcon/></a>
                            </li>
                            <li>
                                <a href="/"><FacebookIcon/></a>
                            </li>
                            <li>
                                <a href="/"><WhatsAppIcon/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.bottom + ' container'}>
            <h6>2023. Все права защищены Solar.uz</h6>
            <div>Создание сайта <span>Supersite</span></div>
        </div>
      </div>
  );
};

export default Footer;