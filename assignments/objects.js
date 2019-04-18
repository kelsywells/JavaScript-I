// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:

const internMitzi = {

"id": 1,
"name": "Mitzi",
"email": "mmelloy0@psu.edu",
"gender": "F",
}

const internKennan = {

"id": 2,
"name": "Kennan",
"email": "kdiben1@tinypic.com",
"gender": "M",
}

const internKeven = {

"id": 3,
"name": "Keven",
"email": "kmummery2@wikimedia.org",
"gender": "M",
}

const internGannie = {

"id": 4,
"name": "Gannie",
"email":"gmartinson3@illinois.edu",
"gender": "M",
}

const internAntonietta ={

"id": 5,
"name": "Antonietta",
"email": "adaine5@samsung.com",
"gender": "F",
}


// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name

internMitzi.name

// Kennan's ID

internKennan.id

// Keven's email

internKeven.email

// Gannie's name

internGannie.name

// Antonietta's Gender

internAntonietta.gender

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());

function speak() {
  return `Hello, my name is ${internKennan.name}!`
}
console.log (speak());

// Log the parent object's name


// Log the child's age

// Log the name and age of the grandchild

// Have the parent speak

// Have the child speak

// Have the grandchild speak
