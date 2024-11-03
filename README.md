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

The **shift()** method removes the first array element and "shifts" all other elements to a lower index (fruits.shift()). The shift() method returns the value that was "shifted out" (let fruit = fruits.shift()).
The **unshift()** method adds a new element to an array (at the beginning), and "unshifts" older elements (fruits.unshift("Lemon")) and returns the new array length.

<ins>**Delete()***</ins> Using delete() leaves undefined holes in the array (use pop() or shift() instead).

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


4. tēma cikli (loops)

JavaScript datu veidi, to lietošana un pārveidošana.
>- date1