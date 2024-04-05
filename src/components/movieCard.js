import React from 'react';
import { useDispatch } from 'react-redux';
import { changeMovieTrailerID } from '../store/slices/playMovieTrailerSlice';
import { useAddJsonFavoriteMutation, useRemoveJsonFavoriteMutation } from '../store';


function MovieCard({ movie }) {
    const dispatch = useDispatch();
    const handlePlayClick = () => {
        dispatch(changeMovieTrailerID(movie.id));
    };



    const [addFavorite] = useAddJsonFavoriteMutation();
    const [removeFavorite] = useRemoveJsonFavoriteMutation();

    const toggleFavorite = async () => {
        try {
            if (movie.isFavorite) {
                await removeFavorite(movie.id.toString()).unwrap();
            } else {
                await addFavorite(movie.id.toString()).unwrap();
            }
        } catch (error) {
            console.error('Failed to toggle favorite', error);
        }
    };


    const posterBasePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

    return (
        <div className="col-lg-2 mb-4">
            <div className="card">
                <img src={posterBasePath + movie.poster_path} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title ">
                        <span>{movie.title.substring(0, 200)}</span>
                    </h5>

                    <span className={`fa-star ${movie.isFavorite ? 'fas' : 'far'}`} onClick={toggleFavorite} style={{ cursor: 'pointer' }}></span>

                    <span className="ml-1">{movie.vote_average}</span>

                    <p className="card-text">{movie.overview.substring(0, 125).concat('....')}</p>

                    <div className="d-flex justify-content-between p-0">
                        <span className="far fa-calendar" aria-hidden="true"> {movie.release_date}</span>
                        <span className="far fa-play-circle" onClick={handlePlayClick}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
