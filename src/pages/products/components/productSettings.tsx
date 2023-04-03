import { FC } from 'react';
import Counter from "./counter";
import {Bag2Icon} from "../../../assets/icons";
import InfoItem from "./infoItem";
import styles from './styles/product.module.scss';

type Props = {
  name: string;
  price: string;
  exist: string;
  colors: any;
  info: any
};

const ProductSettings:FC<Props> = ({ info, colors, name, exist, price }) => {


    console.log(colors)

  return (
    <div className={styles.root}>
      <div className={styles.top}>
          <h4>{name}</h4>
          <div>
              <div><span>{price}</span> So'mdan</div>
              <h6>
                  {exist ? `Mavjud: ${exist}` : 'Mavjud emas'}
              </h6>
          </div>
      </div>
        <div className={styles.middle}>
            <div>
                <h5>rangini tanlang</h5>
                <div className={styles.colors_item}>
                    {
                        colors.map((item: string) => <div className={styles.color} style={{ background: item, color: item }}>.</div>)
                    }
                </div>
            </div>
            <div>
                <Counter/>
            </div>
        </div>
        <div className={styles.buttons}>
            <button className="btn btn__white">
                <Bag2Icon/>
                Savatga qo’shish</button>
            <button className="btn btn__black">Sotib Olish</button>
        </div>
        <div className={styles.bottom}>
            <div className={styles.bottom_title}>
                <span>?</span>
                <h4>Tovar Tavsifi</h4>
            </div>
            <div className={styles.info}>
                {   
                    info.map((item: string) => <InfoItem text={item}/>)
                }
            </div>
            <div className="fixed_margin"></div>
        </div>
    </div>
  );
};

export default ProductSettings;