import BoxWeatherApp from "../box-weatherApp/BoxWeatherApp";
import LanguageButton from "../language-button/LanguageButton";
import "./weatherApp.css";
import { useOpenWeatherResponseContext } from "../../providers/OpenWeatherProvider";
export default function WeatherApp() {
  const { openWeatherResponseDate } = useOpenWeatherResponseContext();

  return (
    <>
      <div
        className="weather-app"
        style={{
          direction:
            openWeatherResponseDate.language === "arabic" ? "ltr" : "rtl",
        }}
      >
        <BoxWeatherApp />
        <br />
        <div className="button-of-language">
          <LanguageButton />
        </div>
      </div>
    </>
  );
}
