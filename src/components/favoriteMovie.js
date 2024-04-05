import React from 'react';
import { useFetchFavoriteMovieQuery } from '../store';
import MovieCard from "./movieCard"


const FavoriteMovie = ({ movieId, isFavorite }) => {

    const { data: movie, error, isFetching } = useFetchFavoriteMovieQuery(movieId.id);
    

    let content;
    if (isFetching) {
        content = <div>Loading;</div>
    } else if (error) {
        content = <div>Error loading movies.</div>;
    } else if (!movie) {
        content = <div>Movie not found.</div>;
    }
    else {
        return <MovieCard movie={{ ...movie, isFavorite }}></MovieCard>
    }

    return (
        <div className="row row-cols-3 row-cols-md-2 m-4">
            {content}
        </div>
    );
}
export default FavoriteMovie;


