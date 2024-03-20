import { useFetchPopularMoviesQuery } from "../store";
import MovieCard from "./movieCard"

function PopularMoviesList() {                                   
  const {data, error, isFetching } = useFetchPopularMoviesQuery();   
                                  
let content;
  if (isFetching) {
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
export default PopularMoviesList;