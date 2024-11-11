
// 5. Attēlot visus veselus pāru skaitļus no 1 līdz 30, bet 12, 14, 16, 18 neattēlot.
{
    
    function count(from, to, choice, exclusions = [] ) {
        let i = from;

        while (from <= to) {
            if(choice === 'all') {
                console.log(i);
            } else if (choice === 'odd' && i % 2 !== 0 && exclusions.length === 0) {
                console.log(i);
            } else if (choice === 'even' && i % 2 === 0 && exclusions.length === 0) {
                console.log(i);
            } else if (choice === 'odd' && i % 2 !== 0 && !exclusions.includes(i)) {
                console.log(i);
            } else if (choice === 'even' && i % 2 === 0 && !exclusions.includes(i)) {
                console.log(i);
            } 
        }
    }









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