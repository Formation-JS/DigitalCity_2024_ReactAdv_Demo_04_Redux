import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../store/weather/weather.action';
import { StoreDispatch, StoreState } from '../../store/store';

const WeatherFetchButton = () => {

    const dispatch = useDispatch<StoreDispatch>();
    const weather = useSelector<StoreState>(state => state.weatherFeature.current);

    return (
        <div>
            <button onClick={() => dispatch(fetchWeather('Leuze-en-Hainaut'))}>
                Obtenir la météo de Leuze-en-Hainaut
            </button>
            {weather !== null && (
                <p>{JSON.stringify(weather)}</p>
            )}
        </div>
    );
};

export default WeatherFetchButton;