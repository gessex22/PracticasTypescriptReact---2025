import React, { useState } from "react";

interface Props {
  placeHolder: string;
  onSearchinput: (query: string) => void;
}

export const SearchInput = ({ placeHolder, onSearchinput }: Props) => {
  const [query, setQuery] = useState("");

  const handleSearch = ()=>{
  onSearchinput( query )
  setQuery('')
  }

  const handleKeyDowm = ( event: React.KeyboardEvent<HTMLInputElement>)=>{
   if (event.key === 'Enter'){
            
            handleSearch( ) }
  
  }


  
  return (
    <>
      <h1> {query} </h1>
      <div className="search-container">
        <input
          type="text"
          placeholder={placeHolder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={ handleKeyDowm}
        />
        <button onClick={handleSearch} > Buscar </button>
      </div>
    </>
  );
};
