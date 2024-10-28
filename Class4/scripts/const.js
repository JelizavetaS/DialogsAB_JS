/*------------------------- tests ar const -----------------------------------*/
const z = 10;
console.log("z mainīgā vērtība pirms {}: " + z);
{
  const z = 100;
  console.log("z mainīgā vērtība iekš {} un pēc atkārtotas const: " + z);
}
console.log("z mainīgā vērtība pēc {}: " + z);
