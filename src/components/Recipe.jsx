import { useState } from "react";
import styles from "./Recipe.module.scss";

export default function Recipe({ title, image }) {
    const [liked, setLiked] = useState(false);

    function handlClick() {
        setLiked(!liked);
    }

    return (
        <div onClick={handlClick} className={styles.recipe}>
            <div className={styles.imageContainer}>
                <img src={image} alt="recipe" />
            </div>
            <div
                className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}
            >
                <h3 className="mb-10">{title}</h3>
                <i
                    className={`fa-solid fa-heart ${
                        liked ? "text-primary" : ""
                    }`}
                ></i>
            </div>
        </div>
    );
}
