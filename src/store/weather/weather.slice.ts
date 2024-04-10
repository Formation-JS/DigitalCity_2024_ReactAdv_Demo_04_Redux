import { createSlice } from '@reduxjs/toolkit';
import type { WeatherData } from '../../types/weather';
import { fetchWeather } from './weather.action';

export type WeatherStateType = {
    current: WeatherData | null;
    isLoading: boolean
};

const initialState: WeatherStateType = {
    current: null,
    isLoading: false
};

const WeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        clear: (state) => {
            state.current = null;
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.isLoading = false;
                state.current = action.payload;
            })
            .addCase(fetchWeather.rejected, (state) => {
                state.isLoading = false;
                state.current = null;
            });
    }
});

// Export des actions du slices
export const { clear: weatherClear } = WeatherSlice.actions;

// Export Reducer
export default WeatherSlice.reducer;