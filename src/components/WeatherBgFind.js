// En el archivo WeatherBgFind.jsx

import clearSky from "/public/img/weatherImg/clear_sky.jpg";
import fewClouds from "/public/img/weatherImg/few_clouds.jpg";
import scatteredClouds from "/public/img/weatherImg/scattered_clouds.jpg";
import showerRain from "/public/img/weatherImg/shower_rain.jpg";
import rain from "/public/img/weatherImg/lluvia.jpg";
import thunderstorm from "/public/img/weatherImg/thunderstorm.jpg";
import snow from "/public/img/weatherImg/nieve.jpg";
import mist from "/public/img/weatherImg/mist.jpg";

const weatherBgFind = (weatherId) => {
  if (weatherId >= 200 && weatherId < 233) {
    return thunderstorm;
  }
  if (weatherId >= 300 && weatherId < 322) {
    return showerRain;
  }
  if (weatherId >= 500 && weatherId < 532) {
    return rain;
  }
  if (weatherId >= 600 && weatherId < 623) {
    return snow;
  }
  if (weatherId >= 700 && weatherId < 782) {
    return mist;
  }
  if (weatherId === 800) {
    return clearSky;
  }
  if (weatherId >= 801 && weatherId < 805) {
    return fewClouds;
  }
  return scatteredClouds;
}


export default weatherBgFind