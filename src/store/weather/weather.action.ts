import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWeatherByCity } from '../../services/weather.service';
import { StoreState } from '../store';

export const fetchWeather = createAsyncThunk(
    // Prefix de l'action
    'weather/fetch',
    // Traitement de l'action
    async (city: string) => {

        if(!city?.trim()) {
            return Promise.reject();
        }

        const data = await getWeatherByCity(city);
        return data;
    },
    // Les options
    {
        condition: (city: string, { getState }) => {
            const state = getState() as StoreState;

            if(state.weatherFeature?.current === null) {
                return true;
            }

            const cityStore = state.weatherFeature?.current.name.toLocaleLowerCase();
            const lastUpdate = state.weatherFeature?.current.dt * 1000;

            return cityStore !== city.toLocaleLowerCase()
                || Date.now() - lastUpdate > 10 * 60 * 1000;
        }
    }
)