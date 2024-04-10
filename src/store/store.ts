import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movie/movie.reducer';
import reduxLoggerMiddleware from 'redux-logger';
import comicAlbumSlice from './comic-album/comic-album.slice';


const store = configureStore({

    // Les différents reducers du store
    reducer: {
        movieFeature: movieReducer,
        comicFeature: comicAlbumSlice
    },

    // Activer l'outil de dev (Redux devtool)
    devTools: import.meta.env.DEV,

    // Middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLoggerMiddleware)

});

export default store;