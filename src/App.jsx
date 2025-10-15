import "./index.css";
import "./App.css";
import Weather from "./MyComponents/weather";

// MUI
import Container from "../node_modules/@mui/material/Container";
import TodayWeatherAPI from "./MyComponents/API";
import FivedaysWeatherAPI from "./MyComponents/5days";

// context
import { useState } from "react";
import {
  CityNameContext,
  TodayWeatherContext,
  FivedaysWeatherContext,
} from "./MyContexts/Context";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [FiveDay, setFiveDay] = useState(null);

  return (
    <Container maxWidth="md" className="py-6 px-10">
      <CityNameContext.Provider value={{ city, setCity }}>
        <TodayWeatherContext.Provider value={{ weatherData, setWeatherData }}>
          <FivedaysWeatherContext.Provider value={{ FiveDay, setFiveDay }}>
            <Weather />
            <TodayWeatherAPI />
            <FivedaysWeatherAPI />
          </FivedaysWeatherContext.Provider>
        </TodayWeatherContext.Provider>
      </CityNameContext.Provider>
    </Container>
  );
}

export default App;
