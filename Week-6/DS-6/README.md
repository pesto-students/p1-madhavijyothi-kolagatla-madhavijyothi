# FOR SUM.JS
  Time complexity: O(N3). 
Three nested loops are traversing in the array, so time complexity is O(n^3).
Space Complexity: O(1). 
As no extra space is required.

# 
#
reference :https://www.geeksforgeeks.org/find-a-triplet-in-an-array-whose-sum-is-closest-to-a-given-number/

We need O(N):
We use SumO(N).js

#
x-->targeted number
Here we used ptr1= i+1(starting) and ptr2= arr.length-1
closestnum=10000000 (for supose) 
....> we sort firstly
Then , ptr1, ptr2 ----------> sum=arr[i]+arr[ptr1]+arr[ptr2]
now we compare if(x-closest< x- sum)
we make closest=sum and return closest
then we ptr++ else ptr2--


Complexity Analysis:

Time complexity: O(N2). 
There are only two nested loops traversing the array, so time complexity is O(n^2). Two pointer algorithm take O(n) time and the first element can be fixed using another nested traversal.
Space Complexity: O(1). 
As no extra space is required.