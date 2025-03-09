function closest(arr) {
    let closest = null;
    
    for (let num of arr) {
        if (closest === null || Math.abs(num) < Math.abs(closest) || (Math.abs(num) === Math.abs(closest) && num > closest)) {
            closest = num;
        }
    }
       if (arr.includes(-closest) && closest !== 0) {
        return null;
    }
    
    return closest;
}

console.log(closest([2, 4, -1, -3]));
console.log(closest([5, 2, -2]));    
console.log(closest([5, 2, 2]));     
console.log(closest([13, 0, -6]));   
