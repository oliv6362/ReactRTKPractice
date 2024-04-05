import React from 'react';
import { useFetchJsonFavoriteQuery } from '../../store';
import FavoriteMovie from '../favoriteMovie';

const FavoriteMovieList = () => {
    
    const { data: favoriteIds, isFetching: isFetchingFavorites } = useFetchJsonFavoriteQuery();

    
    if (isFetchingFavorites) return <div>Loading favorites...</div>;

    return (
        <div className="row row-cols-3 row-cols-md-2 m-4">
            {favoriteIds?.length > 0 ? favoriteIds.map((favoriteMovieId) => (
                <FavoriteMovie key={favoriteMovieId} movieId={favoriteMovieId} isFavorite={true} />
            )) : <div>No favorite movies found.</div>}
        </div>
    );
};

export default FavoriteMovieList;
