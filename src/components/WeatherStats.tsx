/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface Props {
  data: any; // current weather object
}

const StatCard: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div className="bg-[rgba(31,27,55,0.5)] rounded-lg px-4 py-3 text-center sm:text-left">
    <div className="text-gray-300 text-sm">{label}</div>
    <div className="mt-1 text-white font-semibold text-base sm:text-lg">
      {value}
    </div>
  </div>
);

const WeatherStats: React.FC<Props> = ({ data }) => {
  const feels = `${Math.round(data.main.feels_like)}°`;
  const humidity = `${data.main.humidity}%`;
  const wind = `${Math.round(data.wind.speed)} km/h`;
  // precipitation: try rain 1h or 3h or pressure as fallback
  const precip = data.rain?.["1h"] ?? data.rain?.["3h"] ?? 0;
  const precipText = precip
    ? `${precip} mm`
    : `${Math.round(data.main.pressure)} hPa`;

  return (
    <div className="grid grid-cols-2 gap-3 mt-6 sm:grid-cols-4 w-full max-w-5xl mx-auto ">
      <StatCard label="Feels Like" value={feels} />
      <StatCard label="Humidity" value={humidity} />
      <StatCard label="Wind" value={wind} />
      <StatCard label="Precipitation" value={precipText} />
    </div>
  );
};

export default WeatherStats;
