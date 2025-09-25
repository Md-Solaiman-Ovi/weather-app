import SearchBar from "../components/SearchBar";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl mb-4">How's the sky looking today?</h1>
      <SearchBar />
      <p className="mt-10 text-gray-300">
        Search for a city to see weather information
      </p>
    </div>
  );
};
export default LandingPage;
