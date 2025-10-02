import { heroes, Owner, type Hero } from "../data/heroes.data"

export const getHeroesByOwner = (nameOwner: Owner): Hero[] => {

    return heroes.filter((item) => item.owner == nameOwner  )


}




console.log(getHeroesByOwner(Owner.Marvel))


