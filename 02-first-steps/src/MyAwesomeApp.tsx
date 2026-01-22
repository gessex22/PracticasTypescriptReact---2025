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
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>
      <p>{favoriteGames.join(", ")}</p>
      <p> {2 + 2}</p>
      {isActive ? "active" : "inactive"}
      <p style={MyStyles}>{JSON.stringify(address)}</p>
    </>
  );
}
