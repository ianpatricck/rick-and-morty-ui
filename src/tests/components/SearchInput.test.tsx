import SearchInput from "@/components/SearchInput";
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../customRender";

describe("SearchInput component", () => {
  it("renders correctly with the provided label", () => {
    render(<SearchInput />);
    const inputElement = screen.getByText(/Buscar personagem/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should update the input value", () => {
    const { getByRole } = render(<SearchInput />);

    const input = getByRole("textbox");
    fireEvent.change(input, {
      target: { value: "Rick Sanchez" },
    });

    expect(input).toHaveValue("Rick Sanchez");
  });
});
