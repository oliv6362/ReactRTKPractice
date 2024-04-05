
import React from "react";
import { useFetchPlayMovieTrailerQuery } from '../store';
import { useSelector } from 'react-redux';
import TrailerCard  from "./trailerCard";

function PlayedMovieTrailer() {

    const movieTrailerID = useSelector((state) => {
        return state.playMovieTrailer.movieTrailerID;
    });

    const { data, error, isFetching } = useFetchPlayMovieTrailerQuery(movieTrailerID);

    let content;
    if (isFetching) {
        content = <div>Loading;</div>
    } else if (error) {
        content = <div>Error loading movies.</div>;
    } else if (data && data.results && data.results.length > 0) {

        const trailerData = data.results.find(video => video.type === "Trailer" && video.site === "YouTube");
        if (trailerData) {
            content = <TrailerCard key={trailerData.id} trailer={trailerData} />;
        } else {
            content = <div>No trailer available.</div>;
        }
    } else {
        content = <div>No data found.</div>;
    }

    return <div>{content}</div>;
}

export default PlayedMovieTrailer;
