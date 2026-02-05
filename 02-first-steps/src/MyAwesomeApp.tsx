import type { CSSProperties } from "react";

export function MyAwesomeApp() {
  const firstName = "vyvyrruz";
  const lastName = "corp";
  const favoriteGames = ["nfs", "mario kart", "valorant"];
  const isActive = true;
  const address = {
    zipcode: "ABC-123",
    country: "CANADA",
  };
  const MyStyles:CSSProperties = {
    backgroundColor: "#fafafa",
    borderRadius: 20,
    padding: 10,
    marginTop: 30
  };

  return (
    <div data-testid="div-app">
      <h1 data-testid='firstNameTitle'> {firstName}</h1>
      <h3>{lastName}</h3>
      <p className="mi-clase-favorita">{favoriteGames.join(", ")}</p>
      <p> {2 + 2}</p>
      {isActive ? "active" : "inactive"}
      <p style={MyStyles}>{JSON.stringify(address)}</p>
    </div>
  );

  
}




