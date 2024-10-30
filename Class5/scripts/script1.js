const cars = ["Saab", "Volvo", "BMW"];

document.getElementById("array_initial").innerHTML = `${cars} masīva izmērs - ${cars.length} elementi`;

var N = cars.push("VW")

document.getElementById("array_push").innerHTML = `${cars} masīva izmērs - ${N} elementi`;
