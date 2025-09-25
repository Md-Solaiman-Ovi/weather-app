import React from "react";
import SearchBar from "../components/SearchBar";

const LandingPage: React.FC = () => {
  return (
    <div className="px-8 py-20  flex flex-col items-center justify-center max-w-[1200px] mx-auto">
      <div className="flex items-start justify-between w-full">
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
      <h1 className="text-2xl text-center mb-4">
        How's the sky looking today?
      </h1>
      <SearchBar />
      <div className="mt-16 text-gray-400">
        Search for a city to see weather information
      </div>
    </div>
  );
};

export default LandingPage;
