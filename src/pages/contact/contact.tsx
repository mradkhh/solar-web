import { FC } from 'react';
import RootLayout from "../../layout/rootLayout";
import ContactUs from "../../components/sections/contact_us";
import styles from './contact.module.scss';



const ContactUsPage:FC = () => {
  return (
    <RootLayout>
        <ContactUs/>

    </RootLayout>
  );
};

export default ContactUsPage;