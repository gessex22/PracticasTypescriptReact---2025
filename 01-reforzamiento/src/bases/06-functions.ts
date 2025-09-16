interface User {
    uid: string,
    username: string,
    realName: string

}


const getUSer = (name: string): User => ({ uid: 'ABC-123', username: 'dr.Strange', realName: name })

getUSer("Daniels")


const myNumbers : number[] = [1,2,3,4,5]

myNumbers.forEach(console.log)
