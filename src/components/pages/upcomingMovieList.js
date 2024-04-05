import { useFetchUpcomingMoviesQuery, useFetchJsonFavoriteQuery } from "../../store";
import FavoriteMovieMerger from '../favoriteMovieMerger';

function UpcomingMovieList() {
    const { data: moviesData, error, isFetching } = useFetchUpcomingMoviesQuery();
    const movies = moviesData?.results;
    const { data: favorites, isLoading: isLoadingFavorites } = useFetchJsonFavoriteQuery();

    let content;
    if (isFetching || isLoadingFavorites) {
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

export default UpcomingMovieList;