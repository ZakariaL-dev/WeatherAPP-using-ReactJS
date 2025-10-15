// Axios
// import axios from "axios";

// React Icons
import {
  MdOutlineTranslate,
  MdOutlineLocationOn,
  MdOutlineVisibility,
} from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";
import { LiaTemperatureHighSolid } from "react-icons/lia";

// MUI
import Button from "../../node_modules/@mui/material/Button";

// Componenets
import Day from "./Day";
import { useContext } from "react";
import { CityNameContext, TodayWeatherContext } from "@/MyContexts/Context";
import SelectCity from "./SelectCity";

export default function Weather() {
  const { city } = useContext(CityNameContext);
  const { weatherData } = useContext(TodayWeatherContext);

  return (
    <>
      <header className="flex items-center justify-between w-full py-2 px-4">
        <h1 className="text-3xl font-bold text-shadow-lg/20 text-shadow-white text-white">
          Daily & Weekly Weather
        </h1>
        {/* translate */}
        <Button variant="contained" size="medium">
          <MdOutlineTranslate className="text-2xl" />
        </Button>
        {/*  */}
      </header>
      {/* Search bar */}
      <SelectCity />
      {/* Today's Weather */}
      <div className="bg-[#578FCA] rounded-2xl py-4 px-4 mb-5.5">
        <header className="flex items-center justify-between text-white font-bold px-2 mb-4">
          <div className="flex items-center justify-between gap-1.5">
            <MdOutlineLocationOn className="text-2xl" />
            {city === "" ? "City Name" : city}
          </div>
          <p>{weatherData === null ? "Today" : weatherData.dateInSeconds}</p>
        </header>
        {/*  */}
        <main>
          <div className="flex flex-col items-center">
            {/* <FaRegSun className="text-5xl mt-10 mb-5 text-amber-300" /> */}
            <img
              src={`https://openweathermap.org/img/wn/${
                weatherData === null ? "02n" : weatherData.icon
              }@2x.png`}
              alt="Weather Icon"
              className="mt-8 text-4xl"
            ></img>
            <h1 className="text-5xl my-2 text-amber-50">
              {weatherData === null
                ? "Temperature "
                : Math.round(weatherData.temp)}
              °C
            </h1>
            <p className="text-2xl mb-14 text-amber-50">
              {weatherData === null ? " " : weatherData.weather}
            </p>
          </div>

          <div className="flex flex-wrap items-stretch justify-between text-amber-800">
            <div className="flex flex-col items-center w-1/5 rounded-xl py-3 bg-[#FADA7A]">
              <WiHumidity className="text-3xl mb-2" />
              <h4 className="font-semibold">Humidity</h4>
              <p>{weatherData === null ? " " : weatherData.humidity}%</p>
            </div>
            <div className="flex flex-col items-center w-1/5 rounded-xl py-3 bg-[#FADA7A]">
              <FaWind className="text-xl mb-4" />
              <h4 className="font-semibold">Wind Speed</h4>
              <p>{weatherData === null ? " " : weatherData.wind} km/h</p>
            </div>
            <div className="flex flex-col items-center w-1/5 rounded-xl py-3 bg-[#FADA7A]">
              <MdOutlineVisibility className="text-2xl mb-3" />
              <h4 className="font-semibold">Visibility</h4>
              <p>{weatherData === null ? " " : weatherData.visibility} km</p>
            </div>
            <div className="flex flex-col items-center w-1/5 rounded-xl py-3 bg-[#FADA7A]">
              <LiaTemperatureHighSolid className="text-3xl mb-2" />
              <h4 className="font-semibold">Temperature</h4>
              <p>{weatherData === null ? " " : weatherData.temp}°C</p>
            </div>
          </div>
        </main>
      </div>
      {/* === Today's Weather === */}

      {/* 5 days Weather */}
      <div className="bg-[#578FCA] rounded-2xl py-4 px-4 mb-5.5">
        <header className="text-2xl text-amber-50 font-bold mb-5">
          Weakly Forcast
        </header>
        <Day />
      </div>
      {/* ===  5 days Weather === */}
    </>
  );
}
