# DialogsAB_JS
Elektroniskā klade par JavaScript :space_invader:	
> [1_11_M_Programmēšanas pamati JavaScript valodā (bez priekšzināšanām programmēšanā) 16.10.24-11.12.24](https://e-vide.dialogs-ab.lv/course/view.php?id=248)





## 1.nodarbība
1. tēma HTML Tutorial
2. tēma Ekrāna šērošana
3. tēma GitHub

> [!NOTES]
> - **What is JavaScript?** ***https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript***
> - **Basic writing and formatting syntax**  ***https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#lists***
> - **GitHub Language Stats**  ***https://madnight.github.io/githut/#/pull_requests/2024/1***
> - **Client server architecture**  ***https://www.interviewbit.com/blog/wp-content/uploads/2022/06/Client-Server-Architecture-working-1024x800.png***
> - **w3schools (html tutorial)**  ***https://www.w3schools.com/html/***



### mājasdarbs
> - [X] treniņi ar HTML https://www.w3schools.com/html/, ņemt piemērus, rakstīt html failos datorā, skatīties kā izskatās pārlukā
> - [X] uzinstalēt git for windows  https://git-scm.com/downloads
> - [X] uzinstalēt visual studio code https://code.visualstudio.com/

>[!TIP]
> 21.10. 17:00 - 18:00 var pieslēgties ātrāk ja ir jautājumi


![priecīga bilde](https://i.pinimg.com/originals/64/45/ee/6445ee2274a782a7c528303e9bd823d7.gif)





## 2.nodarbība
1. tēma Visual Studio savienošana ar GitHub
2. tēma Izmaiņu akceptēšana un saglabāšana
3. tēma Stilu veidošana css ārējā failā

> [!HTML]
> - **Document Object Model in JavaScript** ***https://www.javascripttutorial.net/javascript-dom/document-object-model-in-javascript/***
> - **Elementi jeb Tags** ***https://www.w3schools.com/tags/default.asp***
> - **Atributi jeb Attributes** ***https://www.w3schools.com/tags/ref_attributes.asp***
> - **Skats uz visiem iespējamiem elementiem** ***ttps://html.spec.whatwg.org/#toc-semantics***
> - **CEĻŠ:Solis pa solim kā HTML elements tiek pieteikts un kādā veidā tas tiks parādīts pārlukā** ***https://www.w3schools.com/html/default.asp***

> [!CSS]
> - **CSS stila pievienošana(CSS Tutorial)** ***https://www.w3schools.com/css/css_howto.asp***
> - **Kā atsaukties** ***https://www.w3schools.com/css/css_howto.asp***



### mājasdarbs
> - [ ] trenēties veidot dažādus stilus ar CSS





## 3.nodarbība

1. tēma Darbs ar Visual Studio (mapju izveidošana, stila failu pievienošana, sagataves, absolūtas un relatīvas adreses) Link utt.adreses (lokāli - šeit,realtīvi, aboslūti; globāli)
 > - absolūtā adrese, piem., link rel="stylesheet" href="/Users/elizabeth/Desktop/JavaScript/DialogsAB_JS/Class3/styles_css/mystyle.css"
 > - relatīvā adrese, piem., link rel="stylesheet" href="./styles_css/mystyle.css"
 > - vai uz publiski pieejamiem resuriem link relrel="stylesheet" href="https://www.some.com/.../mystyle.css"

2. tēma  Live server izmantošana vs Reload

3. tēma html preview ***https://htmlpreview.github.io/***

4. tēma Informācijas uzglabāšana, ASCII tabula (1 byte=8bits; kb 1024b; mb 1024 kb) ***https://www.ecowin.org/ascii.htm*** Bināra sistēma (3 bytes=24 bits; 2 24 pakāpē=16777216 ->unikālo krāsu skaits) 0 un 1 sistimatizēšana
![ascii](https://www.ecowin.org/aulas/resources/tables/asciitable.jpg)

5. tēma Krāsas
> - rgb (red, green, blue) - jebkuru krāsu var izveidot no trīm sastāvdaļām. Piem., (0,0,128->navy), var uzdot ar vārdu (#000080) ar heksidecimālo simbolu 00(piem.,red). 
> - ***https://www.w3schools.com/colors/*** Populārākām krāsām ir izveidoti nosaukumi (piem., beige, navy utt.)
> - HTML Color Picker ***https://www.w3schools.com/colors/colors_picker.asp***

6. tēma JavaScript pirmie soļi
> - Console, mainīgo veidošana, mainīšana, veidošana izmantojot esošos mainīgos. (a=10; b=20;....Cntrl+L ekrāna notīrīsāna console daļā; c=a+b; )
> - 'Hello World!' paziņojums Console ***"script console.log("Hello World!");/script***
> - typeof() (Piem., typof(a) 'number/string')



### mājasdarbs
> - līdz pirmdienai, 28.10.2024., izmēģināt visas operācijas Consolē **JavaScript Operators Reference** ***https://www.w3schools.com/jsref/jsref_operators.asp***
Pievērst uzmanību atbildei 
> - JavaScript **Notes for Professionals** grāmatu no goalkisker.com ***https://goalkicker.com/JavaScriptBook/***





## 4.nodarbība

1. tēma JavaScript datu veidi, to lietošana un pārveidošana.
>- date1 = Date.now() (The Date.now() static method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC. A number representing the timestamp, in milliseconds, of the current time, e.x. Might be: 1519211809934)
>- date = new.Date();
>- typeof(date)
>- console.log() (kā informēt sevi)
>- "text1"+some_variable+"text2"
>- `text1 ${some_variable} text2`


2. tēma JavaScript Identifies 
The general rules for constructing names for variables (unique identifiers) are:
>- Names can contain letters, digits, underscores, and dollar signs.
>- Names must begin with a letter.
>- Names can also begin with $ and _ (but we will not use it in this tutorial).
>- Names are case sensitive (y and Y are different variables).
>- Reserved words (like JavaScript keywords) cannot be used as names.

3. tēma
>- scope {} - reģions, nākotnē palīdzēs padarīt kodu pārskatāmāku un izsekot kļūdas skriptos

4. tēma Variables https://www.w3schools.com/js/js_variables.asp
JavaScript Variables can be declared in 4 ways:
>- automatically
>- var (mainīgo definēšana: var x=10; piemērs: ***https://github.com/tatusmatrixAB/DialogsAB_JS_2024/tree/main/Nodarbiba_03/JS)***

5. tēma Let 
***https://www.w3schools.com/js/js_let.asp***
>- The let keyword was introduced in ES6 (2015)
>- Variables declared with let have Block Scope
>- Variables declared with let must be Declared before use
>- Variables declared with let cannot be Redeclared in the same scope

piemērs: ***https://github.com/tatusmatrixAB/DialogsAB_JS_2024/blob/main/Nodarbiba_03/JS/let.js***
>-let nevar pārdeklarēt, izņemot reģionā {}

6. tēma Const (nav iespējams mainīt) ***https://www.w3schools.com/js/js_const.asp***

When to use JavaScript const?
Always declare a variable with const when you know that the value should not be changed.

Use const when you declare:

A new Array
A new Object
A new Function
A new RegExp


>- The const keyword was introduced in ES6 (2015)
>- Variables defined with const cannot be Redeclared
>- Variables defined with const cannot be Reassigned
>- Variables defined with const have Block Scope

![Difference Between var, let and const](/va_let_const.png)

7. tēma JS operators **https://www.w3schools.com/jsref/jsref_operators.asp**
Operators are used to assign values, compare values, perform arithmetic operations, and more.


8. tēma Arrays (Masīvs, masīva veidošana) **https://www.w3schools.com/js/js_arrays.asp**
atslēgas vārds *const*
An array is a special variable, which can hold more than one value: const cars = ["Saab", "Volvo", "BMW"];



### mājasdarbs
> - līdz trešdienai, 30.10.2024., pamēģināt izprast piemēros piedāvāto (**https://www.w3schools.com/js/js_arrays.asp**) apvienot/ievietot/izņemt vērtības utt.



## 5.nodarbība

1. tēma Masīvi (**https://www.w3schools.com/js/js_arrays.asp**)
> - izmantojam  "id", lai piešķirtu paragrafam noteiktu nosaukumu, varētu vieglāk samkelēt un mainīt konkrēta paragrafa stāvokli
> - masīvu kārtošana **https://www.w3schools.com/js/js_array_sort.asp**
> - masīva metodes **https://www.w3schools.com/js/js_array_methods.asp**, masīva metodes, atslēgvārdi. 

<ins>Popping items out of an array, or pushing items into an array.</ins> 

> - The **pop()** method removes the last element from an array and returns the value that was "popped out". 
> - The **push()** method adds a new element to an array (at the end) and returns the new array length.

<ins>Shifting is equivalent to popping, but working on the first element instead of the last.</ins> 

> - The **shift()** method removes the first array element and "shifts" all other elements to a lower index (fruits.shift()). The shift() method returns the value that was "shifted out" (let fruit = fruits.shift()).
> - The **unshift()** method adds a new element to an array (at the beginning), and "unshifts" older elements (fruits.unshift("Lemon")) and returns the new array length.
> - **Delete()** Using delete() leaves undefined holes in the array (use pop() or shift() instead).

<ins>Splicing and Slicing Arrays</ins> 

The **splice()** method adds new items to an array (fruits.splice(2, 0, "Lemon", "Kiwi"):
> -  The first parameter (2) defines the position where new elements should be added (spliced in).
> -  The second parameter (0) defines how many elements should be removed.
> -  The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.) 

The **slice()** method slices out a piece of an array. With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array (fruits.splice(0, 1))

> - The first parameter (0) defines the position where new elements should be added (spliced in).
> - The second parameter (1) defines how many elements should be removed.
> - The rest of the parameters are omitted. No new elements will be added.

The **find()** method returns the value of the first array element that passes a test function. The function takes 3 arguments: item value, index and array itself. find() is an ES6 feature.

2. tēma HTML elementi un atributi

3. tēma datu tipi **https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures**

## 6.nodarbība


> - If...else **https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else**
> - Truthy **https://developer.mozilla.org/en-US/docs/Glossary/Truthy**
> - Falsy **https://developer.mozilla.org/en-US/docs/Glossary/Falsy**
https://www.w3schools.com/js/js_if_else.asp

nosacījuma operators, pārslegšanas operators

## 7.nodarbība

## 9.nodarbība
Objektu orientētas programmēšanas pamati (OOP). Inkapsulācija. Mantošana. Polimorfisms.
https://www.w3schools.com/js/js_objects.asp

JavaScript Object Definition:

>- Using an Object Literal (An object literal is a list of name:value pairs inside curly braces {}{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"})
>- Using the new Keyword 
>- Using an Object Constructor


Object Properties https://www.w3schools.com/js/js_object_property.asp

How to describe function in JavaScript (all possible kinds)? https://chatgpt.com/share/67323625-dd14-8012-8daa-ff3ef405b4b0



###konsultācija 23.11.2024. 09:00-10:30





## 10.nodarbība
JavaScript Display Objects https://www.w3schools.com/js/js_object_display.asp


## 11.nodarbība
https://www.javascripttutorial.net/javascript-bom/javascript-window/

//sk.sadaļu "Alert" alert("Cienījamais lietotājs, tulīt mēs Tevi informēsim par ...");//viss, kas tiks plānots pēc, tiks izpildīts tad, kad lietotājs noreaģēs uz paziņojumu
### Section 1. Window

1. Window
var counter = 1;
var showCounter = () => console.log({ counter });

console.log(counter);
console.log(window.counter);

showCounter();
window.showCounter();

1) Window size

>- The window object exposes the functionality of the web browser to the webpage.
>- The window object has four properties related to the size of the window:
>- The innerWidth and innerHeight properties return the size of the page viewport inside the browser window (not including the borders and toolbars).
>- The outerWidth and outerHeight properties return the size of the browser window itself.
>- Also, document.documentElement.clientWidth and document.documentElement.clientHeight properties indicate the width and height of the page viewport.

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

2) Open a new window

//let url = 'http://127.0.0.1:5500/DialogsAB_JS/Class7/index7.html';
//let jsWindow = window.open(url,'Class7');

// drošības pēc lokālu failu aplūkošana ir bloķēta
>- Note that the web browser will block the popup automatically. To see the new window, you need to unblock the popup from your web browser. 

/*
//let jsWindow = window.open(
           //"https://rtu.lv",
  //  "http://127.0.0.1:5500/DialogsAB_JS/Class8/index8.html",
           //"RTU",
  //  "Class08",
  //  "height=600,width=800");
  
3) Resize a window
// setTimeout(() => {
 //   jsWindow.resizeTo(600, 300);
 // }, 3000); //The following example opens a new window that loads the page and resize it to (600,300) after 3 seconds:
  
4) Moving window to a specified coordinate
 // setTimeout(() => {
 //     jsWindow.moveBy(20,-50); //In this method, x and y are horizontal and vertical coordinates to be moved to. 
 // }, 4000); //The following example opens a new window and moves it to (20,-50) coordinate after 4 seconds
 
5) Close a window
  //setTimeout(() => {
  //    jsWindow.close();
  //}, 10000); //The following example opens a new window and closes it after 10 seconds:
*/
6) The window.opener property
>- A newly created window can reference back to the window that opened it via the window.opener property. This allows you to exchange data between the two windows. ->console -> "window.opener"





2. Alert - lietotāja informēšana, ziņojums **https://www.javascripttutorial.net/javascript-bom/javascript-alert/**
>- alert("Cienījamais lietotājs, tulīt mēs Tevi informēsim par ...");//viss, kas tiks plānots pēc, tiks izpildīts tad, kad lietotājs noreaģēs uz paziņojumu


3. Confirm - displays a confirmation dialog **https://www.javascripttutorial.net/javascript-bom/javascript-confirm/**
>- The question is an optional string to display in the dialog.
>- The result is a Boolean value indicating whether the OK or Cancel button was clicked. If the OK button is clicked, the result is true; otherwise, the result is false.
>- Note that if a browser ignores in-page dialogs, then the result is always false.

//let result = confirm('Jā vai nē?');
//let message = result ? 'Jūs nospiedāt OK pogu' : 'Jūs nospiedāt Cancel pogu';
//alert(message);



4. Prompt - plašāka atgriezeniskā saite no lietotāja **https://www.javascripttutorial.net/javascript-bom/javascript-prompt/**
>- The prompt() is a method of the window object. The prompt() method instructs the web browser to display a dialog with a text, text input field, and two buttons OK and Cancel.
>- The prompt() is a method of the window object.
>- The prompt() shows a dialog that prompts the user to enter a text and wait until the user submit or cancel the dialog.
>- The prompt() returns a string containing a string entered by the user or null if the user did not enter anything.

1) Display a prompt dialog
//let lang = prompt('What is your favorite programming language?');

//let feedback = lang.toLowerCase() === 'javascript' ? `It's great!` :
//    `It's ${lang}`;

//alert(feedback);

2) Convert a user input to a number
>- The result of the prompt() is a string. If you want to get the answer as a number, you should always cast the string into a number.
>- The following example uses prompt() to display a dialog that asks users for their ages. If users are 16 years old or above, they are eligible to join. Otherwise, they will not be.

//let ageStr = prompt('How old are you?');
//let age = Number(ageStr);
//let feedback = age >= 16 ?
//    'You're eligible to join.' :
//    'You must be at least 16 year old to join.';
//alert(feedback);




5. setTimeout() **https://www.javascripttutorial.net/javascript-bom/javascript-settimeout/**
>- The setTimeout() is a method of the window object. The setTimeout()  sets a timer and executes a callback function after the timer expires.

![timeout](/timeout.jpg)

//let timeoutID  = setTimeout(cb [,delay], arg1, arg2,...);
>- In this syntax: "cb" is a callback function to be executed after the timer expires. = Ko pildam
>- "delay" is the time in milliseconds that the timer should wait before executing the callback function. If you omit it, the delay defaults to 0. = Kad pildam
>- "arg1, arg2, …" are arguments passed to the cb callback function.
>- The "setTimeout()" returns a timeoutID which is a positive integer identifying the timer created as a result of calling the method.
>- The timeoutID can be used to cancel timeout by passing it to the "clearTimeout()" method.
var timeoutID; //globālais mainīgais

function showAlert() { //shows an alert dialog
    timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!'); //sets a timer and executes a callback function when the timer expires.
    console.log("New timeoutID - " + timeoutID);
}

function cancelAlert() {
    console.log(" timeoutID to be cleared - " + timeoutID);
    clearTimeout(timeoutID); // cancel timeout

}

6. setInterval **https://www.javascripttutorial.net/javascript-bom/javascript-setinterval/**
>- The setInterval() repeatedly calls a function with a fixed delay between each call.
>- The callback is a callback function to be executed every delay milliseconds.
>- The delay is the time (in milliseconds) that the timer should delay between executions of the callback function.
>- The arg1, … argN are the arguments that are passed to the callback function.
>- The setInterval() returns a numeric, non-zero number that identifies the created timer. You can pass the intervalID to the clearInterval() to cancel the timeout.
>- !Note that the setInterval() works like the setTimeout() but it repeatedly executes a callback once every specified delay.
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







### Section 2. Location


1. Location **https://www.javascripttutorial.net/javascript-bom/javascript-location/**
The Location object represents the current location (URL) of a document. You can access the Location object by referencing the location property of the window or document object.
Both window.location and document.location link to the same Location object.

>- The location.href is a string that contains the entire URL. "http://localhost:8080/js/index.html?type=listing&page=2#title" (pilna hiper reference)
>- Location.protocol represents the protocol scheme of the URL including the final colon (:). "http:"
>- Location.host represents the hostname: "localhost:8080"
>- Location.port represents the port number of the URL. "8080"
>- Location.pathname contains an initial '/' followed by the path of the URL. "/js/index.html" (js - lokāla mašīna)
>- Location.search is a string that represents the query string of the URL: "?type=listing&page=2" (meklēšanas pieprasījums datu filtrēšanai)
>- Location.hash returns a string that contains a ‘#’ followed by the fragment identifier of the URL. "#title" (adresācija lapas ietvaros= ielādētās lapas ietvaros)
>- Location.origin is a string that contains the canonical form of the origin of the specific location. "http://localhost:8080" 


## 12.nodarbība

https://www.javascripttutorial.net/javascript-bom/
https://www.javascripttutorial.net/javascript-bom/javascript-location/
https://www.hostinger.com/tutorials/domain-vs-hosting
https://www.javascripttutorial.net/javascript-bom/javascript-navigator/
https://developer.mozilla.org/en-US/docs/Web/API/ScreenDetailed
https://www.javascripttutorial.net/javascript-bom/javascript-history/
https://www.javascripttutorial.net/javascript-dom/
https://www.javascripttutorial.net/javascript-dom/document-object-model-in-javascript/
https://developer.mozilla.org/en-US/docs/Web/API/Node
https://www.javascripttutorial.net/javascript-dom/javascript-getelementbyid/
https://www.javascripttutorial.net/javascript-dom/javascript-queryselector/
