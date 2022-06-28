// NUMBER
// console.log(h1)
const x = 1;
// x = 2;
let y = 2
y = 3
// console.log(x)
// console.log(y)

// STRING
const name = "John"
console.log(name + " Doe")

// OBJECT
const person = {
    name: "John",
    age: 30
}

console.log(person.name)
// console.log(console)
// ARRAY
const people = ["John", "Doe", "Jane"];

// console.log(people[1])
console.log(people)

//  FUNCTION 

function sayHello (){
    console.log("Hello")
}
// sayHello()
// sayHello()
    //  argument

function say ( name ){
    console.log("Hello "+ name)
}

say("John")
say("Marry")

//  RETURN - zwracanie
function add(x, y){
    return x + y 
    console.log(add (1, 2) )

}

// pobieranie elementów z HTML
const dom = document.querySelector('h1')
dom.innerHTML = "Hello from JS"
// console.log(document)

//  tworzenie elementu JS i dodawanie do HTML'a
const newDOM = document.createElement("div")
newDOM.innerHTML = "test"
console.log(newDOM)

dom.append(newDOM)

//  EVENTS (wydarzenia)
newDOM.onclick = function(){
    console.log("kliknięto")

}

const a = 3;
const b = 5;

if(a < b){
    console.log("A jest mniejsze")
} else{ 
    // wykonaj jeśli fałsz
    
    console.log("A jest większe")
}
