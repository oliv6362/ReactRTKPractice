import React from 'react';
import { changeMovieTrailerID } from "../store/slices/playMovieTrailerSlice";
import { useDispatch } from 'react-redux';

function TvSeriesCard({ TvSeries }) {
    const dispatch = useDispatch();

    const handlePlayClick = () => {
        dispatch(changeMovieTrailerID(TvSeries.id));
    }

    const posterBasePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

    return (
        <div className="col-lg-2 mb-4">
            <div className="card">
                <img src={posterBasePath + TvSeries.poster_path} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title "><span>{TvSeries.name.substring(0, 200)}</span></h5>
                    <span className="far fa-star" aria-hidden="true"></span>
                    <span className="ml-1">{TvSeries.vote_average}</span>
                    <p className="card-text">{TvSeries.overview.substring(0, 125).concat('....')}</p>

                    <div className="d-flex justify-content-between p-0">
                        <span className="far fa-calendar" aria-hidden="true"> {TvSeries.first_air_date}</span>
                        <span className="far fa-play-circle" onClick={handlePlayClick}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default TvSeriesCard;