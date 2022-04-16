MEMORIZATION MEANS :
Memoization is an optimization technique where expensive function calls are cached such that the result can be immediately returned the next time the function is called with the same arguments.

#WHAT IS DOES

Memoization helps speed up function calls by storing previously computed results in a JavaScript object, aka cache. In other words, every time our memoize method is executed, one of two things can occur:
   1)If the input has been used before, locate it in cache and immediately return the value stored without executing any further computations.
   2)Use the input to execute any necessary computations, store the results in cache, return the result.
Is memoization same as caching?
Yes, kind of. Memoization is actually a specific type of caching. While caching can refer in general to any storing technique (like HTTP caching) for future use, memoizing specifically involves caching the return values of a function.

When to memoize your functions----
Although it might look like memoization can be used with all functions, it actually has limited use cases:

In order to memoize a function, it should be pure so that return values are the same for same inputs every time
Memoizing is a trade-off between added space and added speed and thus only significant for functions having a limited input range so that cached values can be made use of more frequently
It might look like you should memoize your API calls however it isn’t necessary because the browser automatically caches them for you. See HTTP caching for more detail
The best use case I found for memoized functions is for heavy computational functions which can significantly improve performance (factorial and fibonacci are not really good real world examples)
If you’re into React/Redux you can check out reselect which uses a memoized selector to ensure that calculations only happen when a change happens in a related part of the state tree.


FOR memo.js

1.........“n” ➡️ “…args” (line3) — the return function now accepts an unspecified number of parameters which can be accessed by using the array args or the arguments object.
2.........“cacheKey” (lines 4, 5, 6, 9) — we declared a variable called “cacheKey” which represents the name of the key (previously “n”) that will be used to either access the cache or declare a new cache property. This change is made in order to keep track of multiple inputs. We form cacheKey by mapping over the “args” array and returning a string of “n” and a “+”. For example, when calling memoizeAdd(10, 20, 30) the cacheKey will be “10+20+30+”.
3........“fn(n)” ➡️ “args.reduce((acc, curr) => fn(acc, curr), 0)” — due to the fact that memoizeAdd can accept any unspecified number of parameters, in order to find the sum of all parameters we can use Array.prototype.reduce.
