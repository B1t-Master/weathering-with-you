import getWeatherData from "./fetch-data";

const input = document.querySelector("input");
const button = document.querySelector("button");

export default () => {
  button.addEventListener("click", () => {
    getWeatherData(input.value);
    input.value = "";
  });
};

function renderWeatherCard(data) {
  const display = document.querySelector("#display");
  let header = document.createElement("div");
  let region = document.createElement("div");
  region.textContent = `${data.address}`;
  let icon = document.createElement("div");
  header.appendChild(region);
  header.appendChild(icon);

  let weatherDetails = document.createElement("div");
  let temperature = document.createElement("div");
  temperature.textContent = `${data.currentConditions.temp}`;

  let humidity = document.createElement("div");
  humidity.textContent = `${data.currentConditions.humidity}`;

  let wind = document.createElement("div");
  wind.textContent = `${data.currentConditions.windspeed}`;

  let option = document.createElement("div");
  option.textContent = `${data.currentConditions.icon}`;

  let primaryDetails = document.createElement("div");
  primaryDetails.appendChild(temperature);
  primaryDetails.appendChild(option);
  weatherDetails.appendChild(primaryDetails);
  weatherDetails.appendChild(humidity);
  weatherDetails.appendChild(wind);

  let footer = document.createElement("div");
  footer.textContent = `${data.description}`;

  display.appendChild(header);
  display.appendChild(weatherDetails);
  display.appendChild(footer);
}

function getIcon(icon, time) {
  icon = icon.toLowerCase();
  //   time =time
  if (icon.includes("cloudy") && time <= 6) return "../public/day-cloud.svg";
  if (icon.includes("clear") && time <= 6) return "../public/sunny.svg";
  if (icon.includes("rain") && time <= 6) return "../public/day-rainny.svg";
  if (icon.includes("cloudy") && time >= 6) return "../public/night-cloudy.svg";
  if (icon.includes("clear") && time >= 6) return "../public/night-clear.svg";
  if (icon.includes("rain") && time >= 6) return "../public/night-rainy.svg";

  if (icon.includes("snow")) return "../public/snow.svg";
}
