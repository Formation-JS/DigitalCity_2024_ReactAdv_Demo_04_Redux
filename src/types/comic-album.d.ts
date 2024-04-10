export type ComicAlbumData = {
    name: string;
    desc?: string;
};

export type ComicAlbumDataUpdate = ComicAlbumData & {
    id: string;
};

export type ComicAlbum = ComicAlbumDataUpdate & {
    isFav: boolean;
    createAt: string,
    updateAt?: string,
};
