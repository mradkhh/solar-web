import { FC } from 'react';
import RootLayout from "../../layout/rootLayout";
import AppHeader from "../../components/AppHeader/appHeader";


const Profile:FC = () => {
  return (
    <RootLayout>
        <AppHeader type={'bags'} text={'Profil'}/>
    </RootLayout>
  );
};

export default Profile;