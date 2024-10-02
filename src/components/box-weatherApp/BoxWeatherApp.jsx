import BoxWeatherHeader from "../box-weather-header/BoxWeatherHeader";
import "./boxWeatherApp.css";
import CloudIcon from "@mui/icons-material/Cloud";
import { useOpenWeatherResponseContext } from "../../providers/OpenWeatherProvider";
export default function BoxWeatherApp() {
  const { openWeatherResponseDate } = useOpenWeatherResponseContext();
  return (
    <>
      <div
        className="box-weather-app"
        style={{
          direction:
            openWeatherResponseDate.language === "arabic" ? "ltr" : "rtl",
        }}
      >
        <div className="box-weather-app-container">
          <BoxWeatherHeader />
        </div>
        <hr />
        <div className="box-weather-body">
          <div className="box-weather-icon">
            <CloudIcon style={{ fontSize: "150px" }} />
          </div>
          <div className="box-weather-content">
            <div className="box-weather-content-container">
              <div
                className="weather-of-number-and-icon"
                style={{
                  direction:
                    openWeatherResponseDate.language === "arabic"
                      ? "rtl"
                      : "ltr",
                }}
              >
                <h1>{openWeatherResponseDate.temp}</h1>
                <img
                  src={`https://openweathermap.org/img/wn/${openWeatherResponseDate.imgType}@2x.png`}
                  alt=""
                />
              </div>
              <div
                className="weather-of-number-and-icon-description"
                style={{
                  direction:
                    openWeatherResponseDate.language === "arabic"
                      ? "rtl"
                      : "ltr",
                }}
              >
                {openWeatherResponseDate.description}
              </div>
              <div
                className="weather-content-descriptoin"
                style={{
                  direction:
                    openWeatherResponseDate.language === "arabic"
                      ? "rtl"
                      : "ltr",
                }}
              >
                {openWeatherResponseDate.language === "arabic"
                  ? "صغرى"
                  : "Minor"}{" "}
                :{openWeatherResponseDate.tempMin} |{" "}
                {openWeatherResponseDate.language === "arabic"
                  ? "كبرى"
                  : "Grand"}{" "}
                : {openWeatherResponseDate.tempMax}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
