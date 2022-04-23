#  PROMISE EXAMPLE EXPLAINATION

getNumber when called will return a Promise which will either resolve or reject with a string that contains the random number. The promise returned will resolve/reject in randomNumber*10 ms (which gives us a range of 0-1s)

lets define a class named CustomPromise and replace Promise with it.

Updating our CustomPromise class to support then chaining
Let’s start by setting up the base again. Replace CustomPromise by ES6’s Promise.
We will set the randomNumber to some known quantity (say 10) and create a method called incrementBy which will receive two arguments (original value and increment quantity), it returns the sum of both.

Following are the changes made,
=>We updated thenFns such that it is now initialized to an empty list.

=>Inside our then method, we are now pushing each then handler onto the list.

=>In our resolver, instead of calling the last then handler, we now loop through entire thenFns queue and call each method. The first then handler receives resolvedData as the argument following which each method receives the value returned by previous handler.

=>That’s it, this makes our class compatible with the changes we did (i.e chaining)