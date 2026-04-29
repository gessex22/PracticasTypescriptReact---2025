import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviusGifs } from "./gifs/components/PreviusGifs";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchInput } from "./shared/components/SearchInput";

export const GifsApp = () => {
  const [previousSeachs, setPreviusSearchs] = useState([
    "dragon ball Z",
    "Goku ",
  ]);

  const hadleSearchsClicked = (termino: string) => {
    console.log(termino);
  };

  const handleSearch = (query: string) => {
    console.log({ query });
    
  };

  return (
    <>
      <CustomHeader title="Buscardor de Gifs" />

      <SearchInput placeHolder="Buscar gifsss" onSearchinput={handleSearch} />

      <PreviusGifs
        searches={["goku", "dragon ball"]}
        onLabelClicked={hadleSearchsClicked}
      />

      <GifList gifs={mockGifs} />
    </>
  );
};
