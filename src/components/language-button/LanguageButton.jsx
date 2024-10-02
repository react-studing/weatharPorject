import "./languageButton.css";
import { useOpenWeatherResponseContext } from "../../providers/OpenWeatherProvider";
export default function LanguageButton() {
  const { openWeatherResponseDate, setOpenWeatherResponseDate } =
    useOpenWeatherResponseContext();

  return (
    <>
      <button
        className="language-button"
        onClick={() => {
          if (openWeatherResponseDate.language === "arabic") {
            setOpenWeatherResponseDate({
              ...openWeatherResponseDate,
              language: "english",
            });
          } else {
            setOpenWeatherResponseDate({
              ...openWeatherResponseDate,
              language: "arabic",
            });
          }
        }}
      >
        {openWeatherResponseDate.language === "arabic" ? "انجليزي" : "arabic"}
      </button>
    </>
  );
}
