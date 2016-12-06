// Declaring types
// - this is optional

var myName: string = "Jonny";
var myAge: number = 24;
var canVote: boolean = true;
var anything: any = "";

// any type can be reasigned to a different type
anything = 7;

document.getElementById("tsStuff").innerHTML = "My name is "  + myName;
document.write("myName is a " + typeof(myName) + "<br />")
document.write("myAge is a " + typeof(myAge) + "<br />")
document.write("canVote is a " + typeof(canVote) + "<br />")
document.write("anything is a " + typeof(anything) + "<br />")

var strToNum: number = parseInt("5");
var numToStr: number = 5;

document.write("numToStr is a " + typeof(numToStr.toString()) + "<br />")
