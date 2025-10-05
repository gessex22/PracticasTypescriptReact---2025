import type { GiphyResponse } from "../data/giphy.response";


const APY_KEY = "MgcRyxoRK7K2WlUOk7OET6uGS08R5Uvy";

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${APY_KEY}`
);

// myRequest
//   .then((response) =>{
//    response.json().then( data => console.log(data))
//   })
//   .catch((err) => console.log(err));

myRequest
  .then((response) => response.json())
  .then(({ data }:  GiphyResponse) => {
    const imageUrl =  data.images.original.url;
    createImageInsideDOM(imageUrl)
  
  });

  const createImageInsideDOM = ( url:string)=>{
    const imgElement = document.createElement("img");
    imgElement.src = url;

    document.body.append(imgElement);
  
  }
