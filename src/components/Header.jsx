import { useState } from "react";
import cookchef from "../assets/image/cookchef.png";
import styles from "./Header.module.scss";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header
            className={`${styles.header} d-flex flex-row align-items-center`}
        >
            <div className="flex-fill">
                <img src={cookchef} alt="logo cookchef" />
            </div>
            <ul className={styles.headerList}>
                <button className="mr-5 btn btn-reverse-primary">
                    <i className="fa-solid fa-heart mr-5"></i>
                    <span>liste de souhaits</span>
                </button>
                <button className="btn btn-primary">connexion</button>
            </ul>
            <i
                onClick={() => setShowMenu(true)}
                className={`${styles.headerXs} fa-solid fa-bars mr-15`}
            ></i>
            {showMenu && (
                <>
                    <div
                        onClick={() => setShowMenu(false)}
                        className="calc"
                    ></div>
                    <HeaderMenu />
                </>
            )}
        </header>
    );
}
