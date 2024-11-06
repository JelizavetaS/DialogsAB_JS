{
    // 1. Uzdot divus mainīgos, piemēram, a = 1; b = 10; sakārtot tos un attēlot augošā secībā.
    const a = 1;
    const b = 10

    if (a > b) {
        console.log(b,a);
    } else {
        console.log(a,b);
    }
}
{
    // 2. Uzdot divus mainīgos, piemēram, a = 1; b = 10; sakārtot tos un attēlot dilstošā secībā.
    const a = 1;
    const b = 10

    if (a > b) {
        console.log(a,b);
    } else {
        console.log(b,a);
    }
}
{
    // 3. Uzdot trīs mainīgos, piemēram, a = 1; b = 10; c = 3; sakārtot tos un attēlot augošā secībā. Atkārtot uzdevumu pie dažādām a, b un c sākuma vērtību kombinācijām.
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
// 4. Uzdot trīs mainīgos, piemēram, a = 1; b = 10; c = 3; sakārtot tos un attēlot dilstošā secībā. Atkārtot uzdevumu pie dažādām a, b un c sākuma vērtību kombinācijām.
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
    // Uzdot četrus mainīgos, piemēram, a = 1; b = 10; c = 3; d = 7; sakārtot tos un attēlot augošā secībā. Risinot uzdevumu, saprast, ka ar diskrētiem mainīgajiem (a,b,c,d) tas vairs nav tik vienkārši, aizdomāties par masīva (a[0],a[1],a[2],a[3]), ciklu un kādas metodes, piemēram, burbuļu metodi, izmantošanu.
    const a = 1;
    const b = 10
    const c = 3;
    const d = 7;

    
}