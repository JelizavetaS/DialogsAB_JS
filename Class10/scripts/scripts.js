// https://www.w3schools.com/js/js_object_display.asp

// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York",
    yearOfBirth: () => { return 2024 - this.age }
  };

// Display Properties
// document.getElementById("demo").innerHTML = person;

//manuāla īpašību iesaukšana
//document.getElementById("demo").innerHTML = person.name + "," + person.age + "," + person.city;
//document.getElementById("demo").innerHTML = person["name"] + "," + person["age"] + "," + person["city"];

//Build a Text
let text = "";
console.log("Testa rindas saturs pirms cikla for"+ text);

// for (let x in person) {
//     console.log(x);
//     text += person[x] + " "; // text = text + person[x] + ""; // ""+ "John" + " " -> "John "
//                                                             //"John " -> "John " + "30" + " " -> "John 30 "
//                                                             //...
//     console.log(text);
// };
// console.log("Testa rindas saturs pēc cikla for"+ text);

// const valuesOfPropOfPerson = Object.values(person);

// for (let x of valuesOfPropOfPerson) {
//     console.log(x);
//     text += x + " "; // text = text + person[x] + ""; // ""+ "John" + " " -> "John "
//                                                             //"John " -> "John " + "30" + " " -> "John 30 "
//                                                             //...
//     console.log(text);
// };
// console.log("Testa rindas saturs pēc cikla for"+ text);

const valuesOfPropOfPerson = Object.entries(person);

for (let [x, y] of valuesOfPropOfPerson) {
    // x - propery_name
    // y - property_value

    // if (y instanceof Function) {
    //     console.log(y + " ir funkcijas apraksts");
    // } else {
    //     console.log(y + " nav funkcijas apraksts");
    // }

    console.log(x +": " + y + "(" + ((y instanceof Function) ? "tas ir funkcijas apraksts" : "tas nav funkcijas apraksts") + ")" );
    // console.log(x + ": " + person[x]);
    // text += y + "(this value of "+ x +" property) "; // text = text + person[x] + ""; // ""+ "John" + " " -> "John "
    if (y instanceof Function != true) {
        text += y + " ";                                                        //"John " -> "John " + "30" + " " -> "John 30 "
    }
                                                            //...
    console.log(text);
};
console.log("Testa rindas saturs pēc cikla for"+ text);

text = JSON.stringify(person);


// Display the Text
document.getElementById("demo").innerHTML = text;

