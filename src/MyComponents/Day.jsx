import { FivedaysWeatherContext } from "@/MyContexts/Context";
import { useContext } from "react";
import Skeleton from "../../node_modules/@mui/material/Skeleton";

export default function Day() {
  const { FiveDay } = useContext(FivedaysWeatherContext);

  if (!FiveDay || FiveDay.length === 0) {
    // return <p className="w-full text-center font-bold text-xl mb-3 text-amber-50">Loading forecast...</p>;
    return (
      <div className="w-full flex items-center justify-between gap-2">
        <Skeleton
          sx={{ bgcolor: "#f9cb4063" }}
          variant="rectangular"
          width={200}
          height={200}
          className="rounded-xl"
        />
        <Skeleton
          sx={{ bgcolor: "#f9cb4063" }}
          variant="rectangular"
          width={200}
          height={200}
          className="rounded-xl"
        />
        <Skeleton
          sx={{ bgcolor: "#f9cb4063" }}
          variant="rectangular"
          width={200}
          height={200}
          className="rounded-xl"
        />
        <Skeleton
          sx={{ bgcolor: "#f9cb4063" }}
          variant="rectangular"
          width={200}
          height={200}
          className="rounded-xl"
        />
        <Skeleton
          sx={{ bgcolor: "#f9cb4063" }}
          variant="rectangular"
          width={200}
          height={200}
          className="rounded-xl"
        />
      </div>
    );
  }

  function getDayName(dateString, locale = "en-US") {
    const date = new Date(dateString);

    const options = { weekday: "long" };

    return date.toLocaleDateString(locale, options);
  }

  const Days = FiveDay.map((d) => {
    return (
      <div
        key={d.dt}
        className="bg-[#FADA7A] w-1/6 flex items-center flex-col rounded-xl py-3 text-amber-800"
      >
        <h1 className="font-bold text-xl">{getDayName(d.dt_txt)}</h1>
        {/* <h1 className="font-bold mb-3">{d.}</h1> */}

        <img
          src={`https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`}
          alt="Broken Clouds (Night)"
          title="Broken Clouds (Night)"
        ></img>
        <h1 className="font-semibold ">{Math.round(d.main.temp - 273.15)}°C</h1>
        <p className="text-wrap text-center px-1">{d.weather[0].description}</p>
      </div>
    );
  });
  return (
    <main className="w-full flex items-stretch justify-between">{Days}</main>
  );
}
