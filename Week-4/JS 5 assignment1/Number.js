const text= document.getElementById("text");
const button= document.getElementById("button");
const getNumber = () =>
 new Promise((resolve, rejected)=>
 {
     const randomNumber = parseInt(Math.random()*100, 10);
     setTimeout(()=>
     {
         if(randomNumber%5 ===0)
         {
             rejected('rejected with number : ${randomNumber}');     
         }
         resolve('Resolved with number: ${randomNumber}');
     },randomNumber*10);
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