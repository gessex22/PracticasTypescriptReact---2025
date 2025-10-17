import type { GiphyResponse } from "../data/giphy.response";


const APY_KEY = "MgcRyxoRK7K2WlUOk7OET6uGS08R5Uvy";


const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement("img");
    imgElement.src = url;

    document.body.append(imgElement);

}




const getRandomGifUrl = async () => {

    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${APY_KEY}`
    );

    const { data }: GiphyResponse = await response.json()

    return data.images.original.url
}


getRandomGifUrl().then(url => createImageInsideDOM(url))



