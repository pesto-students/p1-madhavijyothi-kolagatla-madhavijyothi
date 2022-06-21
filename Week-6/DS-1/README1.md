# REFERENCE
https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/


Kadane’s Algorithm can be viewed both as a greedy and DP. As we can see that we are keeping a running sum of integers and when it becomes less than 0, we reset it to 0 (Greedy Part). This is because continuing with a negative sum is way more worse than restarting with a new range. Now it can also be viewed as a DP, at each stage we have 2 choices: Either take the current element and continue with previous sum OR restart a new range. These both choices are being taken care of in the implementation. 

Time Complexity: O(n)

Auxiliary Space: O(1)
# TIME COMPLEXITY

Time Complexity: O(n)

# SPACE COMPLEXITY

Auxiliary Space: O(1)

# O(1) space complexity means that the amount of memory that you use is constant and does not depends on the data that it is processing