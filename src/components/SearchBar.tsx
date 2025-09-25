import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { fetchWeather } from "../redux/features/weatherSlice";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = () => {
    if (!city) return;
    dispatch(fetchWeather(city));
    setCity("");
  };

  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        placeholder="Search for a place..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-4 py-2 rounded-l-md w-72 text-black"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 rounded-r-md hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
