const API_KEY_GOOGLE = "AIzaSyAYSeZRkkIEUkvEc1Ut7UYs7q0lLRZds94";
const API_KEY_WEATHER = "46c173a7f29f50a5f4c1642978d763af";

async function displayCoordinate(result) {
  // 2. 緯度経度を表示する
  // 3. OpenWeatherMapを利用して、その緯度経度の天気を取得する
  // 天気が取得できたら、displayWeatherが呼ばれるようにする
  // 4. 地図の中心を移動する

  const { lat, long } = await findWeather();
  set_weather_info(lat, long);
  initMap(lat, long);
}

//Geocoding Apiから経度と緯度を取得
async function findWeather() {
  //input要素から住所を取得
  let inputAddress = document.getElementById("input-address").value;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${inputAddress}&key=${API_KEY_GOOGLE}`;

  //経度と緯度の取得
  const response_json = await (await fetch(url)).json();
  const location = response_json.results[0].geometry.location;
  const lat = location.lat;
  const long = location.lng;

  return { lat: lat, long: long };
}

//apiを叩いて、天気の情報を取得する
//取得した天気情報をhtmlに反映させる
async function set_weather_info(currentLatitude, currentLongtitude) {
  //経度と緯度・apiKeyをurlにセットする
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongtitude}&appid=${API_KEY_WEATHER}`;

  const response = await fetch(url);
  const weather_result = await response.json();

  //dom取得
  const city = document.getElementById("city");
  const weather = document.getElementById("td-weather");
  const temperature = document.getElementById("td-temperature");
  const humidity = document.getElementById("td-humidity");
  const pressure = document.getElementById("td-pressure");
  const latitude = document.getElementById("latitude");
  const longitude = document.getElementById("longitude");

  //htmlに天気情報と経度・緯度をセットする
  city.textContent = weather_result.name;
  weather.textContent = weather_result.weather[0].main;
  temperature.textContent = weather_result.main.temp;
  humidity.textContent = weather_result.main.humidity;
  pressure.textContent = weather_result.main.pressure;
  latitude.textContent = currentLatitude;
  longitude.textContent = currentLongtitude;
}

//htmlにgoogle mapを埋め込む
function initMap(lat, long) {
  let map;
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: long },
    zoom: 15,
  });

  map.setCenter({ lat: Number(lat), lng: Number(long) });
}
