import { FC } from 'react';
import styles from './styles/contact.module.scss';
import {ArrowIcon, CallIcon, MapIcon, MsgIcon} from "../../assets/icons";



const ContactUs:FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.map}>
          <img src="/map.png" alt="map"/>
      </div>
      <div className={styles.form}>
          <h3>Бесплатная консультация</h3>
          <p>Оставьте свои контакты чтобы наши специалисты связались с вами</p>
          <form>
              <label htmlFor="name">
                  <input type="text" />
              </label>
              <label htmlFor="number">
                  <input type="text" placeholder={"Ваш телефон номер"}/>
              </label>
              <label htmlFor="name">
                  <textarea rows={1} cols={100} placeholder={"Оставьте сообщение"} />
              </label>
              <button className="btn btn_text">Отправить <ArrowIcon/></button>
          </form>
          <div className={styles.info}>
              <div className={styles.info_top}>
                  <div className={styles.info_item}>
                      <span><CallIcon/></span>
                      <div>
                          <h6>+998-71-234-31-35</h6>
                          <h6>+998-71-867-87-45</h6>
                      </div>
                  </div>
                  <div className={styles.info_item}>
                      <span><MapIcon/></span>
                      <p>100788, г. Ташкент,
                          ул. Ш. Тимура, 91А</p>
                  </div>
              </div>
              <div className={styles.info_item}>
                  <span><MsgIcon/></span>
                  <p>info@site.uz</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ContactUs;