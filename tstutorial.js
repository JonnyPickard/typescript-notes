// Declaring types
// - this is optional
var myName = "Jonny";
var myAge = 24;
var canVote = true;
var anything = "";
// any type can be reasigned to a different type
anything = 7;
document.getElementById("tsStuff").innerHTML = "My name is " + myName;
document.write("myName is a " + typeof (myName) + "<br />");
document.write("myAge is a " + typeof (myAge) + "<br />");
document.write("canVote is a " + typeof (canVote) + "<br />");
document.write("anything is a " + typeof (anything) + "<br />");
var strToNum = parseInt("5");
var numToStr = 5;
document.write("numToStr is a " + typeof (numToStr.toString()) + "<br />");
