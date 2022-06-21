function BSstocks(arr)
{
    let left=0
    let max=0
    let right=1
    
    while (right<arr.length)
    {
        const profit= arr[right]- arr[left]
        if(profit>max)
        {
            max=profit
        }
        if(profit<0)
        {
        left=right
        }
        right++

    }
    return max;
}
var arr= [7,1,5,3,6,4]
n=arr.length
console.log(BSstocks(arr,n))