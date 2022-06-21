function hasDuplicate(arr){
    return new Set(arr).size !== arr.length 
}

console.log(
    hasDuplicate(["a", "b", "c", "a"])
// true
);

console.log(
    hasDuplicate(["a", "b", "c"]))
//false

console.log(
    hasDuplicate(["7", "2", "3", "7"])
// true
);

console.log(
    hasDuplicate(["3", "4", "1","2","7","8"]))
//false


// RESULT:
// true
// false
// true
// false
//Time complexity is O(N)