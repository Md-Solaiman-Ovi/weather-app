import { useSelector } from "react-redux";

import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Loader from "../components/Loader";
import type { RootState } from "../redux/store";

const WeatherPage = () => {
  const { current, forecast, loading, error } = useSelector(
    (state: RootState) => state.weather
  );
  console.log("forecast:", forecast);

  return (
    <div className="p-8">
      <h1 className="text-2xl text-center">How's the sky looking today?</h1>
      <SearchBar />

      {loading && <Loader />}
      {error && <p className="text-red-400 text-center mt-4">{error}</p>}

      {current && (
        <div className="mt-6">
          <WeatherCard />
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
