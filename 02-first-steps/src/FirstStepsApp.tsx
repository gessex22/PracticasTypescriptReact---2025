import { ItemCounter } from "./ItemCounter"


interface ItemInCart {

productName : string,
quantity: number,}



const itemsInCart: ItemInCart[] = [
{productName: "nintendo", quantity: 2},
{productName: 'xbox', quantity: 1 },
{productName: 'playStation', quantity: 1},

]

export function FirstStepsApp(){


return(
<>
  <h1>carrito de compras</h1>

{itemsInCart.map(({productName,quantity}) => (<ItemCounter key={productName} name = {productName} quantity={quantity}/> ))}


{/* <ItemCounter   name = 'nintendo' quantity={ 2}/>
<ItemCounter name = 'play station' quantity={1}/>
<ItemCounter name = 'xbox' quantity={ 2}/>
     */}

</>
)



}