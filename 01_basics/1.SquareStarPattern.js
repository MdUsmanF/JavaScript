function SquarePattern(N, PrintIcon) {
    for(let start = 0; start<=N; start++){
        for(let end = 0; end <= N; end++){
            PrintIcon += "*";
    }
    PrintIcon += "\n";
    }
    return PrintIcon
}

let PrintIcon = "";
console.log(SquarePattern(5, PrintIcon));