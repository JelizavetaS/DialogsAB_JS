// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// if (nosacījums_vai_saliktais_nosacījums) darbība; darbība_kura_tiks_izpildīta_jebkurā_gadījumā;
// if (nosacījums_vai_saliktais_nosacījums)
//      darbība;
// darbība_kura_tiks_izpildīta_jebkurā_gadījumā;
// if (nosacījums_vai_saliktais_nosacījums) {darbība;}
// if (nosacījums_vai_saliktais_nosacījums) {darbības;}
// if (nosacījums_vai_saliktais_nosacījums) darbība; else savādākā_darbība;
// if (nosacījums_vai_saliktais_nosacījums) {darbības;} else {savādākas_darbības;}

// https://www.w3schools.com/js/tryit.asp?filename=tryjs_ifthen
/*
if (new Date().getHours() < 11) {
  document.getElementById("demo").innerHTML = "Good Morning!";
}

if (new Date().getHours() >= 11 && new Date().getHours() < 19) {
  document.getElementById("demo").innerHTML = "Good Day!";
}

if (new Date().getHours() >= 19) {
    document.getElementById("demo").innerHTML = "Good Evening!";
  }
*/

// Get the current hour
let currentHour = new Date().getHours();
let productSuggestion;

// Check the time and suggest a product
if (currentHour < 12) {
    productSuggestion = "How about some fresh fruits for breakfast?";
} else if (currentHour < 18) {
    productSuggestion = "It's a great time to buy some snacks for the afternoon!";
} else {
    productSuggestion = "Wind down with a nice herbal tea or some dessert!";
}

// Display the product suggestion
document.getElementById("productSuggestion").innerHTML = productSuggestion;


