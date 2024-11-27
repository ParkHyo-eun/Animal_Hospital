const weatherDataActive = function ({
  location,
  weather,
  temperature,
  humidity,
}) {
  const weatherMainList = [
    "Clear",
    "Clouds",
    "Drizzle",
    "Rain",
    "Snow",
    "Thunderstorm",
  ];
  weather = weatherMainList.includes(weather) ? weather : "fog"; //삼항연산자

  const locationNameTag = document.querySelector("#weatherGeo");
  locationNameTag.textContent = location;

  // const weatherNameTag = document.querySelector("#weather1");
  // weatherNameTag.textContent = weather;
  // 날씨가 아이콘이 아닌 글자로 뜸.

  document.querySelector("#weather1").textContent = weather;
  //document.body.style.backgroundImage = `url('./images/${weather}.jpg')`;

  // 미국꺼라 화씨로 나옴. 섭씨로 전환
  const temperatureFahrenheit = ((temperature - 273.15) * 9) / 5 + 32;

  const temperatureCelsius = ((temperatureFahrenheit - 32) * 5) / 9;

  const tempNameTag = document.querySelector("#weather2");
  tempNameTag.textContent = temperatureCelsius.toFixed(1) + "℃";
  // const tempNameTag = document.querySelector("#weather2");
  // tempNameTag.textContent = temperature + "℃";

  const humNameTag = document.querySelector("#weather3");
  humNameTag.textContent = humidity + "%";
};

const weatherSearch = function (position) {
  const openWeatherRes = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=f00919d88dc8575604a491e9903d1fa7`
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      // console.log(
      //   json.name,
      //   json.weather[0],
      //   json.main.temp,
      //   json.main.humidity
      // );
      const weatherData = {
        location: json.name,
        weather: json.weather[0].main,
        temperature: json.main.temp,
        humidity: json.main.humidity,
      };
      weatherDataActive(weatherData);
    })
    .catch((err) => {
      console.log(err);
    });
};

const accessToGeo = function (position) {
  //console.log(position.coords.latitude);
  const positionObj = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  }; //코즈를 통해 나에게 필요한 데이터를 가져옴. 코즈가 없음 모든 위치 데이터에 관한 정보가 다 나온다.

  weatherSearch(positionObj);
};

const askForLocation = function () {
  navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
    console.log(err);
  });
};
askForLocation();

const promiseTest = function () {
  return new Promise((resolver, reject) => {
    setTimeout(() => {
      resolver(100);
    }, 2000);
  });
};

let isCelsius = true; // 초기값: 섭씨
