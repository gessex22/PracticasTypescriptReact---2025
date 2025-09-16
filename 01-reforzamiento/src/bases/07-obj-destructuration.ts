const person = {
    name: "tony",
    age: 45,
    key: "ironman"

}



//console.log({ key, name, age })



interface Hero {
    name: string,
    age: number,
    key: string,
    rank?: string

}

const useContext = ({ key, name, age, rank }: Hero) => {

    return {
        keyName: key,
        user: {
            name,
            age
        },
        rank
    }
}

const context = useContext(person)

console.log(context)