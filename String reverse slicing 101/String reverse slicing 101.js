function reverseSlice(string) {
    let cambio = [];
    for (let i = 0; i < string.length; i++) {
        cambio.push(string.slice(0, string.length - i).split('').reverse().join(''));
    }
    return cambio;
}

console.log(reverseSlice("123"));   
console.log(reverseSlice("abcde")); 
