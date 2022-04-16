The stack works as expected, but with one small problem. Anyone can modify items array directly because stack.items property is exposed.
That’s an issue since it breaks the encapsulation of the stack: only push() and pop() methods should be public, but stack.items or any other details shouldn’t be accessible.
Refactor the above stack implementation, using the concept of closure, such that there is no way to access items array outside of createStack() function scope.
Okay, this code needs little refactoring, the items array needs to moved up in the scope.


---------------------------# NEW CODE----------------------------

After this change, there is no way to access or modify items array ,from the outside of createStack() scope.
items is now a private variable, and the stack is encapsulated: only push() and pop() method are public.
push() and pop() methods, being closures, capture items variable from createStack() function scope.