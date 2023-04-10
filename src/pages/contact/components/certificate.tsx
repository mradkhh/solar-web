import { FC } from 'react';
import Title from "../../../components/UI/title/title";
import styles from './certificate.module.scss';
import {BgVector} from "../../../assets/icons";


const Certificate:FC = () => {
  return (
    <div className={styles.root}>
        <div className={styles.content + ' container'}>
            <Title type={'black'} title={'Наши сертификаты'}/>
            <div>
                <div className={styles.left}>
                    <p>Касательно качества, эффективности и долговечности, Solar Nature является ведущим поставщиком солнечных фотоэлектрических систем в Узбекистане. Компания была основана в 2014 году как дистрибьютор солнечных фотоэлектрических модулей и инверторов. В 2016 году компания расширила свой бизнес, предлагая инженерно-строительные услуги в секторе возобновляемых источников энергии в стране.</p>

                </div>
                <div className={styles.right}>
                    <div>
                        <img src="/serf1.png" alt="serf1"/>
                        <img src="/serf2.png" alt="serf2"/>
                    </div>
                </div>
            </div>
        </div>
        <span><BgVector/></span>
    </div>
  );
};

export default Certificate;