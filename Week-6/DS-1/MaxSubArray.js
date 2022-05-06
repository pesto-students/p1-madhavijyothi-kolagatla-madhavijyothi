function MaxSubarry(a,size)
{
   var maxint = Math.pow(2, 53)
   var max_sofar= -maxint-1
   var max_ending=0
   for(var i=0; i<size;i++)
   {
       max_ending= max_ending+a[i]
       if(max_sofar<max_ending)
           max_sofar=max_ending
       if(max_ending<0)
           max_ending=0
   }
   return max_sofar
}

var a = [ -2, -3, 4, -1, -2, 1, 5, -3 ]
console.log("Maximum contiguous sum is",MaxSubarry(a, a.length))