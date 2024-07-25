function reverse(s) {
    let result = "";
    for (let i = s.length - 1; i >= 0; i--) {
        result += s[i];
        
    }

    return result
}

reverse("THIS")

// function go() {
//     let str = document.getElementById('target').value;
//     let elem2 = document.getElementById('original');
//     let elem3 = document.getElementById('reversed');

//     elem2.textContent = str;
//     elem3.textContent = reverse(str);
// }