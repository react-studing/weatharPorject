import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

const OpenWeatherResponseContext = createContext({});
const CancelToken = axios.CancelToken;
let cancel;
export default function OpenWeatherProvider({ children }) {
  const [openWeatherResponseDate, setOpenWeatherResponseDate] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=41.015137&lon=28.979530&appid=c52f646542574b807de0ee86b0aa89cc",
        {
          CancelToken: new CancelToken((c) => {
            cancel = c;
          }),
        }
      )
      .then(function (response) {
        const temp = Math.round(response.data.main.temp - 273.15);
        const tempMin = Math.round(response.data.main.temp_min - 273.15);
        const tempMax = Math.round(response.data.main.temp_max - 273.15);
        const description = response.data.weather[0].description;
        const imgType = response.data.weather[0].icon;
        setOpenWeatherResponseDate({
          temp: temp,
          tempMin: tempMin,
          tempMax: tempMax,
          description: description,
          imgType: imgType,
          language: "arabic",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    return () => {
      cancel();
    };
  }, []);
  return (
    <>
      <OpenWeatherResponseContext.Provider
        value={{ openWeatherResponseDate, setOpenWeatherResponseDate }}
      >
        {children}
      </OpenWeatherResponseContext.Provider>
    </>
  );
}
export const useOpenWeatherResponseContext = () => {
  return useContext(OpenWeatherResponseContext);
};
