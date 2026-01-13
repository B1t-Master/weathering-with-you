import getWeatherData from "./fetch-data";
import clearDay from "../public/sunny.svg";
import cloudyDay from "../public/day-cloudy.svg";
import rainyDay from "../public/day-rainy.svg";
import clearNight from "../public/night-clear.svg";
import cloudyNight from "../public/night-cloudy.svg";
import rainyNight from "../public/night-rainy.svg";
import snow from "../public/snow.svg";

const input = document.querySelector("input");
const button = document.querySelector("button");

export default () => {
  button.addEventListener("click", () => {
    getWeatherData(input.value).then((data) => {
      renderWeatherCard(data);
    });
    input.value = "";
  });
};

function renderWeatherCard(data) {
  const weatherCard = document.querySelector("#weather-card");
  weatherCard.classList.remove("invisible");

  let region = document.querySelector(".region");
  region.textContent = `${data.address}`;

  let weatherIcon = document.querySelector("img");
  weatherIcon.src = getIcon(
    data.currentConditions.icon,
    data.currentConditions.datetime,
  );

  let temperature = document.querySelector("#temp");
  temperature.textContent = `${data.currentConditions.temp}`;

  let humidity = document.querySelector("#humidity");
  humidity.textContent = `${data.currentConditions.humidity}%`;

  let wind = document.querySelector("#speed");
  wind.textContent = `${data.currentConditions.windspeed} kmph`;

  let option = document.querySelector(".condition");
  option.textContent = `${data.currentConditions.icon}`;

  let footer = document.querySelector("#footer");
  footer.textContent = `${data.description}`;
}

function getIcon(icon, time) {
  icon = icon.toLowerCase();
  time = parseInt(time.slice(0, 3));
  console.log(time);
  console.log(icon);
  if (icon.includes("cloudy") && time <= 18) return cloudyDay;
  if (icon.includes("clear") && time <= 18) return clearDay;
  if (icon.includes("rain") && time <= 18) return rainyDay;
  if (icon.includes("cloudy") && time >= 18) return cloudyNight;
  if (icon.includes("clear") && time >= 18) return clearNight;
  if (icon.includes("rain") && time >= 18) return rainyNight;

  if (icon.includes("snow")) return snow;
}

export { renderWeatherCard };
