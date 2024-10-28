/*------------------------- tests ar let -----------------------------------*/
let y = 10; // summas_mainiigais
console.log("y mainīgā vērtība pirms {}: " + y);
{

  let y = 100;
  console.log("y mainīgā vērtība iekš {} un pēc atkārtotas let: " + y);
}
console.log("y mainīgā vērtība pēc {}: " + y);
y = 30;
console.log("y mainīgā vērtība pēc {} un pēc = darbības: " + y);
