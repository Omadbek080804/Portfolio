import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import './Weather.css'

function Weather() {





  const API = '0c9598277e57bae9c299cc79d4035b20'

  const [weatherData, setWeatherData] = useState()
  const city='Tashkent'
  const [error, setError] = useState(false)
  const [Loading, setLoading] = useState(true)
const [defaultCity,setDefaultCity]=useState(localStorage.getItem('city') ? localStorage.getItem('city') : 'tashkent')

  useEffect(() => {
    featchWeather(defaultCity)
   
  }, [defaultCity])





  const featchWeather = async (city) => {
    setLoading(true)
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${'tashkent'}&appid=${API}`
    )
      .then((response) => {
        console.log(response.data);
        setWeatherData(response.data);
        localStorage.setItem('city',response?.data?.name)
        setLoading(false)
        setError(false)

      })
      .catch((error) => {
        console.log(error)
        setError(true)
        setLoading(false)
      })
  }




  return (
    <div className="card-weather">
      <div className="cloud">
      </div>
      <div className='cloud-data'>
      <p>
    {weatherData?.name} {weatherData?.sys?.country}
    

      </p>
      <h5>
     {Math.round(weatherData?.main?.temp - 273.15)}
     .0 ºC
      </h5>
      </div>

      <div className="shadow"></div>

    </div>
  )
}

export default Weather
