import { useCallback } from 'react';
import MovieForm from '../../components/MovieForm/MovieForm';
import { MovieData } from '../../types/movie';
import { useDispatch } from 'react-redux';
import { movieAdd } from '../../store/movie/movie.action';

const MovieFormAdd = () => {

    // Obtenir le dispatcher du store Redux
    const dispatch = useDispatch();

    const handleAddMovie = useCallback((movie: MovieData) => {
        
        // On utilise le dispatcher pour envoyer l'action au store
        dispatch(movieAdd(movie));

    }, [dispatch]);

    return (
        <MovieForm 
            btnSubmitName='Ajouter'
            onMovieSubmit={handleAddMovie} />
    )
}

export default MovieFormAdd;