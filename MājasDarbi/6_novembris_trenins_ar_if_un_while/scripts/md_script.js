{
    // Treniņi ar if
    //1. Uzdot divus mainīgos, piemēram, a = 1; b = 10; 
    // sakārtot tos un attēlot augošā secībā.
    const a = 1;
    const b = 10

    if (a > b) {
        console.log(b,a);
    } else {
        console.log(a,b);
    }
}
{
    // 2. Uzdot divus mainīgos, piemēram, a = 1; b = 10; 
    // sakārtot tos un attēlot dilstošā secībā.
    const a = 1;
    const b = 10

    if (a > b) {
        console.log(a,b);
    } else {
        console.log(b,a);
    }
}
{
    // 3. Uzdot trīs mainīgos, piemēram, a = 1; b = 10; c = 3; 
    // sakārtot tos un attēlot augošā secībā. Atkārtot uzdevumu pie dažādām a, b un c sākuma vērtību kombinācijām.
    const a = 1;
    const b = 10
    const c = 3;

// acb +
// bac +
// bca +
// cab +
// cba +
// abc +

    if (a > b && a > c && b > c) {
       console.log(c, b, a)
    } else if (a > b && a > c && b < c ){
        console.log(b, c, a);
    } else if (b > a && b > c && a > c) {
        console.log(c, a, b)
    } else if (b > a && b > c && a < c) {
        console.log(a, c, b)
    } else if (c > a && c > b && a > b) {
        console.log(b, a, c);
    } else if (c > a && c > b && a < b) {
        console.log(a, b, c)
    }
}

{
// 4. Uzdot trīs mainīgos, piemēram, a = 1; b = 10; c = 3; 
// sakārtot tos un attēlot dilstošā secībā. Atkārtot uzdevumu pie dažādām a, b un c sākuma vērtību kombinācijām.
    const a = 1;
    const b = 10
    const c = 3;

    // acb +
    // bac +
    // bca +
    // cab +
    // cba +
    // abc +

    if (a > b && a > c && b > c) {
    console.log(a, b, c)
    } else if (a > b && a > c && b < c ){
        console.log(a, c, b);
    } else if (b > a && b > c && a > c) {
        console.log(b, a, c)
    } else if (b > a && b > c && a < c) {
        console.log(b, c, a)
    } else if (c > a && c > b && a > b) {
        console.log(c, a, b);
    } else if (c > a && c > b && a < b) {
        console.log(c, b, a)
    }
}

{
    // 5.Uzdot četrus mainīgos, piemēram, a = 1; b = 10; c = 3; d = 7; 
    //sakārtot tos un attēlot augošā secībā. 
    // Risinot uzdevumu, saprast, ka ar diskrētiem mainīgajiem (a,b,c,d) 
    //tas vairs nav tik vienkārši, aizdomāties par masīva (a[0],a[1],a[2],a[3]), 
    //ciklu un kādas metodes, piemēram, burbuļu metodi, izmantošanu.
    const a = 1;
    const b = 10
    const c = 3;
    const d = 7;

    const dati = [a,b,c,d];
    N = dati.length;
    for (let i = 0; i < N-1; i++) {
        for (let j = 0; j < N-1-i; j++) {
            if (dati[j] > dati[j+1]) { //augoša secība, ja dilstoša, tad if (dati[j] < dati[j+1]) {}
                temp =dati[j];
                dati[j] = dati[j+1];
                dati[j+1] = temp;
            }
        } 
    }
    console.log("Ir veiktas izmaiņas: ", dati);
}

/*-------------------treniņi ar while (un if)------------------------*/
//1. Attēlot visus veselus skaitļus no 1 līdz 30.

{
    let i=1;
    console.log("Visi veseli skaitļi no 1 līdz 30"); 
    while (i<=30) {
        console.log(i);  
        i++;
    }
   
}


//2. Attēlot visus veselus nepāru skaitļus no 1 līdz 30.
{
    let i=1;
    console.log("Visi veseli nepāru skaitļi no 1 līdz 30"); 
    while (i<=30) {
        if (i % 2 !== 0){ // !== nav vienāds ar 0
            console.log(i); // Attēlot visus veselus nepāru skaitļus
        }
        i++;
    }
}
// 3. Attēlot visus veselus pāru skaitļus no 1 līdz 30.
{
    let i=1;
    console.log("Visi veseli pāra skaitļi no 1 līdz 30"); 
    while (i<=30) {
        if (i % 2 === 0){ //=== 0 vienāds ar 0
            console.log(i); // Attēlot visus veselus nepāru skaitļus
        }
        i++;
    }
}
// 4. Attēlot visus veselus nepāru skaitļus no 1 līdz 30, bet 5 un 11 neattēlot.
{
    const exclude = [5, 11];
    let i=1;
    console.log("Attēlot visus veselus nepāru skaitļus no 1 līdz 30, bet 5 un 11 neattēlot"); 

    while (i<=30) {
        if (i % 2 !== 0 && !exclude.includes(i) ){
            console.log(i); 
        }
        i++;
    }
}

// 5. Attēlot visus veselus pāru skaitļus no 1 līdz 30, bet 12, 14, 16, 18 neattēlot.
{
    const exclude = [12, 14, 16, 18];
    let i=1;
    console.log("Attēlot visus veselus pāru skaitļus no 1 līdz 30, bet 12, 14, 16, 18 neattēlot"); 

    while (i<=30) {
        if (i % 2 === 0 && !exclude.includes(i) ){
            console.log(i); 
        }
        i++;
    }
}