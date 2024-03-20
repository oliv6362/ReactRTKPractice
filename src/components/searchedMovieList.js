import React from 'react';
import MovieCard from './movieCard';
import { useFetchSearchMovieQuery } from '../store';
import { useSelector} from 'react-redux';

function SearchedMovieList(){

    const searchTerm = useSelector((state) => {
        return state.searchMovie.searchTerm;
    });

    const {data, error, isLoading} = useFetchSearchMovieQuery(searchTerm);

    let content;
    if (isLoading) {
        content = <div>Loading;</div>
    } else if (error) {
        content = <div>Error loading movies.</div>;
    } else {
        content = data.results.map((movie) => {
            return <MovieCard key={movie.id} movie={movie}></MovieCard>
        });
    }

    return (
        <div className="row row-cols-3 row-cols-md-2 m-4">
            {content}
        </div>
    );
}

export default SearchedMovieList;