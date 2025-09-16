const myArray: number[] = [1,2,3,4,5,6,7]

const myArray2 = [...myArray];

myArray.push(8);
//myArray.push('hola mundo')

for (const x of myArray2 ){
console.log(x + 10)
}

