const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "25d33acc09msh041d5dd67aff89dp108720jsn25a53fc8daf0",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  
  const cityElement = document.getElementById("city");
  const tempElement = document.getElementById("temp");
  const humidityElement = document.getElementById("humidity");
  const windSpeedElement = document.getElementById("wind_speed");
  const submitButton = document.getElementById("submit");
  
  const getWeather = (city) => {
    cityName.innerHTML = city;

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        
        // Update HTML elements with weather data
        cityElement.innerHTML = response.city;
        tempElement.innerHTML = response.temp + "°C";
        humidityElement.innerHTML = response.humidity + "%";
        windSpeedElement.innerHTML = response.wind_speed + "km/hr";
      })
      .catch((err) => console.error(err));
  };
  
  submit.addEventListener("click", (e) => {
    e.preventDefault();
      getWeather(city.value);
  })
  
  
  getWeather("Dubai"); // Initial call to fetch weather for Dubai
  