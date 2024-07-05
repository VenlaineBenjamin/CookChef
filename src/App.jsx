import styles from "./App.module.scss";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
    return (
        <div className={`d-flex flex-column ${styles.appContainer}`}>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}
