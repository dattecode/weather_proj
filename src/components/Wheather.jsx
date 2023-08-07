import humi from "/public/img/humi.png";
import wind from "/public/img/wind.png";
import press from "/public/img/press.png";
import { useState } from "react";

const Wheather = ({ weatherInfo }) => {
  const [temp, setTemp] = useState(true);

  if (!weatherInfo) {
    return <div>Loading...</div>;
  }

  console.log(weatherInfo);
  
  const kelvinToCelsius = (kelvin) => {return kelvin - 275}
  const celsius = kelvinToCelsius(weatherInfo.main.temp)
  const toCelsius = celsius.toFixed(2)

  const celsiusToFahrenheit = (celsius) => { return (celsius * 9/5) + 32}
  const fahrenheit = celsiusToFahrenheit(celsius)
  const toFahrenheit = fahrenheit.toFixed(2)



  const handleChangeTemp = () => {
    return setTemp(!temp)
  }

  return (
    <>
      <section className="w-96 m-4 md:w-8/12">
      <h2 className="mb-3 text-6xl md:text-center md:mb-6">{weatherInfo.name}</h2>

      <div className="md:flex md:flex-row md:h-auto">
        <section className="bg-zinc-500 bg-opacity-50 mb-3 p-2 rounded-xl text-center">
          <h4 className="text-4xl">{weatherInfo?.weather[0].description}</h4>

          <div className="flex flex-row">
            <img
              src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@4x.png`}
              alt=""
            />
            <h3 className="w-full flex justify-center items-center text-4xl">
              {temp ? toCelsius: toFahrenheit} °</h3>
          </div>
      </section>

      <div
          className="bg-zinc-500 bg-opacity-50 
        flex text-xs justify-between px-5 py-1 rounded-xl h-14
        md:flex md:flex-col md:h-auto md:ml-5 md:justify-around"
        >
          <section className="grid self-center md:text-center">
            <article className="flex flex-row justify-center gap-1">
              <div>
                <img src={wind} alt="" />
              </div>
              <span className="flex items-center">
                {weatherInfo?.wind.speed}
              </span>
            </article>
          </section>

          <section className="grid self-center">
            <article className="flex flex-row justify-center gap-1">
              <div>
                <img src={humi} alt="" />
              </div>
              <span className="flex items-center">
                {weatherInfo?.main.humidity}%
              </span>
            </article>
          </section>

          <section className="grid self-center">
            <article className="flex flex-row justify-center gap-1">
              <div>
                <img src={press} alt="" />
              </div>
              <span className="flex items-center">
                {weatherInfo?.main.pressure} hPa
              </span>
            </article>
          </section>
        </div>
      </div>


      <div className="flex justify-center mt-4">
          <button className="bg-blue-700 h-7 w-24 rounded-xl flex justify-center align-middle"
          onClick={handleChangeTemp}>{temp ? "Celsius" : "Fahrenheit"}</button>
      </div>
      </section>
    </>
  );
};

export default Wheather;
