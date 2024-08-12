import React, { useState, useEffect } from 'react';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '8960241db54eb3a9a00759c22f2deccf';
  const city = 'Bengaluru';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        
        if (data.cod === 200) {  // Ensure the request was successful
          setWeatherData({
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
          });
        } else {
          console.error("Error fetching weather data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  if (!weatherData) return <p>Loading...</p>;

  return (
    <div>
      <p>Temperature: {weatherData.temperature}°C</p>
      <p>Description: {weatherData.description}</p>
      <p>Bengaluru,,,</p>
      <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="Weather icon" />
    </div>
  );
};

export default WeatherWidget;
