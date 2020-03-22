//creation a object using object function
var myObj1 = new Object();

//Adding a property to newly created object

myObj1 = {firstname : "Swetha" , lastname : "Rao"};

//Printing the property values

console.log(myObj1.firstname);
console.log(myObj1.lastname);

//Creating a function

function car (model, price, company){
    this.model = model;
    this.price = price;
    this.company = company;
}

//Adding method to the object

myObj1 = new car("baleno", "700000", "Maruthi");

//printing the method values

console.log(myObj1.model);
console.log(myObj1.price);
console.log(myObj1.company);


