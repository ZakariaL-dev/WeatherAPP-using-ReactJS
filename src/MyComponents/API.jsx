// Axios
import axios from "axios";

// My imports
import { useEffect, useContext } from "react";
import { CityNameContext, TodayWeatherContext } from "@/MyContexts/Context";

export default function TodayWeatherAPI() {
  const APIKey = "6466983d0c849bdd2b93cb09c410ce59";
  const { city } = useContext(CityNameContext);
  const { setWeatherData } = useContext(TodayWeatherContext);

  useEffect(() => {
    if (!city || city.trim() === "") {
      setWeatherData(null);
      return;
    }

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`
      )
      .then(function (response) {
        // handle success
        const data = response.data;
        const weatherInfo = {
          temp: data.main.temp,
          humidity: data.main.humidity,
          weather: data.weather[0].description,
          icon: data.weather[0].icon,
          wind: (data.wind.speed * 3.6).toFixed(2),
          visibility: data.visibility / 1000,
          dateInSeconds: formatTime(data.dt),
        };
        setWeatherData(weatherInfo);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [city]);

  function formatTime(unixTime) {
    // Convert seconds to milliseconds for the Date constructor
    const date = new Date(unixTime * 1000);

    // Use Intl.DateTimeFormat for locale-aware and custom formatting
    const formatter = new Intl.DateTimeFormat("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    // The output is in the format "Wed, 08 Oct 2025"
    return formatter.format(date);
  }
}
