import './App.css'
import CardWeather from './components/CardWeather'
import Loader from './components/Loader'
import useWeather from './hooks/useWeather'

function App() {
  
  const {weather, isLoading} = useWeather()

  return (
    <div className='App'>
      {
        isLoading ?
          <Loader />
        :
          <div className="App-2">
            <CardWeather weather={weather} />
          </div>
      }     
    </div>
  )
}

export default App
