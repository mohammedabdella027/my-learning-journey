import React from "react";
import styles from "./MovieCard.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function MovieCard({ movie }) {

    let geners = ['Adventure', 'Action', 'Thriller']

    return (
        <div className={styles.cardWrapper}>
            {/* poster image */}
            <img className={styles.poster} src={movie.poster_path} alt="poster image" />

            {/* hover card  */}
            <div className={styles.hoverCard}>
                {/* img  */}
                <img className={styles.hoverImage} src={movie.poster_path} alt="hover image" />

                {/* badge */}
                <div className={styles.badge}>Recently added</div>

                {/* buttons row */}
                <div className={styles.buttonsRow}>
                    <FaCirclePlay className={styles.circleButton} color="white" size={40} />
                    <BsPlusCircle className={styles.circleButton} color="white" size={40} />
                    <GoCheckCircleFill className={styles.circleButton} color="white" size={40} />
                    <IoIosArrowDropdownCircle className={styles.circleButtonSmall} color="white" size={40} />
                </div>

                {/* metadata row */}
                <div className={styles.metaRow}>
                    <span className={styles.tag}>U/A 16+</span>
                    <span className={styles.tag}>Movie</span>
                    <span className={styles.tag}>HD</span>
                </div>

                {/* geners */}
                <div className={styles.geners}>
                    {
                        geners.map((g, index) => {
                            return <span key={index}>
                                {g}
                                {
                                    index < geners.length - 1 && (
                                        <span className={styles.dot}>•</span>
                                    )
                                }
                            </span>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
