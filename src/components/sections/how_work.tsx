import { FC } from 'react';
import Title from "../UI/title/title";
import HowWorkItem from "./components/how_work_item";
import styles from './styles/howwork.module.scss';



const HowWork:FC = () => {



  return (
    <div className={styles.root}>
        <div className={styles.content + ' container'}>
            <div className={styles.left}>
                <Title type={'white'} title={'Как мы работаем?'}/>
                <HowWorkItem
                    title={'Рассчитайте площадь'}
                    subtitle={'Заполните форму обратной связи, чтобы наши специалисты моглис вами связаться'}
                    color={'#F5921D'}
                    number={'1'}
                />
                <HowWorkItem
                    title={'Выберите продукцию'}
                    subtitle={'Заполните форму обратной связи, чтобы наши специалисты могли с вами связаться'}
                    color={'#1FB69A'}
                    number={'2'}
                />
                <HowWorkItem
                    title={'Введите свои данные'}
                    subtitle={'Заполните форму обратной связи, чтобы наши специалисты моглис вами связаться'}
                    color={'#F73555'}
                    number={'3'}
                />
                <HowWorkItem
                    title={'Отправьте свою заявку'}
                    subtitle={'Заполните форму обратной связи, чтобы наши специалисты моглис вами связаться'}
                    color={'#0886CC'}
                    number={'4'}
                />
            </div>
            <div className={styles.right}>
                <img src="/work2.png" alt="work"/>
            </div>
        </div>
    </div>
  );
};

export default HowWork;