import SearchInput from "@/components/SearchInput";
import { screen } from "@testing-library/react";
import { render } from "../customRender";

describe("SearchInput component", () => {
  it("renders correctly with the provided label", () => {
    render(<SearchInput />);
    const inputElement = screen.getByText(/Buscar personagem/i);
    expect(inputElement).toBeInTheDocument();
  });
});
