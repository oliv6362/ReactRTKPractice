import { useFetchTvSeriesQuery } from "../../store";
import TvSeriesCard from "../tvSeriesCard"

function TvSeriesList() {                                   
  const {data, error, isFetching } = useFetchTvSeriesQuery();   
                                  
let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading Tv Series.</div>;
  } else {
    content = data.results.map((TvSeries) => {
      return <TvSeriesCard key={TvSeries.id} TvSeries={TvSeries}></TvSeriesCard>
    });
  }
    return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
}
export default TvSeriesList;