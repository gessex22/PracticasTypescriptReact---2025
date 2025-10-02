import { heroes, type Hero} from '../data/heroes.data'


const getHeroById = (id: number):Hero =>{

const hero = heroes.find(( hero )=> {return hero.id === id})

if  (!hero ){
    throw new Error (`Nop existe ese id`)
}

return hero
}


console.log(getHeroById(7))