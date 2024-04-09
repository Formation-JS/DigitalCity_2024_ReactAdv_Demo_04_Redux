import { useSelector } from 'react-redux';
import MovieList from '../../components/MovieList/MovieList';

const MovieListMain = () => {

    const movies = useSelector((state: any) => state.movieFeature.movies);

    return (
        <MovieList movies={movies} />
    )
};

export default MovieListMain;