import { createSlice } from "@reduxjs/toolkit";

const playMovieTrailerSlice = createSlice({
    name: "playMovieTrailer",
    initialState: {
        movieTrailerID: '',
    },
    reducers: {
        changeMovieTrailerID(state, action) {
            state.movieTrailerID = action.payload;
        },
    },
});

export const { changeMovieTrailerID } = playMovieTrailerSlice.actions;
export const playMovieTrailerReducer = playMovieTrailerSlice.reducer;