//object creation using constructors and prototypes

function Employee(name)
{
    this.name = name;

    this.getName = function()
    {
        return this.name;
    }

}

var e1 = new Employee("Tom");
var e2 = new Employee("Smith");

console.log("E1 name is " + e1.getName());
console.log("E2 name is " + e2.getName());
