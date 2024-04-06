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
      fetchTvSeries: builder.query({
        query: () => {
          return {
            url: 'discover/tv',
            params: {
              sort_by: 'popularity.desc',
              api_key: '(PUT_YOUR_API_KEY_HERE)'
            },
            method: 'GET',
          };
        },
      }),
      fetchFavoriteMovie: builder.query({
        query: (favoriteMovieID) => ({
          url: `movie/${favoriteMovieID}`,
          params: {
            api_key: '(PUT_YOUR_API_KEY_HERE)',
          },
        }),
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
      fetchJsonFavorite: builder.query({
        query: () => ({
          url: 'http://localhost:3000/MyFavoriteMovies',
          method: 'GET',
        }),
        providesTags: ['Favorites'],
      }),
      addJsonFavorite: builder.mutation({
        query: (movieId) => ({
          url: 'http://localhost:3000/MyFavoriteMovies',
          method: 'POST',
          body: { id: movieId},
        }),
        invalidatesTags: ['Favorites'],
      }),
      removeJsonFavorite: builder.mutation({
        query: (movieId) => ({
          url: `http://localhost:3000/MyFavoriteMovies/${movieId}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Favorites'],
      }),
    };
  },
});

export const { useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchSearchMovieQuery, useFetchUpcomingMoviesQuery, useFetchPlayMovieTrailerQuery, useFetchFavoriteMovieQuery, useFetchJsonFavoriteQuery, useAddJsonFavoriteMutation, useRemoveJsonFavoriteMutation, useFetchTvSeriesQuery} = moviesApi;
export { moviesApi };

