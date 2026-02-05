import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "../MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("should render firstname and lastname", () => {
    const { container } = render(<MyAwesomeApp />);
    const h1 = container.querySelector("h1");
    const h3 = container.querySelector("h3");

    expect(h1?.innerHTML).toContain("vyvyrruz");
    expect(h3?.innerHTML).toContain("corp");
  });

  test("should render firstname and lastname - screen", () => {
    render(<MyAwesomeApp />);
    screen.debug();
    //console.log(container.innerHTML)
    // const h1 = screen.getByRole("heading",{level: 1} );
    //const h3 = container.querySelector("h3");
    const h1 = screen.getByTestId("firstNameTitle");
    expect(h1?.innerHTML).toContain("vyvyrruz");
  });

  test("should match snapshot", () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot()
  });

  test("should match snap 2", () => {
  render(<MyAwesomeApp/>)
  expect(screen.getByTestId('div-app')).toMatchSnapshot()
  
  
  });
});
