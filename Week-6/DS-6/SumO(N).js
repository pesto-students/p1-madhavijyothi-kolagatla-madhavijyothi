// Sort the given array.
// Loop over the array and fix the first element of the possible triplet, arr[i].
// Then fix two pointers, one at I + 1 and the other at n – 1. And look at the sum, 
// If the sum is smaller than the sum we need to get to, we increase the first pointer.
// Else, If the sum is bigger, Decrease the end pointer to reduce the sum.
// Update the closest sum found so far.

function SumArray(arr, x)
{
    //sort
    arr.sort((a, b) => a - b);
    // To store the closest sum
   // not using INT_MAX to avoid
   // overflowing condition
   let closestSum = 1000000000
   //we take ptr1= i+1 and ptr2= arr.length-1
   for(let i=0;i<arr.length;i++)
   {
       let ptr1=i+1, ptr2= arr.length-1
    //    While there could be more pairs to check
       while (ptr1 < ptr2) {

           // Calculate the sum of the current triplet
           let sum = arr[i] + arr[ptr1] + arr[ptr2];

           if(Math.abs(x-(closestSum))> Math.abs(x-(sum)))
           //  if (Math.abs(1*x - sum) < Math.abs(1*x - closestSum))

           {
               closestSum=sum
           }
            // If sum is greater then x then decrement
            // the second pointer to get a smaller sum
            if (sum > x) {
                ptr2--;
            }
 
            // Else increment the first pointer
            // to get a larger sum
            else {
                ptr1++;
            }
       }
    }
    // Return the closest sum found
    return closestSum;
   }

   let arr = [ -1, 2, 1, -4 ];
   let x = 1;
   
   console.log(SumArray(arr, x));
   
