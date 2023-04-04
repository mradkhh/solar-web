import {FC, useState} from 'react';
import RootLayout from "../../layout/rootLayout";
import AppHeader from "../../components/AppHeader/appHeader";
import ProfileHead from "./components/profile_head";
import OptionsItem from "./components/options_item";
import Modal from "../../components/Modal/modal";
import LogoutModal from "./components/logout_modal";
import ProfileEdit from "./components/profile_edit";
import {GlobeIcon, LogOutIcon, ShopingBagIcon, UserIcon} from "../../assets/icons";


const Profile:FC = () => {
    const [ showModal, setShowModal ] = useState<boolean>(false);
    const [ showProfileEdit, setShowProfileEdit ] = useState<boolean>(false);

  return (
    <RootLayout>
        <AppHeader type={'bags'} text={'Profil'}/>
        <ProfileHead name={'Adkhambek'} number={'+998910039937'} fullname={'Adkhambek Yusupov'}/>
        <OptionsItem setState={setShowProfileEdit} text={'buyurtmalarim'} icon={<ShopingBagIcon/>}/>
        <OptionsItem setState={setShowProfileEdit} text={'Profil'} icon={<UserIcon/>}/>
        <OptionsItem setState={setShowProfileEdit} text={'Ilova tili'} icon={<GlobeIcon/>}/>
        <OptionsItem setState={setShowModal} type={'exit'} text={'chiqish'} icon={<LogOutIcon/>}/>
        { showProfileEdit ? <ProfileEdit setState={setShowProfileEdit}/> : null }

        <h5 className="developed">Developed by <span>ONVETI</span></h5>
        <Modal setShow={setShowModal} show={showModal}>
            <LogoutModal setShow={setShowModal}/>
        </Modal>
    </RootLayout>
  );
};

export default Profile;