import { FC } from 'react';
import RootLayout from "../../layout/rootLayout";
import styles from './styles/Home.module.scss';
import Hero from "./sections/hero";
import About from "../../components/sections/about";
import HowWork from "../../components/sections/how_work";
import Products from "../../components/sections/products";
import ContactUs from "../../components/sections/contact_us";

const Home:FC = () => {
  return (
    <RootLayout>
        <Hero/>
        <About type={'page'}/>
        <HowWork/>
        <Products/>
        <ContactUs/>
    </RootLayout>
  );
};

export default Home;