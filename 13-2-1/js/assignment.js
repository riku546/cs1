// Assignment

//dom取得
const count = document.getElementById("count");

let cnt = 0;
count.textContent = 0;

function plus() {
  cnt++;
  count.textContent = cnt;
}

function minus() {
  cnt--;
  count.textContent = cnt;
}
