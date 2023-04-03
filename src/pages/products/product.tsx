import { FC } from 'react';
import RootLayout from "../../layout/rootLayout";
import MySwiper from "../../components/Swiper/mySwiper";
import ProductSettings from "./components/productSettings";


const img_url = [ '/iman.png',  '/iman.png',  '/iman.png',  '/iman.png',  '/iman.png',  '/iman.png',  '/iman.png']

const product__info = [
    'iPhone 14 Pro Max',
    'Operatsion tizim: iOS',
    'Protsessor: Apple A16 Bionic',
    'Ekran o\'lchamlari: 2796x1290',
    'Ekranni yangilash tezligi: 120 Gts',
    'Operativ xotira: 8 GB, 256 GB',
    'Ekran o\'lchamlari formati: Full HD',
    'iPhone 14 Pro Max',
    'Operatsion tizim: iOS',
    'Protsessor: Apple A16 Bionic',
    'Ekran o\'lchamlari: 2796x1290',
    'Ekranni yangilash tezligi: 120 Gts',
    'Operativ xotira: 8 GB, 256 GB',
    'Ekran o\'lchamlari formati: Full HD'
]

const colors = ['#DAC8AF', '#000000', '#D540F3', '#F1F3F2']

const Product:FC = () => {
  return (
    <RootLayout>
        <div className={'mySwiper'}>
          <MySwiper item={img_url}/>
        </div>
        <ProductSettings
            name={'iPhone 14 Pro Max'}
            price={'12 250 650'} exist={'167'}
            colors={colors}
            info={product__info}
        />
    </RootLayout>
  );
};

export default Product;