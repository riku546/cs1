function displayIccardRegisterResult(result) {
  //dom
  const registerResult = document.getElementById("register-result");
  registerResult.textContent = result["status"];
}

function displayIccardDeleteResult(result) {
  const deleteResult = document.getElementById("delete-result");
  deleteResult.textContent = result["status"];
}

function registerIccard() {
  const userid = document.getElementById("iniad-id").value;
  const userpw = document.getElementById("iniad-pw").value;
  const icId = document.getElementById("register-iccard-num").value;
  const registerComment = document.getElementById(
    "register-iccard-comment"
  ).value;
  const url = "https://edu-iot.iniad.org/api/v1/iccards";
  const icInfo = { uid: icId, comment: registerComment };
  callIccardAPI(
    url,
    "POST",
    icInfo,
    userid,
    userpw,
    displayIccardRegisterResult
  );
}

function deleteIccard() {
  const userid = document.getElementById("iniad-id").value;
  const userpw = document.getElementById("iniad-pw").value;
  const url = "https://edu-iot.iniad.org/api/v1/iccards";

  callIccardAPI(url, "DELETE", null, userid, userpw, displayIccardDeleteResult);
}
