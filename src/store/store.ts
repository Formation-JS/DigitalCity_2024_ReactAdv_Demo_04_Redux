import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movie/movie.reducer';


const store = configureStore({

    // Les différents reducers du store
    reducer: {
        movieFeature: movieReducer
    },

    // Activer l'outil de dev (Redux devtool)
    devTools: import.meta.env.DEV

});

export default store;