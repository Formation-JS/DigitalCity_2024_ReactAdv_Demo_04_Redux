import axios from 'axios';
import type { WeatherData } from '../types/weather';

export const getWeatherByCity = async (city: string) : Promise<WeatherData> => {

    const response = await axios.get<WeatherData>('/weather', {
        baseURL: import.meta.env.VITE_WEATHER_API_URL,
        params: {
            q: city,
            units: 'metric',
            lang: 'fr',
            appid: import.meta.env.VITE_WEATHER_API_KEY
        }
    });

    return response.data;
};