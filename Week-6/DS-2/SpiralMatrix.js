function SpiralMatrix(matrix)
{
 let ans=[];
 if(matrix.length==0)
 return matrix

 let R=matrix.length
 let C=matrix[0].length
 
 let seen = new Array(R)
 for(let i=0;i<R;i++)
 {
  seen[i] = new Array(C)
  for(let j=0;j<C;j++)
  {
  seen[i][j]= false
  }
 }
//iterate over R*C-1
let c=0,r=0,di=0
let dr=[0,1,0,-1]
let dc=[1,0,-1,0]
for(let i=0;i<(R*C);i++)
{
    ans.push(matrix[r][c]);
    seen[r][c] = true;
      let cr=r+dr[di];
     let cc=c+dc[di];
     if (0 <= cr && cr < R && 0 <= cc && cc < C
        && !seen[cr][cc]) {
        r = cr;
        c = cc;
    }
    else {
        di = (di + 1) % 4;
        r += dr[di];
        c += dc[di];
    }
}
return ans;
}

// Driver Code
let matrix=[[ 1, 2, 3, 4 ],[ 5, 6, 7, 8 ],
[ 9, 10, 11, 12 ],[ 13, 14, 15, 16 ]];
console.log(SpiralMatrix(matrix));
               