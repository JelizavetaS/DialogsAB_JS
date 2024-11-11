// https://www.geeksforgeeks.org/sorting-in-array/

//----------------------------------------------Bubble sort
// 1.masīva aizpildīšana ("hard" dati) 
let dati = [1, 2, 5, 7, -89, 74, 0, 4];
document.getElementById("demo").innerText = "Masīvs pirms kārtošanas: "+ dati;

// dati.length ->8 (N)=> 7 (N-1) salīdzināšanas pa pāriem
// [(1[0], 2[1]), 5, 7, -89, 74, 0, 4] -> neko nedaram
// [1, (2[1], 5[2]), 7, -89, 74, 0, 4] -> neko nedaram
// [1, 2, (5[2], 7[3]), -89, 74, 0, 4] -> neko nedaram
// [1, 2, 5, (7[3], -89[4]), 74, 0, 4] -> jāveic izmaiņas [1, 2, 5, (-89[3], 7[4]), 74, 0, 4]
// [1, 2, 5, -89, (7[4], 74[5]), 0, 4] -> neko nedaram
// [1, 2, 5, -89, 7, (74[5], 0[6]), 4] -> jāveic izmaiņas [1, 2, 5, -89, 7, (0[5], 74[6]), 4]
// [1, 2, 5, -89, 7, 0, (74[6], 4[7])] -> jāveic izmaiņas [1, 2, 5, -89, 7, 0, (4[6], 74[7])]
// --------------------- 1. "lielā" iterācija ir pabeigta - 
// --------------------- pēc šis iterācijas vislielākais burbulis ir beigās


//var atkal veikt N-1 salīdzināšanu pa pāriem, bet var 1 salīdzināšanu "ieekonomēt" (jo pats pēdējais jau ir vislielākais)
// [1, 2, 5, -89, 7, 0, 4, 74]
skaititajs = 0;
N = dati.length;
for (let i = 0; i < N-1; i++) 
{
    for (let j = 0; j < N-1-i; j++) {

  // console.log(j, dati[j], j+1, dati[j+1], dati[j] < dati[j+1]);
  skaititajs++;
      if (dati[j] > dati[j+1]) {
        temp =dati[j];
        dati[j] = dati[j+1];
        dati[j+1] = temp;
        console.log("Ir veiktas izmaiņas: ", dati);
      }
    } 
  
}
document.getElementById("demo2").innerText = "Masīvs pēc kārtošanas: "+ dati;


//----------------------------------------------Selection Sort
let dati2 = [1, 2, 5, 7, -89, 74, 0, 4];

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
  
      // Assume the current position holds
      // the minimum element
      let min_idx = i;
      
      // Iterate through the unsorted portion
      // to find the actual minimum
      for (let j = i + 1; j < n; j++) {
          if (arr[j] < arr[min_idx]) {
          
              // Update min_idx if a smaller element is found
              min_idx = j;
          }
      }
      
      // Move minimum element to its
      // correct position
      let temp = arr[i];
      arr[i] = arr[min_idx];
      arr[min_idx] = temp;
  }
}
// Driver function 

function printArray(arr) {
  for (let val of arr) {
      //process.stdout.write(val + " ");
    
  }
  console.log();
}

console.log("Original array: ", dati2.toString());
// printArray(dati2);

selectionSort(dati2);

console.log("Sorted array: ", dati2.toString());

