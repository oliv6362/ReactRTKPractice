import React from 'react';
import { useFetchSearchMovieQuery, useFetchJsonFavoriteQuery } from '../../store';
import { useSelector } from 'react-redux';
import FavoriteMovieMerger from '../favoriteMovieMerger';

function SearchedMovieList() {

    const searchTerm = useSelector((state) => {
        return state.searchMovie.searchTerm;
    });

    const { data: moviesData, error, isLoading } = useFetchSearchMovieQuery(searchTerm);
    const movies = moviesData?.results;
    const { data: favorites, isLoading: isLoadingFavorites } = useFetchJsonFavoriteQuery();

    let content;
    if (isLoading || isLoadingFavorites) {
        content = <div>Loading;</div>
    } else if (error) {
        content = <div>Error loading movies.</div>;
    } else {
        return (
            <FavoriteMovieMerger movies={movies} favorites={favorites} />
        );
    }

    return (
        <div className="row row-cols-3 row-cols-md-2 m-4">
            {content}
        </div>
    );
}

export default SearchedMovieList;