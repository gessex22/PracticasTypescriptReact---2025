interface Person {
    firstName : string;
    lastName : string;
    age: number;
    addres: Address
}

interface Address {

 postalCode : string,
city: string

}



const ironman: Person = { 
firstName : "tony",
lastName : "stark",
age: 45,
addres:{
    postalCode: 'ABC-123',
    city: "Chicago"
}

}

console.log(ironman)