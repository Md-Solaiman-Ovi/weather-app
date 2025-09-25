// import { useSelector } from "react-redux";

// import SearchBar from "../components/SearchBar";
// import WeatherCard from "../components/WeatherCard";
// import Loader from "../components/Loader";
// import type { RootState } from "../redux/store";

// const WeatherPage = () => {
//   const { current, forecast, loading, error } = useSelector(
//     (state: RootState) => state.weather
//   );
//   console.log("forecast:", forecast);

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl text-center">How's the sky looking today?</h1>
//       <SearchBar />

//       {loading && <Loader />}
//       {error && <p className="text-red-400 text-center mt-4">{error}</p>}

//       {current && (
//         <div className="mt-6">
//           <WeatherCard data={current} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherPage;

import React from "react";

import SearchBar from "../components/SearchBar";
import WeatherStats from "../components/WeatherStats";
import DailyForecast from "../components/DailyForecast";
import HourlyForecast from "../components/HourlyForecast";
import WeatherCard from "../components/WeatherCard";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const WeatherPage: React.FC = () => {
  const { current, forecast, loading, error } = useSelector(
    (state: RootState) => state.weather
  );

  return (
    <div className="px-8 py-20 max-w-[1200px] mx-auto">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black">
            ☀️
          </div>
          <div className="text-lg font-semibold">Weather Today</div>
        </div>

        <div className="text-sm bg-[#1b1726] px-3 py-2 rounded-md">
          ° Units ▾
        </div>
      </div>

      <h1 className="text-2xl text-center mt-6">
        How's the sky looking today?
      </h1>
      <SearchBar />

      {loading && <Loader />}

      {error && <div className="mt-6 text-center text-red-400">{error}</div>}

      {!current && !loading && !error && (
        <div className="mt-16 text-center text-gray-400">
          <div className="text-6xl mb-4">🌙</div>
          <div>Search for a city to see weather information</div>
        </div>
      )}

      {current && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <WeatherCard data={current} />
            <WeatherStats data={current} />
            <DailyForecast days={forecast?.daily ?? []} />
          </div>

          <aside>
            <HourlyForecast hours={forecast?.hourly ?? []} />
          </aside>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
