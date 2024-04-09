import { PrepareAction, createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Movie, MovieData, MovieDataUpdate } from '../../types/movie';

// Action Creators 
// -> Méthode qui créer les objets "action" pour le store Redux

//? Supprimer un film
// (Oldschool)
export const movieDelete_Old = (movieId: string) => {
    return {
        type: 'movie/delete',
        payload: movieId
    };
};
export const movieDelete = createAction<string>('movie/delete');


//? Ajouter un film
// (Oldschool)
export const movieAdd_Old = (data : MovieData) => {
    return {
        type: 'movie/add',
        payload: {
            ...data,
            id: nanoid()
        }
    };
};
export const movieAdd = createAction<PrepareAction<Movie>>('movie/add', (data: MovieData) => {
    return {
        payload: {
            ...data,
            createAt: new Date().toISOString(),
            id: nanoid()
        }
    }
});

//? Modifier un film
export const movieUpdate = createAction('movie/update', (movie: MovieDataUpdate) => ({
    payload: {
        ...movie,
        updateAt: new Date().toISOString()
    }
}));

//? Ranking d'un film
export type MovieRankingType = { movieId: string, rank: number };
export const movieRanking = createAction<MovieRankingType>('movie/ranking');

//? Selection un film
export const movieSelect = createAction<string>('movie/select');