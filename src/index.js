import styles from "./styles.css";
import { key } from "./api-key";
async function getWeatherData(location) {
  let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${key}`;
  let response = await fetch(url);
  let data = await response.json();

  console.log(data);
}

getWeatherData("Kenya");
