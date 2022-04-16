var car ={
    registrationno: "GAT 3009382",
    Brand:"Toyato"
}
     function displayDetails(ownerName)
    {
        console.log(ownerName+" , this is the car" +this.registrationno+" " +this.Brand);
    }
    displayDetails.bind(car, "Vivian");
 //var  myCar= car.displayDetails(car, "Madhavi");
 displayDetails.call(car, "Vivian");
 displayDetails.apply(car, ["Vivian"]);