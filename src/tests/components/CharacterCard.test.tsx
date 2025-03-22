import { render } from "../customRender";
import CharacterCard from "@/components/CharacterCard";

describe("CharacterCard component", () => {
  it("renders correctly with the passed props", () => {
    const { getByText, getByRole } = render(
      <CharacterCard
        image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        name="Rick Sanchez"
        status="Alive"
        species="Human"
        gender="Male"
      />,
    );

    const image = getByRole("img", { name: /Rick Sanchez/i });
    const name = getByText("Rick Sanchez");
    const status = getByText("Alive");
    const species = getByText("Human");
    const gender = getByText("Male");

    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(status).toBeInTheDocument();
    expect(species).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
  });
});
