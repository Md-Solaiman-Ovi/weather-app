/* eslint-disable @typescript-eslint/no-explicit-any */
// import dayjs from "dayjs";
// import { getWeatherIcon } from "../utils/api";

// interface Props {
//   data: any;
// }

// const WeatherCard = ({ data }: Props) => {
//   return (
//     <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-2xl text-white">
//       <h2 className="text-lg font-semibold">
//         {data.name}, {data.sys.country}
//       </h2>
//       <p className="text-sm">
//         {dayjs.unix(data.dt).format("dddd, MMM D, YYYY")}
//       </p>
//       <div className="flex justify-between items-center mt-4">
//         <img src={getWeatherIcon(data.weather[0].icon)} alt="weather icon" />
//         <h1 className="text-6xl">{Math.round(data.main.temp)}°</h1>
//       </div>
//     </div>
//   );
// };

// export default WeatherCard;

import React from "react";
import dayjs from "dayjs";
import { getWeatherIcon } from "../utils/api";

interface Props {
  data: any;
}

const WeatherCard: React.FC<Props> = ({ data }) => {
  const temp = Math.round(data.main.temp);
  const weather = data.weather?.[0];

  return (
    <div className="bg-gradient-to-br from-[rgba(37,99,235,1)] to-[rgba(147,51,234,1)] rounded-2xl p-6 text-white shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm opacity-90">
            {data.name}, {data.sys.country}
          </div>
          <div className="text-xs text-gray-200 mt-1">
            {dayjs.unix(data.dt).format("dddd, MMM D, YYYY")}
          </div>
        </div>

        <div className="text-right">
          <div className="text-6xl font-semibold">{temp}°</div>
          <div className="text-sm opacity-90 mt-1">{weather?.description}</div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <img
          src={getWeatherIcon(weather?.icon)}
          alt={weather?.description}
          className="w-20 h-20"
        />
        <div className="text-white/80">
          <div className="text-sm">
            High:{" "}
            <span className="font-semibold">
              {Math.round(data.main.temp_max)}°
            </span>
          </div>
          <div className="text-sm mt-1">
            Low:{" "}
            <span className="font-semibold">
              {Math.round(data.main.temp_min)}°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
