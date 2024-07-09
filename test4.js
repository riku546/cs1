// function result(p1, p2) {
//   return p1 > p2 ? "win" : "lose";
// }

// console.log(result(1, 10));
// console.log(result(1, 1));
// console.log(result(10, 1));

// function permutation(n, k) {
//   let result = 1;
//   for (let index = n; index > n - k; index--) {
//     result *= index;
//   }
//   return result;
// }

// let p = permutation(10, 3);
// console.log(p);

//母音（a , i , u , e , o）を取り除く文字列を返す
// function abbrev(text) {
//   let result = "";
//   for (const s of text) {
//     if (/[aeiou]/.test(s)) continue;
//     result += s;
//   }
//   return result;
// }

// console.log(abbrev('ahiufgeog'))

//一番文字数が長い文字列を返す
// function max_len(xs) {
//   let localString = "a";
//   for (let i = 0; i < xs.length; i++) {
//     if (localString.length < xs[i].length){
//       localString = xs[i]
//     }
//   }
//   return localString;
// }

// console.log(max_len(["i", "have", "a", "pen"]));
