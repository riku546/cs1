// Assignment

//dom取得
// const count = document.getElementById("count")
const count = document.querySelector("p")
console.log(count)

let cnt = 0;
count.textContent = 0;

function plus() {
  cnt++;

}

function minus() {
  cnt--;
}
