import React, { useEffect, useState } from 'react'

interface WeatherData {
  temp: number
  description: string
  icon: string
}

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Turin,it&appid=${
          import.meta.env.VITE_OPENWEATHER_KEY
        }&units=metric&lang=it`
      )

      const data = await res.json()

      setWeather({
        temp: data.main.temp,
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      })
    }

    fetchWeather()
  }, [])

  if (!weather) {
    return <div>Caricamento meteo...</div>
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <img src={weather.icon} alt={weather.description} />
      <div>
        <div>{weather.temp}°C</div>
        <div>{weather.description}</div>
      </div>
    </div>
  )
}

export default WeatherWidget
