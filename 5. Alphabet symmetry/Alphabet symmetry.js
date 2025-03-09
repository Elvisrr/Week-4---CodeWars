function solve(arr) {
    return arr.map(word => 
        [...word.toLowerCase()].reduce((count, char, index) => 
            count + (char.charCodeAt(0) - 96 === index + 1 ? 1 : 0), 0)
    );
}

console.log(solve(["abode", "ABc", "xyzD"]));
