import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.themoviedb.org/3/'
  }),
  endpoints(builder) {
    return {
      fetchPopularMovies: builder.query({
        query: () => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'popularity.desc',
              api_key: '(PUT_YOUR_API_KEY_HERE)'
            },
            method: 'GET',
          };
        },
      }),
      fetchHighestRatedMovies: builder.query({
        query: () => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'vote_average.desc',
              api_key: '(PUT_YOUR_API_KEY_HERE)'
            },
            method: 'GET',
          };
        },
      }),
      fetchUpcomingMovies: builder.query({
        query: () => {
          return {
            url: 'movie/upcoming',
            params: {
              sort_by: 'release_date.desc',
              api_key: '(PUT_YOUR_API_KEY_HERE)',
            },
            method: 'GET',
          };
        },
      }),
      fetchSearchMovie: builder.query({
        query: (searchTerm) => {
          return {
            url: 'search/movie',
            params: {
              query: searchTerm,
              api_key: '(PUT_YOUR_API_KEY_HERE)'
            },
            method: 'GET',
          };
        },
      }),
      fetchPlayMovieTrailer: builder.query({
        query: (movieTrailerID) => {
          return {
            url: `movie/${movieTrailerID}/videos`,
            params: {
              api_key: '(PUT_YOUR_API_KEY_HERE)',
            },
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchSearchMovieQuery, useFetchUpcomingMoviesQuery, useFetchPlayMovieTrailerQuery} = moviesApi;
export { moviesApi };