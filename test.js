navigator.geolocation.getCurrentPosition(
  function (position) {
    const apiKey = "46c173a7f29f50a5f4c1642978d763af";

    //緯度
    const currentLatitude = position.coords.latitude;
    //経度
    const currentLongtitude = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongtitude}&appid=${apiKey}`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => console.log(res));
  },
  function (error) {
    console.log(error);
  }
);
