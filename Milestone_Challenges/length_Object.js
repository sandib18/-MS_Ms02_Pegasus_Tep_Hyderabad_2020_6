//This program is to know the length of javaScript object

//Object Creation

var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 }; 

//to know the length

objectLength = Object.keys(student).length;

console.log("length of the object is " + objectLength);