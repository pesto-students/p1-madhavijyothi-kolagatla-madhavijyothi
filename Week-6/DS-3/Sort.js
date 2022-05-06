function Sort(arr,arr_size)
{
    let low =0
    let high =arr_size-1
    let temp=0
    let mid=0
  
while(mid<=high)
{
 if(arr[mid]==0)
 {
     temp=arr[low]
     arr[low]=arr[mid]
     arr[mid]=temp
     low++
     mid++
 }
 else if(arr[mid]==1)
 {
     mid++
 }
 else
 {
     temp=arr[mid]
     arr[mid] =arr[high]
     arr[high]=temp
     high--
 }
}
}
// function printArray(arr,arr_size)
// {
//     //arr_size=arr.length;
//     for(let i=0;i<arr_size;i++)
//     {
//         console.log(arr[i]);
//     }
// }
let arr= [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ];
     
    let arr_size = arr.length;
    Sort(arr, arr_size);
    console.log("Array after seggregation <br>")
    for(let i=0;i<arr_size;i++)
    {
        console.log(arr[i]);
    }