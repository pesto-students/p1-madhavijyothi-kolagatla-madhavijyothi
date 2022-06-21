const button= document.getElementById("button");
const text= document.getElementById("text");

const CustomPromiseState={
    PENDING:"PENDING",
    RESOLVED:"RESOLVED",
    REJECTED: "REJECTED"
};
class CustomPromise{
    constructor(fn)
    {
        this.CustomPromiseState= CustomPromiseState.PENDING;
        this.resolver= this.resolver.bind(this);
        this.rejector= this.rejector.bind(this);
        this.thenFn= null;
        this.catchFn= null;
        fn(this.resolver,this.rejector);
    }
    resolver(resolvedData) {
        this.thenFn && this.thenFn(resolvedData);
        }
        rejector(rejectedData) {
        this.catchFn && this.catchFn(rejectedData);
        }
        then(thenFn) {
        this.thenFn = thenFn;
        
        return this;
        }
        catch(catchFn) {
        this.catchFn = catchFn;
        return this;
        }
        
}
const getNumber=()=>
    new CustomPromise((resolve, reject)=>
    {
     const randomNumber= parseInt(Math.random()*100,10);
    setTimeout(() =>
    {
         if(randomNumber%5===0)
     {
         resolve('resolved with num: ${randomNumber}');
     }
         reject('rejected with num: ${randomNumber}');
    })

    });
    const clickHandler =()=>
    {
        display("Loading...");
        const numberProm= getNumber();
        numberProm.then(display).catch(display);
    };
    const display=(content)=>
    {
        text.innerText= content;
    };
    button.addEventListener("click", clickHandler);