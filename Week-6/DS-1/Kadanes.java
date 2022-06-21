import java.util.*;
import java.io.*;

class Solution{
  
   public static int MaxSubarray(int nums[])
    {
      int n= nums.length;
      int max_upto= Integer.MIN_VALUE;
      int max_ending=0;
      for(int i=0;i<n;i++)
      {
        max_ending = max_ending + nums[i];
    	  if(max_upto < max_ending)
    	  {
    		  max_upto = max_ending;
    	  }
    	  if(max_ending < 0)
    	  {
    		  max_ending =0;
    	  }
      }
     return max_upto;
    }
    public static void main(String[] args)
    {
    	 int [] nums= {-2, -3, 4, -1, -2, 1, 5, -3};
      System.out.println("Maximum contiguous sum is " + MaxSubarray(nums));
          
    }
}