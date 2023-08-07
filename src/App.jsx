import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Wheather from './components/Wheather';
import cities from "./components/dataCity/city.list.json"

function App() {
  const [weatherInfo, setWheatherInfo] = useState(null);

  const success = (pos) => {
    const apiKey = "e5f8db66abfd0b3155d7c5b50762a269"
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

    axios.get(url)
    .then(({data}) => setWheatherInfo(data))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, []);

  useEffect(() => {

  }, [])

  const handleSubimit = (e) => {
      e.preventDefault
      const search = e.target.citiName.Value
      const cityFind = cities.find(city => cities.name === city)
  }

  return (
    <main className='bg-purple-800 min-h-screen
     text-white font-lato 
     flex justify-center items-center flex-col'>
      {/* <section>
        <form onSubmit={handleSubimit}>
          <input 
          type="text"
          id='cityName'
          placeholder='Search City'
          className='text-slate-950 p-2 rounded-sm'/>
          <button className=' bg-pink-700 rounded-e-3xl h-10 w-8'>🔍</button>
        </form>
      </section> */}
      <Wheather weatherInfo={weatherInfo}/>
    </main>
  )
}

export default App
