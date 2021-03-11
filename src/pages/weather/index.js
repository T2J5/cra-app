import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeatherAction } from '@actions/weather'

const DEFAULT_CITY = '上海'

const Weather = () => {

  const [city, setCity] = useState(DEFAULT_CITY)
  const dispatch = useDispatch()
  const weather = useSelector(state => state.weather)

  useEffect(() => {
    const fetchData = async() => {
      dispatch(fetchWeatherAction({ city }))
    }
    fetchData()
  }, [city])
  return <div>
    <div>天气查询</div>
    <div>
      天气结果
      {city}
    </div>
  </div>
}

export default Weather