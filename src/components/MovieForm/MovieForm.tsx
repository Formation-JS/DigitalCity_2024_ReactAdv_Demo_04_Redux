import { useCallback } from 'react';
import type { MovieData } from '../../types/movie';

type MovieFormProps = {
    btnSubmitName: string,
    onMovieSubmit: (movie: MovieData) => void;
};

const MovieForm = ({ btnSubmitName, onMovieSubmit }: MovieFormProps) => {

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();

        const data: MovieData = {
            name: 'Exemple de film',
            desc: `Exemple généré à ${new Date().toISOString()}`,
            duration: 120
        };

        onMovieSubmit(data);

    }, [onMovieSubmit]);

    return (
        <form onSubmit={handleSubmit}>
            <p>TODO : Faire le formulaire :p</p>
            <button>{btnSubmitName}</button>
        </form>
    );
};

MovieForm.defaultProps = {
    btnSubmitName: 'Valider',
    onMovieSubmit: () => { } //NOOP
};

export default MovieForm;