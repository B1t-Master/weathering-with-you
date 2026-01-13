import { key } from "./api-key";
export default async function getWeatherData(location) {
  try {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${key}`;
    let response = await fetch(url);
    let data = await response.json();
    // return data;
    console.log(data.currentConditions.temp);
    console.log(data.description);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}
