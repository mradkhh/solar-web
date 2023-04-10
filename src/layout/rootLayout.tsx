import styles from './styles/layout.module.scss'
import React, {FC} from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

interface IRootLayout {
    children: React.ReactNode
}

const RootLayout: FC<IRootLayout> = ({ children }) => {

    return (
        <main className={styles.root}>
             <Header/>
                 {children}
            <Footer/>
        </main>
    )
}


export default RootLayout