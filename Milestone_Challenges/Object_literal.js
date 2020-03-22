//object creation with object literal and adding properties

var car = {
    car_brand : "Tesla",
    car_model : "Model 3",
    price : 35000,

    //Adding methods to the objects

    teslaAutoPilot : function()
    {
        return "This car has Auto Pilot";
    }

}
 //calling the method using object

console.log(car.teslaAutoPilot());

//printing properties
console.log(car.car_brand);
console.log(car.car_model);
console.log(car.price);