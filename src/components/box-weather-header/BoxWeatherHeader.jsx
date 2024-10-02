import { useEffect, useState } from "react";
import "./boxWeatherHeader.css";
import moment from "moment";
import "moment/locale/ar";
import { useOpenWeatherResponseContext } from "../../providers/OpenWeatherProvider";

export default function BoxWeatherHeader() {
  const [DateAndTime, setDateAndTime] = useState("");
  const { openWeatherResponseDate } = useOpenWeatherResponseContext();

  useEffect(() => {
    if (openWeatherResponseDate.language === "arabic") {
      moment.locale("ar");
    } else {
      moment.locale("en");
    }
    setDateAndTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
  }, [openWeatherResponseDate.language]);

  return (
    <>
      <div
        className="box-weather-header"
        style={{
          direction:
            openWeatherResponseDate.language === "arabic" ? "rtl" : "ltr",
        }}
      >
        <h1>
          {openWeatherResponseDate.language === "arabic"
            ? "اسطنبول"
            : "istanbul"}
        </h1>
        <p>{DateAndTime}</p>
      </div>
    </>
  );
}
