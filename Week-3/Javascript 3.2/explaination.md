<---------------------------------EXPLAINATION------------------------------------------------>


In JavaScript, built-in methods in the form of bind(), call() and apply(), allow us to change the value of this inside of a function. This article is going to take a closer look at these methods.

# Bind (binding like adding or concating to values or vars)

The bind() method can change the value of this in a function by creating a bound function which can be stored for later use. It does not call the function immediately.
Bind takes in multiple arguments. The first argument is the object that we want to set to be the value of this inside of the function we’re calling the bind()method on. The second arguments prepend to the list when we call the function with bind().
Let’s take a look with a code example.

const person = {
  firstName: 'Madhavi',
  lastName: 'Jyothi',
  getName(){
    return `${this.firstName} ${this.lastName}`
  },
}
console.log(person.getName.bind()()); // undefined undefined (no binding do undefined)
We get undefined undefined as the value of this is set to the window object.
If we call the bind() method but pass in an object, we get a different result.
const person = {
  firstName: 'Madhavi',
  lastName: 'Jyothi',
  getName(){
    return `${this.firstName} ${this.lastName}`
  }
}
const newe = {
  firstName: 'kolagatla',
  lastName: 'done',
}
console.log(person.getName.bind(newton)()); // Isaac Newton


We now get Isaac Newtown as we passed in the newton object as the first argument of the bind() method. We set the this object inside of the getName() method to the newton object.
We can also pass in additional arguments to the bind() method. For example, we can add another method to the person object that takes a greeting parameter and returns a string which is combined with existing properties.

const person = {
  firstName: 'Madhavi',
  lastName: 'Jyothi',,
  getName(){
    return `${this.firstName} ${this.lastName}`
  },
  greeting(greeting) {
    return `${greeting}, my name is ${this.firstName} ${this.lastName}`
  }
}
const newton = {
  firstName: 'Isaac',
  lastName: 'Newton'
}
console.log(person.greeting.bind(newton, 'Hello')()); // Hello, my name is Kolagatla done
Running the above code returns Hello, my name is Kolagatla done as we set this to newe, then pass our argument to the person.greeting method by passing ‘Hello' as a parameter.



# Call (Calling the fuction with the objects passses as arguments)

The call() method allows us to invoke a function immediately with the given this object passed as an argument, as well as additional arguments as a comma-separated list.
The purpose of the call() method is to allow for reuse of the same function with different values.

var title = {
  name: 'The Godfather'
};
function movie(year, length) {
  return `Movie: ${this.name}, Year: ${year}, Length: ${length}`;
};
console.log(movie.call(title, '1972', '175 mins')); // Movie: The Godfather, Year: 1972, Length: 175 mins

In the above code, the object title does not have a movie() method, but it borrows the method via call. The this object provided to the function call is the title object.
If we wanted to add another movie, we use the same functionality without needing to write any additional code apart from passing in our new arguments.

var title2 = {
  name: 'The Shawshank Redemption'
}
console.log(movie.call(title2, '1994', '142 mins')); // Movie: The Shawshank Redemption, Year: 1994, Length: 142 mins



# Apply(Same as call but it accepts the array or arguments like [arg1, arg2,....] or [2,3,4 ...])

The apply() method is almost identical to call. The only difference is that the call() method accepts arguments as a comma-separated list, the apply() method accepts them as an array.

var title3 = {
  name: 'Pulp Fiction'
};
console.log(movie.apply(title3, ['1994', '154 mins'])); // Movie: Pulp Fiction, Year: 1994, Length: 154 mins

#  When to use these methods

All of these methods behave similarly, so it can be difficult to work out which one to use and when.
As a general rule use 
# bind() when you want to call the function later, this can be useful when working with events.

# call() and apply() methods should be used when you need to invoke the function immediately, call() if the additional arguments are a list, and apply() if they are an array.
