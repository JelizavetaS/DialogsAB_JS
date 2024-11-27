//https://www.javascripttutorial.net/javascript-bom/javascript-window/
//sk.sadaļu "Alert" alert("Cienījamais lietotājs, tulīt mēs Tevi informēsim par ...");//viss, kas tiks plānots pēc, tiks izpildīts tad, kad lietotājs noreaģēs uz paziņojumu
//-------------------------------------Section 1. Window------------------------------------------------------------




//-------------------------------------------------------------------------------------------------
//Window
var counter = 1;
var showCounter = () => console.log({ counter });

console.log(counter);
console.log(window.counter);

showCounter();
window.showCounter();

//1)---------------Window size----------
//inner
const inner_width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
console.log(window.innerWidth, document.documentElement.clientWidth, document.body.clientWidth);
console.log("Pārlūka loga iekšējās daļas platums - " +inner_width);

//inner height
const inner_height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
console.log(window.innerHeight, document.documentElement.clientHeight, document.body.clientHeight)
console.log("Pārlūka loga iekšējās daļas augstums - " +inner_height);



//outer width
const outer_width = window.outerWidth
console.log("Pārlūka loga ārējās daļas platums - " +outer_width);

//outer height
const outer_height = window.outerHeight
console.log("Pārlūka loga ārējās daļas augstums - " +outer_height);

//2)---------------Open a new window---------

//let url = 'http://127.0.0.1:5500/DialogsAB_JS/Class7/index7.html';
//let jsWindow = window.open(url,'Class7');

// drošības pēc lokālu failu aplūkošana ir bloķēta
// Note that the web browser will block the popup automatically. To see the new window, you need to unblock the popup from your web browser. 

/*
//let jsWindow = window.open(
           //"https://rtu.lv",
  //  "http://127.0.0.1:5500/DialogsAB_JS/Class8/index8.html",
           //"RTU",
  //  "Class08",
  //  "height=600,width=800");
  
  //3)---------------Resize a window-------------
// setTimeout(() => {
 //   jsWindow.resizeTo(600, 300);
 // }, 3000); //The following example opens a new window that loads the page and resize it to (600,300) after 3 seconds:
  
  //4)------------Moving window to a specified coordinate----------
 // setTimeout(() => {
 //     jsWindow.moveBy(20,-50); //In this method, x and y are horizontal and vertical coordinates to be moved to. 
 // }, 4000); //The following example opens a new window and moves it to (20,-50) coordinate after 4 seconds
 
  //5)---------------Close a window---------------
  //setTimeout(() => {
  //    jsWindow.close();
  //}, 10000); //The following example opens a new window and closes it after 10 seconds:
*/
// 6)---------------The window.opener property---------------
//-> A newly created window can reference back to the window that opened it via the window.opener property. This allows you to exchange data between the two windows. 
// -> console -> "window.opener"




//-------------------------------------------------------------------------------------------------
//Alert - lietotāja informēšana, ziņojums
//alert("Cienījamais lietotājs, tulīt mēs Tevi informēsim par ...");//viss, kas tiks plānots pēc, tiks izpildīts tad, kad lietotājs noreaģēs uz paziņojumu
// -> https://www.javascripttutorial.net/javascript-bom/javascript-alert/



//-------------------------------------------------------------------------------------------------
//Confirm - displays a confirmation dialog
//https://www.javascripttutorial.net/javascript-bom/javascript-confirm/
//->The question is an optional string to display in the dialog.
//->The result is a Boolean value indicating whether the OK or Cancel button was clicked. If the OK button is clicked, the result is true; otherwise, the result is false.
//->Note that if a browser ignores in-page dialogs, then the result is always false.

//let result = confirm('Jā vai nē?');
//let message = result ? 'Jūs nospiedāt OK pogu' : 'Jūs nospiedāt Cancel pogu';
//alert(message);





//-------------------------------------------------------------------------------------------------
//Prompt - plašāka atgriezeniskā saite no lietotāja
//https://www.javascripttutorial.net/javascript-bom/javascript-prompt/
//-> The prompt() is a method of the window object. The prompt() method instructs the web browser to display a dialog with a text, text input field, and two buttons OK and Cancel.
//The prompt() is a method of the window object.
//The prompt() shows a dialog that prompts the user to enter a text and wait until the user submit or cancel the dialog.
//The prompt() returns a string containing a string entered by the user or null if the user did not enter anything.

//1) Display a prompt dialog
//let lang = prompt('What is your favorite programming language?');

