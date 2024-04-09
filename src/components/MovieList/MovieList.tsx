import { MovieWithRating } from '../../types/movie';

//! MovieListItem
type MovieListItemProps = MovieWithRating & {
    onDelete: (id: string) => void,
    onUpdate: (id: string) => void;
};

const MovieListItem = ({ id, name, duration, desc, onDelete, onUpdate }: MovieListItemProps) => (
    <div>
        <p>{name} ({duration} minutes)</p>
        <p>{desc}</p>
        <div>
            <button onClick={() => onUpdate(id)}>Modifier</button>
            <button onClick={() => onDelete(id)} >Supprimer</button>
        </div>
    </div>
);

//! MovieList
type MovieListProps = {
    movies: MovieWithRating[];
    onMovieUpdate: (id: string) => void;
    onMovieDelete: (id: string) => void;
};

const MovieList = ({ movies, onMovieUpdate, onMovieDelete }: MovieListProps) => {

    const moviesJSX = movies.map(
        movie => <MovieListItem {...movie} key={movie.id}
                    onUpdate={onMovieUpdate} 
                    onDelete={onMovieDelete}
                 />
    );

    return (
        <section>
            {moviesJSX}
        </section>
    );
};

MovieList.defaultProps = {
    onMovieUpdate: () => { },
    onMovieDelete: () => { }
}

export default MovieList;