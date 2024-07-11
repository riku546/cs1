// Problem

//時間を入力するinput
const time = document.querySelector("#time");
//秒数を表示するもの
const count = document.querySelector("#message");

//タイマーの秒数初期化
let seconds = 0;
//setIntervalを入れる
let timer;

function startNoodle() {
  //スタートボタンの2回目以降のクリックを無効化
  if (seconds > 0) return;

  //タイマー処理
  timer = setInterval(() => {
    seconds++;
    count.textContent = seconds;
  }, 1000);
}


function stopNoodle() {
  seconds = 0
  count.textContent = 0;
  clearInterval(timer);
}
