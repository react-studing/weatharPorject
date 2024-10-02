import "./App.css";
import WeatherApp from "./components/weather-app/WeatherApp";
import OpenWeatherProvider from "./providers/OpenWeatherProvider";

function App() {
  return (
    <OpenWeatherProvider>
      <div className="App">
        <WeatherApp />
      </div>
    </OpenWeatherProvider>
  );
}

export default App;
