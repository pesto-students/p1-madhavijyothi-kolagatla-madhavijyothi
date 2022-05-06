# APPROACH

Intuition:

Draw the path that the spiral makes. We know that the path should turn clockwise whenever it would go out of bounds or into a cell that was previously visited.

# --------------------------------- Algorithm-------------------------------

ALGORITHM:

Let the array have R rows and C columns. seen[r] denotes that the cell on the r-th row and c-th column was previously visited. Our current position is (r, c), facing direction di, and we want to visit R x C total cells.

As we move through the matrix, our candidate’s next position is (cr, cc). If the candidate is in the bounds of the matrix and unseen, then it becomes our next position; otherwise, our next position is the one after performing a clockwise turn.

# ---------------------------------------------------VERBAL----------------------

for ans;//arraylist<integer>();
->seen[R][C] boolean
for loop ===> r=0,c=0,di=0
dc={1,0,-1,0}, dr={0,1,0,-1}  => cr= r+dr[di], cc=c+dc[di]
if(cr>=0 && cr<R && cc>=0 && cc<C && !seen[cr][cc]) ==> r=cr; c=cc;
else { di= (di+1)%4; r= r+dr[di]; c= c+dc[di]; }
return ans


Complexity Analysis:

# Time Complexity:
 O(N), where N is the total number of elements in the input matrix. We add every element in the matrix to our final answer.
#  
#  Space Complexity: 
O(N), the information stored in seen and in ans.
