import { FC } from 'react';
import RootLayout from "../../layout/rootLayout";
import About from "../../components/sections/about";
import styles from './about.module.scss';
import HowWork from "../../components/sections/how_work";
import Certificate from "../contact/components/certificate";
import Gallery from "./components/gallery";
import Clients from "./components/clients";


const AboutUs:FC = () => {
  return (
    <RootLayout>
      <About type={'page'}/>
      <HowWork/>
        <Certificate/>
        <Gallery/>
        <Clients/>
    </RootLayout>
  );
};

export default AboutUs;