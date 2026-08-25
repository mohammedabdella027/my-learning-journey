import React from 'react'
import styles from './DisplayRow.module.css'
import SlideShow from '../SlideShow/SlideShow'
import { movies } from '../../Data/Data'

function DisplayRow() {
    return (
        <div className={styles.mainWrapper}>
            <SlideShow title="Movie suggestions" movies={movies} />
            <SlideShow title="Popular on Netflix" movies={movies} />
            <SlideShow title="Trending Now" movies={movies} />
            <SlideShow title="New Releases" movies={movies} />
        </div>
    )
}

export default DisplayRow
