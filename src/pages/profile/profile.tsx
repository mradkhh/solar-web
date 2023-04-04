import {FC, useState} from 'react';
import RootLayout from "../../layout/rootLayout";
import AppHeader from "../../components/AppHeader/appHeader";
import ProfileHead from "./components/profile_head";
import OptionsItem from "./components/options_item";
import {GlobeIcon, LogOutIcon, ShopingBagIcon, UserIcon} from "../../assets/icons";
import Modal from "../../components/Modal/modal";
import LogoutModal from "./components/logout_modal";


const Profile:FC = () => {
    const [ show, setShow ] = useState<boolean>(false)
  return (
    <RootLayout>
        <AppHeader type={'bags'} text={'Profil'}/>
        <ProfileHead name={'Adkhambek'} number={'+998910039937'} fullname={'Adkhambek Yusupov'}/>
        <OptionsItem text={'buyurtmalarim'} icon={<ShopingBagIcon/>}/>
        <OptionsItem text={'Profil'} icon={<UserIcon/>}/>
        <OptionsItem text={'Ilova tili'} icon={<GlobeIcon/>}/>
        <OptionsItem setState={setShow} type={'exit'} text={'chiqish'} icon={<LogOutIcon/>}/>



        <h5 className="developed">Developed by <span>ONVETI</span></h5>
        <Modal setShow={setShow} show={show}>
            <LogoutModal setShow={setShow}/>
        </Modal>
    </RootLayout>
  );
};

export default Profile;