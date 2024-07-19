let BASE_URL = "https://edu-iot.iniad.org/api/v1";

//input要素のvalue取得

function displayLockerPosition(result) {
  const lockerResult = document.getElementById("locker-result");
  const lockerAddress = document.getElementById("locker-address");
  const lockerFloor = document.getElementById("locker-floor");

  lockerResult.textContent = result["status"];
  lockerAddress.textContent = result["lockerAddress"];
  lockerFloor.textContent = result["lockerFloor"];
}

function displayIccardInformation(result) {
  //dom取得
  const iccardResult = document.getElementById("iccard-result");
  const iccardId = document.getElementById("iccard-id");
  const iccardComment = document.getElementById("iccard-comment");

  iccardResult.textContent = result["status"];
  iccardId.textContent = result["iccardid"];
  iccardComment.textContent = result["iccardComment"];
}

function getLockerPosition() {
  //INIAD IDとpasswordをinput要素から取得する
  const userid = document.getElementById("iniad-id").value;
  const userpw = document.getElementById("iniad-pw").value;

  const url = "https://edu-iot.iniad.org/api/v1/locker";
  //ロッカーの位置を取得しdisplayLockerPostionに結果を渡す
  callLockerPositionAPI(url, "GET", userid, userpw, displayLockerPosition);
}

function getRegisteredIccard() {
  //INIAD IDとpasswordをinput要素から取得する
  const userid = document.getElementById("iniad-id").value;
  const userpw = document.getElementById("iniad-pw").value;
  const url = "https://edu-iot.iniad.org/api/v1/iccards";

  callRegisteredIccardAPI(url, "GET", userid, userpw, displayIccardInformation);
}
