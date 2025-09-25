import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import WeatherPage from "./pages/WeatherPage";
import LandingPage from "./pages/LandingPage";

function App() {
  const { current } = useSelector((state: RootState) => state.weather);

  return current ? <WeatherPage /> : <LandingPage />;
}

export default App;
