import { FC } from 'react';
import MySwiper, {IData} from "../../../components/swiper/mySwiper";
import styles from './styles/index.module.scss';


const data: IData[] = [
  { title: 'Ведущий поставщик решений для солнечных фотоэлектрических установок',
    subtitle: 'Мы предлагаем ряд решений с установкой EPC под ключ',
    button: 'Связаться  с нами'
  },
  { title: '2. Ведущий поставщик решений для солнечных фотоэлектрических установок',
    subtitle: 'Мы предлагаем ряд решений с установкой EPC под ключ',
    button: 'Связаться  с нами'
  },
  { title: '3. Ведущий поставщик решений для солнечных фотоэлектрических установок',
    subtitle: 'Мы предлагаем ряд решений с установкой EPC под ключ',
    button: 'Связаться  с нами'
  },
  { title: '3. Ведущий поставщик решений для солнечных фотоэлектрических установок',
    subtitle: 'Мы предлагаем ряд решений с установкой EPC под ключ',
    button: 'Связаться  с нами'
  },
  { title: '3. Ведущий поставщик решений для солнечных фотоэлектрических установок',
    subtitle: 'Мы предлагаем ряд решений с установкой EPC под ключ',
    button: 'Связаться  с нами'
  },
]
const Hero:FC = () => {
  return (
    <div className={styles.root_hero}>
        <div>
          <MySwiper data={data}/>
        </div>
    </div>
  );
};

export default Hero;