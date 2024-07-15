//geolocation apiを用いて経度と緯度を取得する
navigator.geolocation.getCurrentPosition(
  function (position) {
    //緯度
    const currentLatitude = position.coords.latitude;
    //経度
    const currentLongtitude = position.coords.longitude;

    console.log(fetch_openWeather(currentLatitude, currentLongtitude));
  },
  function (error) {
    console.log(error);
  }
);

//apiを叩いて、天気の情報を取得する
async function fetch_openWeather(currentLatitude, currentLongtitude) {
  const apiKey = "46c173a7f29f50a5f4c1642978d763af";
  //経度と緯度・apiKeyをurlにセットする
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongtitude}&appid=${apiKey}`;

  const response = await fetch(url);
  const weather_result = await response.json();
  return weather_result;
}
