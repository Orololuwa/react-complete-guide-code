import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("Render Element with text Hellow World", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //does nothing for now

    //Assert
    const hellowWorldElement = screen.getByText("Hello World", {
      exact: false
    });
    expect(hellowWorldElement).toBeInTheDocument();
  });

  test("Render Element with 'It's nice to see you'", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("nice to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("Render Element with text 'Changed!'", () => {
    //Arrsnge
    render(<Greeting />);

    //Act
    const buuttonElement = screen.getByRole("button");
    userEvent.click(buuttonElement);

    //Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("Paragraph with 'It's nice to see you' should be gone after button is clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("It's nice to see you", {
      exact: false
    });
    expect(outputElement).toBeNull();
  });
});
