import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ComicAlbum, ComicAlbumData, ComicAlbumDataUpdate } from '../../types/comic-album';

export type ComicAlbumStateType = {
    data: ComicAlbum[],
    lastAdded: null | ComicAlbum;
};

const comicAlbumState: ComicAlbumStateType = {
    data: [],
    lastAdded: null
};

const comicAlbumSlice = createSlice({
    initialState: comicAlbumState,
    name: 'comic', // Préfix des actions
    reducers: {
        add: {
            prepare: (data: ComicAlbumData) => {
                return {
                    payload: {
                        ...data,
                        isFav: false,
                        createAt: new Date().toISOString(),
                        id: nanoid()
                    }
                };
            },
            reducer: (state, action: PayloadAction<ComicAlbum>) => {
                const comic = action.payload;

                state.data.push(comic);
                state.lastAdded = comic;
            }
        },
        delete: (state, action: PayloadAction<string>) => {
            // Case "delete" du reducer
            const comicId = action.payload;
            state.data = state.data.filter(comic => comic.id !== comicId);
        },
        update: {
            prepare: (data: ComicAlbumDataUpdate) => {
                return {
                    payload: {
                        ...data,
                        updateAt: new Date().toISOString()
                    }
                };
            },
            reducer: (state, action: PayloadAction<Omit<ComicAlbum, 'createAt' | 'isFav'>>) => {
                const comicTarget = state.data.find(c => c.id === action.payload.id);

                if (comicTarget) {
                    comicTarget.name = action.payload.name;
                    comicTarget.desc = action.payload.desc;
                    comicTarget.updateAt = action.payload.updateAt;
                }
            }
        },
        addFav: {
            prepare: (comicId: string) => {
                return {
                    payload: {
                        comicId,
                        updateAt: new Date().toISOString()
                    }
                };
            },
            reducer: (state, action: PayloadAction<{ comicId: string, updateAt: string; }>) => {
                const { comicId, updateAt } = action.payload;

                const comicTarget = state.data.find(c => c.id === comicId);
                if (comicTarget) {
                    comicTarget.isFav = true;
                    comicTarget.updateAt = updateAt;
                }
            }
        }
    }
});

// Export des actions ↓
export const { 
    add: comicAdd, 
    update: comicUpdate, 
    delete: comicDelete, 
    addFav: comicAddFav
} = comicAlbumSlice.actions;

// Export le reducer ↓
export default comicAlbumSlice.reducer;