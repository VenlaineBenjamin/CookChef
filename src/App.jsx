import styles from "./App.module.scss"; // Import the styles module or define the styles object
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
    return (
        <div className={`d-flex flex-column ${styles.appContainer}`}>
            <Header />
            {/* <Content /> */}
            <Footer />
        </div>
    );
}
