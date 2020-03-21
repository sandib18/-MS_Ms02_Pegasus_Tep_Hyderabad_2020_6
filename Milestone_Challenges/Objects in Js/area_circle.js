//this program is to calculate area and perimeter of circle
// this program is to used to calculate the are and perimeter of circle

function circle (radius)
{
    this.radius = radius;

    //Area Method

    this.area = function()
    {
        return Math.PI * this.radius * this.radius;
    };

    //Perimeter method

    this.perimeter = function()
    {
        return 2*Math.PI*this.radius;
    };



}

//creating object and giving the radius value
var c = new circle(3);

//printing the area and perimeter

console.log("Area is "+ c.area());
console.log("Perimeter is "+ c.perimeter());

//if we want print the values with only 2 decimals

console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));


//console.log("Area is "+ c.area());
//console.log("Perimeter is "+ c.perimeter());
