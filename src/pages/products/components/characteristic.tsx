import {FC, useState} from 'react';
import styles from './index.module.scss';


const Characteristic:FC = () => {

    const [ activeTab, setActiveTab ] = useState(false)

  return (
    <div className={styles.root}>
        <div className={styles.content + ' container'}>
            <div className={styles.left}>
                <img src="/video.png" alt="product"/>
                <div>
                    <img src="/video.png" alt="products"/>
                    <img src="/video.png" alt="products"/>
                    <img src="/video.png" alt="products"/>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.info_head}>
                    <div className={styles.info_head_left}>
                        <h4>Hi MO 5 LR5-72HBD</h4>
                        <div className={styles.tabs}>
                            <div className={styles.active}>Описание</div>
                            <div className={styles.in_active}>Характеристика</div>
                        </div>
                    </div>
                    <div className={styles.info_head_right}>
                        <p>В наличии</p>
                        <h6>Цена: Договорная</h6>
                        <button className="btn btn_orange">Связаться  с нами</button>
                    </div>

                </div>
                <div className={styles.info_body}>
                    <p>Двухсторонняя солнечная панель мощностью 535-550 Вт с КПД 21%

                        Панель второго поколения класса А

                        основанный на пластине M10, это лучшее решение для сверхбольших электростанций
                        передовая модульная технология обеспечивает превосходную эффективность модуля
                        глобально подтвержденный двусторонний выход энергии
                        высокое качество модуля обеспечивает долгосрочную

                        Двойное терм-упрочненное стекло 2,0+2,0 мм</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Characteristic;