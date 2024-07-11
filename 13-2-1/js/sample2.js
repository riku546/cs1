// Sample 2-1
function showDialog() {
  alert('Hello');
}

// Sample 2-2
let count = 0;
function countClick() {
  count++;
  let element = document.getElementById('count');
  element.textContent = String(count);
}
