# EXPLAINATION
Let's try to decompose what happens there.

At its core, it's just about this:

let count = 0;
let message = count;
console.log(message);
count++; // it's exactly the same as count = count + 1;
console.log(message); // still prints 0


# HERE EVEN THE COUNT GETTING INCREMENTED THE FUNCTION GOT COMPLETED AND IT IS APPLICABLE TO ONLY THAT INSTANCE
# HOW MANY TIMES THE FUNCTION increment() IS DONE ITS STILL COUNT UNDER createincrement() WHICH TRIGGERS "COUNT" AS 0.

This has nothing to do with closures, and everything to do about numbers being immutable values. When we increment count we are assigning to the variable a new instance of a number with the value 1. message is still pointing to the old instance (value, in this case it's the same), so the log is going to print the same old value.

If you are considering that count is a container in which you can insert a numeric value, which is slightly wrong.

It is a pointer to a numeric and immutable value, that sits in memory somewhere. When you do message = count you ensure message and count are pointing to the same memory address, that contains a 0.

# When you write count++, you are allocating a new number in memory, somewhere, for the number 1, and count now points to the new object. 

# Message is unaffected by this operation. This is the crucial bit that I think is not crystal clear.


Let's explain the counter example like answer would be different and think as got.

//CODE IN CounterResult.js

# PRESENT OUT OD LOG FUNCTION,IF PRESENT INSIDE THE FUNCTION THEN ANSWER WOULD BE "COUNT IS 3"
