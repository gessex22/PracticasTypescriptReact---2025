import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "../FirstStepsApp";
import { render, screen } from "@testing-library/react";

const mockItemCounter = vi.fn((props: unknown) => {
  return <div data-testid="itemCounter" />;
});

vi.mock("../ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

// vi.mock("../ItemCounter", () => ({
//   ItemCounter: (props:unknown) => <div data-testid="itemCounter" name={props.productName} quantity={props.quantity} />,
// }));

describe("FirstStepsApp tests ", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should match snapsshot", () => {
    const { container } = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();
  });

  test("should render the correct number of ItemCounter components", () => {
    render(<FirstStepsApp />);
    screen.debug();

    const itemCounters = screen.getAllByTestId("itemCounter");
    expect(itemCounters.length).toBe(3);
  });

  test(" should render ItemCounter with correct props", () => {
    render(<FirstStepsApp />);
    expect(mockItemCounter).toHaveBeenCalledTimes(3);
  });
});
