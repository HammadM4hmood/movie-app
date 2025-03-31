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