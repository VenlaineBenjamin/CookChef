import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer
            className={`${styles.footer} d-flex flex-row aligne-items-center justify-content-center`}
        >
            <p>Copyright &copy; 2024 CookChef Benjamin Verlaine</p>
        </footer>
    );
}
