import React from 'react';
import MovieCard from './movieCard';

const FavoriteMovieMerger = ({ movies, favorites }) => {
    // Merge the `isFavorite` flag into the movies list
    const moviesWithFavorites = movies.map(movie => ({
        ...movie,
        isFavorite: favorites.some(favorite => favorite.id.toString() === movie.id.toString()),
    }));
    

    return (
        <div className="row row-cols-3 row-cols-md-2 m-4"> 
            {moviesWithFavorites.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default FavoriteMovieMerger;
