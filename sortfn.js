var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

console.log("Original Array\n ", students, "\n");
//sort by age
function sortAge(a, b) {
  return a.age - b.age;
}

var sortedByAge = students.sort(sortAge);
console.log("Sorted by Age\n ", sortedByAge, "\n");

//sort by name
function sortName(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

var sortedByName = students.sort(sortName);
console.log("Sorted by Name\n ", sortedByName, "\n");
