// import React, { useState } from "react";

// import { fetchWeather } from "../redux/features/weatherSlice";
// import { useDispatch, useSelector } from "react-redux";
// import type { AppDispatch, RootState } from "../redux/store";

// const SearchBar: React.FC = () => {
//   const [city, setCity] = useState("");
//   const dispatch = useDispatch<AppDispatch>();
//   const loading = useSelector((state: RootState) => state.weather.loading);

//   const handleSearch = async () => {
//     if (!city.trim()) return;
//     const action = dispatch(fetchWeather(city.trim()));
//     // if fulfilled, clear input
//     if (fetchWeather.fulfilled.match(action)) {
//       setCity("");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center gap-3 mt-6">
//       <div className="relative">
//         <input
//           className="w-[520px] max-w-full px-4 py-3 rounded-md bg-[#1b1726] placeholder:text-gray-400 outline-none text-white"
//           placeholder="Search for a place..."
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") handleSearch();
//           }}
//         />
//         <button
//           onClick={handleSearch}
//           disabled={loading}
//           className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600"
//         >
//           {loading ? "Searching..." : "Search"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/features/weatherSlice";
import type { AppDispatch, RootState } from "../redux/store";

const SearchBar: React.FC = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.weather.loading);

  const handleSearch = async () => {
    if (!city.trim()) return;
    const action = dispatch(fetchWeather(city.trim()));
    if (fetchWeather.fulfilled.match(action)) {
      setCity("");
    }
  };

  return (
    <div className="flex items-center justify-center w-full px-4 mt-6">
      <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
        <input
          className="w-full px-4 py-3 rounded-md bg-[#1b1726] placeholder:text-gray-400 outline-none text-white pr-24"
          placeholder="Search for a place..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600 text-sm sm:text-base"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
