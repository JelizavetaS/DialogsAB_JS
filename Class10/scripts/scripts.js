// https://www.w3schools.com/js/js_object_display.asp

// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

// Display Properties
// document.getElementById("demo").innerHTML = person;

//manuāla īpašību iesaukšana
//document.getElementById("demo").innerHTML = person.name + "," + person.age + "," + person.city;
//document.getElementById("demo").innerHTML = person["name"] + "," + person["age"] + "," + person["city"];

//Build a Text
let text = "";
console.log("Testa rindas saturs pirms cikla for"+ text);

for (let x in person) {
    console.log(x);
    text += person[x] + " "; // text = text + person[x] + ""; // ""+ "John" + " " -> "John "
                                                            //"John " -> "John " + "30" + " " -> "John 30 "
                                                            //...
    console.log(text);
};
console.log("Testa rindas saturs pēc cikla for"+ text);

// Display the Text
document.getElementById("demo").innerHTML = text;