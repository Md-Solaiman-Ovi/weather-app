import React from "react";
import { getWeatherIcon } from "../utils/api";

interface Day {
  date: string;
  dayName: string;
  tempMin: number;
  tempMax: number;
  icon: string;
}

const DailyForecast: React.FC<{ days: Day[] }> = ({ days }) => {
  if (!days?.length) return null;

  return (
    <div className="mt-6 w-full">
      <h3 className="text-sm text-gray-300 mb-3">Daily forecast</h3>

      <div className="daily-forecast-container">
        {days.map((d) => (
          <div key={d.date} className="daily-card">
            <div className="text-xs text-gray-400">{d.dayName}</div>
            <img
              src={getWeatherIcon(d.icon)}
              alt={d.dayName}
              className="mx-auto w-10 h-10 sm:w-12 sm:h-12"
            />
            <div className="mt-1 text-sm">
              <span className="font-semibold">{d.tempMax}°</span>
              <span className="text-gray-400 ml-1">{d.tempMin}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
