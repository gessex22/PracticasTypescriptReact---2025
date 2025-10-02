// const characterNames = [ "arrow", "flash", "batman"]

// const [,, rapido] = characterNames

// console.log(rapido)


// const returnsArrayFn = ()=>{

//     return ["ABC", 123] as const

// }


// const [letras, numeros] = returnsArrayFn()



export const useState = (name: string) => {


    return [name, (name: string) => { console.log(name) }] as const



}
const [name, setName] = useState("Daniels")

console.log(name)
setName('Eliot')