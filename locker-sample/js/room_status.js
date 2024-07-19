let BASE_URL = "https://edu-iot.iniad.org/api/v1";

function displayRoomStatus(result) {
  console.log(result);
  //結果を表示するdom
  const resultStatus = document.getElementById("monitoring-result")
  const roomTemp = document.getElementById("room-temperature");
  const roomHum = document.getElementById("room-humidity");
  const roomAirpres = document.getElementById("room-airpressure");
  const roomIll = document.getElementById("room-illuminance");

  //domにresultの値をセット
  resultStatus.textContent = result["status"];
  roomTemp.textContent = result["temperature"];
  roomHum.textContent = result["humidity"];
  roomAirpres.textContent = result["airpressure"];
  roomIll.textContent = result["illuminance"];
}

function getRoomStatus() {
  //input要素のvalue取得
  let userid = document.getElementById("iniad-id").value;
  let userpw = document.getElementById("iniad-pw").value;
  let roomNum = document.getElementById("room-number").value;

  let url = `https://edu-iot.iniad.org/api/v1/sensors/${roomNum}`;
  callRoomStatusAPI(url, "GET", userid, userpw, displayRoomStatus);
}
