import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movie/movie.reducer';
import reduxLoggerMiddleware from 'redux-logger';
import comicAlbumSlice from './comic-album/comic-album.slice';
import weatherSlice from './weather/weather.slice';


const store = configureStore({

    // Les différents reducers du store
    reducer: {
        movieFeature: movieReducer,
        comicFeature: comicAlbumSlice,
        weatherFeature: weatherSlice
    },

    // Activer l'outil de dev (Redux devtool)
    devTools: import.meta.env.DEV,

    // Middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLoggerMiddleware)

});

// Typage du state du store Redux ↓
export type StoreState = ReturnType<typeof store.getState>

// Typage du disptacher d'action du store Redux ↓
export type StoreDispatch = typeof store.dispatch

// Export du store ↓
export default store;