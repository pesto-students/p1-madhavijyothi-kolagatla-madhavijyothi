<--------------SIMPLE EXAMPLE----------->
first lets define function.As a parameter,it will accept function (fn);

          const memorize =(fn) =>{}

lets declare intial cache obj

          const memorize =(fn)={
              let cache={};
          }
Now we can return some output
        
        const memorize =(fn)=>
        {
            let cache= {};

            retrun (n)=>
            {
                if(n in cache)
                return cache[n];
            }
        }
if same method goes, result stores and make output as cache, if not it will be calculated

        const memorize =(fn)=>
        {
            let cache={};
            return (n)=>
            {
                if(n in cache)
                {
                    return cache[n];
                }
                else{
                    let result= fn(n);
                    cache[n]= result;
                    return result;
                }
            }

        }

//calculated //calculated
if the function is called again with same parameters
// it just memorize the already calculated one nothing much , it saves the memory and dont take much time for the program to be executed , fast results can make within less amount of time and easily opitimized and used to tackle the issue without been triggering or calculating once again the function.