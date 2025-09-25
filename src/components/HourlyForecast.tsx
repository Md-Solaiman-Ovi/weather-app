import React from "react";
import { getWeatherIcon } from "../utils/api";

interface Hour {
  time: string;
  temp: number;
  icon: string;
}

const HourlyForecast: React.FC<{ hours: Hour[] }> = ({ hours }) => {
  if (!hours?.length) return null;

  return (
    <div className=" bg-[rgba(31,27,55,0.5)] p-4 rounded-lg">
      <h3 className="text-sm text-gray-300 mb-3">Hourly forecast</h3>
      <div className=" rounded-lg p-4">
        <ul>
          {hours.map((h, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between py-2 border-b border-gray-700"
            >
              <div className="flex items-center gap-3">
                <div className="text-sm w-12">{h.time}</div>
                <img
                  src={getWeatherIcon(h.icon)}
                  alt={h.time}
                  className="w-8 h-8"
                />
                <div className="text-sm text-gray-300">
                  {/* description if needed */}
                </div>
              </div>
              <div className="text-white font-semibold">{h.temp}°</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HourlyForecast;
