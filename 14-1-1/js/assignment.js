let API_KEY_GOOGLE = 'AIzaSyAYSeZRkkIEUkvEc1Ut7UYs7q0lLRZds94';
let API_KEY_WEATHER = 'API KEY';

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 35.7804643, lng: 139.7151025 },
    zoom: 15
  });
}

function findWeather() {
  // 1. Geocoding API を利用して、住所から緯度経度を取得する
  // 緯度経度が取得できたら、displayCoordinateが呼ばれるようにする

}

function displayCoordinate(result) {
  // 2. 緯度経度を表示する

  // 3. OpenWeatherMapを利用して、その緯度経度の天気を取得する
  // 天気が取得できたら、displayWeatherが呼ばれるようにする

  // 4. 地図の中心を移動する

}

function displayWeather(result) {
  // 5. 天気を表示する
  
}

