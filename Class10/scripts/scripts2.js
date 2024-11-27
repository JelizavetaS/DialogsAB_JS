// https://www.w3schools.com/js/js_object_constructors.asp
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = 'Latvian';
  }

  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Anna", "Hill", 48, "green");
  const mySister = new Person("Helga", "Forest", 26, "Yellow");

  