// Problem

//dom取得
const count = document.querySelector("#message");

//タイマーの秒数初期化
let time = 0;

function startNoodle() {
  
  if (time > 0) return;

  //タイマー処理
  setInterval(() => {
    time++;
    count.textContent = time;
  }, 1000);
}

function stopNoodle() {}