//let feedback = lang.toLowerCase() === 'javascript' ? `It's great!` :
//    `It's ${lang}`;

//alert(feedback);

//2) Convert a user input to a number
//The result of the prompt() is a string. If you want to get the answer as a number, you should always cast the string into a number.
//The following example uses prompt() to display a dialog that asks users for their ages. If users are 16 years old or above, they are eligible to join. Otherwise, they will not be.

//let ageStr = prompt('How old are you?');
//let age = Number(ageStr);
//let feedback = age >= 16 ?
//    'You're eligible to join.' :
//    'You must be at least 16 year old to join.';
//alert(feedback);





//-------------------------------------------------------------------------------------------------
//setTimeout()
//The setTimeout() is a method of the window object. The setTimeout()  sets a timer and executes a callback function after the timer expires.
//https://www.javascripttutorial.net/javascript-bom/javascript-settimeout/
//let timeoutID  = setTimeout(cb [,delay], arg1, arg2,...);
//In this syntax: "cb" is a callback function to be executed after the timer expires. = Ko pildam
//"delay" is the time in milliseconds that the timer should wait before executing the callback function. If you omit it, the delay defaults to 0. = Kad pildam
//"arg1, arg2, …" are arguments passed to the cb callback function.
//The "setTimeout()" returns a timeoutID which is a positive integer identifying the timer created as a result of calling the method.
//The timeoutID can be used to cancel timeout by passing it to the "clearTimeout()" method.
var timeoutID; //globālais mainīgais

function showAlert() { //shows an alert dialog
    timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!'); //sets a timer and executes a callback function when the timer expires.
    console.log("New timeoutID - " + timeoutID);
}

function cancelAlert() {
    console.log(" timeoutID to be cleared - " + timeoutID);
    clearTimeout(timeoutID); // cancel timeout

}

//-------------------------------------------------------------------------------------------------
//setInterval
//The setInterval() repeatedly calls a function with a fixed delay between each call.
//https://www.javascripttutorial.net/javascript-bom/javascript-setinterval/
//->The callback is a callback function to be executed every delay milliseconds.
//->The delay is the time (in milliseconds) that the timer should delay between executions of the callback function.
//->The arg1, … argN are the arguments that are passed to the callback function.
//The setInterval() returns a numeric, non-zero number that identifies the created timer. You can pass the intervalID to the clearInterval() to cancel the timeout.
//!Note that the setInterval() works like the setTimeout() but it repeatedly executes a callback once every specified delay.
let intervalID;

  function start() {
     intervalID = setInterval(toggleColor, 1000); //repeatedly calls a function once a fixed delay between each call.
     console.log("New intervalID - " + intervalID )
     document.getElementById("start").disabled = true; // pēc nospiešanas start pogu deaktivizējam
  }

  function stop() { //notīra darbības no reģistra ar intervalu
    clearInterval(intervalID);
    console.log(" intervalID to be cleared - " + intervalID );
    document.getElementById("start").disabled = false; //pēc stop nospiešanas aktivizējam start pogu

  }

  function toggleColor() { //interactive colour change  
    let e = document.getElementById('flashtext');
    e.style.color = e.style.color == 'red' ? 'blue' : 'red';
  }







//-------------------------------------Section 2. Location------------------------------------------------------------
//Location
//The Location object represents the current location (URL) of a document. You can access the Location object by referencing the location property of the window or document object.
//Both window.location and document.location link to the same Location object.
//https://www.javascripttutorial.net/javascript-bom/javascript-location/

//The location.href is a string that contains the entire URL. "http://localhost:8080/js/index.html?type=listing&page=2#title" (pilna hiper reference)

//Location.protocol represents the protocol scheme of the URL including the final colon (:). "http:"

//Location.host represents the hostname: "localhost:8080"

//Location.port represents the port number of the URL. "8080"

//Location.pathname contains an initial '/' followed by the path of the URL. "/js/index.html" (js - lokāla mašīna)

//Location.search is a string that represents the query string of the URL: "?type=listing&page=2" (meklēšanas pieprasījums datu filtrēšanai)

//Location.hash returns a string that contains a ‘#’ followed by the fragment identifier of the URL. "#title" (adresācija lapas ietvaros= ielādētās lapas ietvaros)

//Location.origin is a string that contains the canonical form of the origin of the specific location. "http://localhost:8080" 




//Location.username is a string that contains the username before the domain name.

//Location.password is a string that represents the password specified before the domain name.


