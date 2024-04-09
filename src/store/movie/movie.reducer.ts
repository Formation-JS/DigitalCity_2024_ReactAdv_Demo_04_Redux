import { createReducer } from '@reduxjs/toolkit';
import type { MovieWithRating } from '../../types/movie';
import { movieAdd, movieDelete, movieRanking, movieSelect, movieUpdate } from './movie.action';

export type MovieStateType = {
    movies: MovieWithRating[],
    selectedMovie: MovieWithRating | undefined;
};

const movieState: MovieStateType = {
    movies: [],
    selectedMovie: undefined
};

//! Ecriture immutable
/*
const movieReducer = createReducer(movieState, (builder) => {
    // En fonction de l'action, on créer une nouvelle version du state avec les données modifié !
    builder
        .addCase(movieAdd, (state, action) => {
            const movie = action.payload;
            return {
                ...state,
                movies: [...state.movies, movie]
            }
        })
        .addCase(movieDelete, (state, action) => {
            const movieId = action.payload;
            return {
                ...state,
                movies: state.movies.filter(movie => movie.id !== movieId)
            }
        })
        .addCase(movieRanking, (state, action) => {
            const { movieId, rank } = action.payload;
            return {
                ...state,
                movies: state.movies.map(movie => (movie.id !== movieId) ? movie : {...movie, rating: rank})
            };
        })
        .addCase(movieUpdate, (state, action) => {
            const movieData = action.payload;
            return {
                ...state,
                movies: state.movies.map(movie => (movie.id !== movieData.id) ? movie : {...movie, ...movieData})
            };
        })
        .addCase(movieSelect, (state, action) => {
            const movieId = action.payload;
            return {
                ...state,
                selectedMovie: state.movies.find((movie) => movie.id === movieId)
            }
        })
});
*/

//! Ecriture Mutable -> Via Immer !!!
const movieReducer = createReducer(movieState, (builder) => {
    // En fonction de l'action, on les données via le "DraftState" !
    builder
        .addCase(movieAdd, (state, action) => {
            const movie = action.payload;

            state.movies.push(movie);
        })
        .addCase(movieDelete, (state, action) => {
            const movieId = action.payload;

            const index = state.movies.findIndex(movie => movie.id === movieId);
            if (index >= 0) {
                state.movies.splice(index, 1);
            }
        })
        .addCase(movieRanking, (state, action) => {
            const { movieId, rank } = action.payload;

            const movie = state.movies.find(movie => movie.id === movieId);
            if (movie) {
                movie.rating = rank;
            }
        })
        .addCase(movieUpdate, (state, action) => {
            const movieData = action.payload;

            state.movies.map(movie => (movie.id !== movieData.id) ? movie : { ...movie, ...movieData });
        })
        .addCase(movieSelect, (state, action) => {
            const movieId = action.payload;

            state.selectedMovie = state.movies.find((movie) => movie.id === movieId);
        });
});


export default movieReducer;