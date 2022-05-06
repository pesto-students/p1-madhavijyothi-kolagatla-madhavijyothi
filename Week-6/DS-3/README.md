# explaination

sorting 0's,1's and 2's

REFERENCE :
https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/

--> consider low high mid and temp values
high= arr.size-1 and low=0 mid=0 and tem=0
#
-> 2secanrios arr[mid]==0 or arr[mid]==1 or others

next we get if mid<=high we consider arr[mid]==0 swap{temp and arr[low]} low++ and mid++
else if(arr[mid]==1) we consider mid++
else temp and arr[high] swap and consider high--

Thats is and now we print arr[i] with arr_size = arr.length;

Complexity Analysis: 
# Time Complexity: O(n). 
Only one traversal of the array is needed.
#

# Space Complexity: O(1). 
No extra space is required.