// Axios
import axios from "axios";
import { useEffect, useContext } from "react";
import { CityNameContext, FivedaysWeatherContext } from "@/MyContexts/Context";

export default function FivedaysWeatherAPI() {
  const APIKey = "6466983d0c849bdd2b93cb09c410ce59";
  const { city } = useContext(CityNameContext);
  const { setFiveDay } = useContext(FivedaysWeatherContext);
  const FiveDays = [];

  useEffect(() => {
    if (!city || city.trim() === "") {
      setFiveDay(null);
      return;
    }
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`
      )
      .then(function (response) {
        const Days = response.data.list;
        Days.forEach((element) => {
          element.dt_txt.includes("12:00:00") ? FiveDays.push(element) : "";
        });
        setFiveDay(FiveDays);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [city]);
}
