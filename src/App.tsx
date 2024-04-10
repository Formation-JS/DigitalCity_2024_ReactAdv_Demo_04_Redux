import './App.css'
import MovieFormAdd from './containers/Movie/MovieFormAdd';
import MovieListMain from './containers/Movie/MovieListMain';
import WeatherFetchButton from './containers/Weather/WeatherFetchButton';

function App() {

  return (
    <>
      <h1>React ❤ Redux</h1>
      <WeatherFetchButton />
      <MovieFormAdd />
      <MovieListMain />
    </>
  )
}

export default App
