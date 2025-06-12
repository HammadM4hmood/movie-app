/** Christopher Findlay, Hammad Mahmood, Samuel Kyle Yung, Gurnoor Singh | April 1st, 2025
 * Assignment 3 - Full-Stack Web Application
 *
 * This component renders a list of movies using the Movie component.
 * It receives an array of movie objects as a prop named 'movie'.
 * The component maps over the 'movie' array, rendering a Movie component for each movie object.
 * Each Movie component receives a unique key based on the movie's ID.
 */

import React from 'react'
import Movie from './Movie'

const MovieList = ({movie}) => {
  return (
    <ul>
        {movie.map((movie) => (
            <Movie movie={movie} key={movie.id} />
        ))}
    </ul>
  )
}

export default MovieList