export type Movie = {
    id: string;
    name: string;
    desc? : string;
    duration: number,
    createAt: string,
    updateAt?: string,
};

export type MovieData = Omit<Movie, 'id'|'createAt'|'updateAt'>
export type MovieDataUpdate = Omit<Movie, 'createAt'|'updateAt'>

export type MovieWithRating = Movie & {
    rating?: number
}