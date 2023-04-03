import styles from './styles/layout.module.scss'
import AppBar from "../components/AppBar/AppBar";
import React, {FC} from "react";

interface IRootLayout {
    children: React.ReactNode
}

const RootLayout: FC<IRootLayout> = ({ children }) => {



    return (
        <main className={styles.root + ' container'}>
            <div className="fixed_height-60"></div>
            {
                children
            }
            <AppBar/>
        </main>
    )
}


export default RootLayout