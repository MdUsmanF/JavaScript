function RightStarPattern(n,string) {
    for (let i = 1; i <= n; i++) {
        // printing spaces
        for (let j = 0; j < n - i; j++) {
          string += " ";
        }
        // printing star
        for (let k = 0; k < i; k++) {
          string += "*";
        }
        string += "\n";
      }
      return string;
}

let n = 5;
let string = "";
console.log(RightStarPattern(n,string));