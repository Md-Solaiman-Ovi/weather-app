/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from "dayjs";
import { getWeatherIcon } from "../utils/api";

interface Props {
  data: any;
}

const WeatherCard = ({ data }: Props) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-2xl text-white">
      <h2 className="text-lg font-semibold">
        {data.name}, {data.sys.country}
      </h2>
      <p className="text-sm">
        {dayjs.unix(data.dt).format("dddd, MMM D, YYYY")}
      </p>
      <div className="flex justify-between items-center mt-4">
        <img src={getWeatherIcon(data.weather[0].icon)} alt="weather icon" />
        <h1 className="text-6xl">{Math.round(data.main.temp)}°</h1>
      </div>
    </div>
  );
};

export default WeatherCard;
