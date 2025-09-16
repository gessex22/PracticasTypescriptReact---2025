const ironman = { 
firstName : "tony",
lastName : "stark",
age: 45,
addres: {
    postalCode: "ABC123",
    city: "New York"
}
}

const spiderman = structuredClone(ironman)
spiderman.firstName = "peter",
spiderman.lastName = 'parker'
spiderman.age = 22,
spiderman.addres.city = "san jose"


console.log(ironman, spiderman)