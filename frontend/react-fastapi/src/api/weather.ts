// src/api/weather.ts
export interface ForecastItem {
  date: Date
  temp: number
  description: string
  icon: string
}

export async function fetchWeeklyForecast(
  city = 'Turin'
): Promise<ForecastItem[]> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},it&appid=${
      import.meta.env.VITE_OPENWEATHER_KEY
    }&units=metric&lang=it`
  )

  if (!res.ok) throw new Error('Errore meteo')

  const data = await res.json()

  return data.list.map((item: any) => ({
    date: new Date(item.dt * 1000),
    temp: Math.round(item.main.temp),
    description: item.weather[0].description,
    icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
  }))
}