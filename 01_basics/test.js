console.log("Hello Usman");
function sumAll(startIndex, endIndex) {
    var sum = 0;
    for (let index = startIndex; index <= endIndex; index++) {
        sum = sum + index;    
    }
    return sum
}

var sum = sumAll(1,100)
console.log("The Sum is", sum);