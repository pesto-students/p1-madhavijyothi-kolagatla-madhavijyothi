// applying with one more advancement

const memorise =(fn)=>
{
    let cache={};
    return (...args) =>
    {
      let cachekey=args.map(n=>n.toString() + '+').join('')
      if(cachekey in key)
      {
          return cache[cachekey];
      }
      else
      {
          let result=args.reduce((acc,curr)=>fn(acc,curr),0);
          cache[cachekey]= result;
          return result;
      }
    }
}
const add=(a,b) =>a+b

const memorizedAdd= memorise(add)



