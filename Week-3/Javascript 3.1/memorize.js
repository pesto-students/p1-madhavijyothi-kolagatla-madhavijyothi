//simple add methos
const add= (n) =>(n+10);
add(9);
//memorized function
const memorizedAdd=() =>
{
    let cache={};
    return (n) =>
    {
        if(n in cache)
        {
            console.log('fetching from cache');
            return cache[n];
        }
        else{
            console.log('calculating result');
            let result= n+10;
            cache[n]=result;
            return result;
        }
    }
}
//returned function from memorized
const newAdd= memorizedAdd();
console.log(newAdd(9));//calculated
console.log(newAdd(10));//calculated
console.log(newAdd(9));//cached
