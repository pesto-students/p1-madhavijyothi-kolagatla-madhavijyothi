function *returnfun()
{
    yield " closed";
    yield " resolved";
}
var gen= returnfun();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// RESULT:
// { value: ' closed', done: false }
// { value: ' resolved', done: false }
// { value: undefined, done: true }
