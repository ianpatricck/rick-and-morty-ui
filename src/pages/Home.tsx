import SearchInput from "@/components/SearchInput";
import Content from "./layouts/Content";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import CharacterCard from "@/components/CharacterCard";

export default function Home() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      backgroundColor="blue"
      padding={10}
    >
      <Content>
        <Flex backgroundColor="green" justifyContent="center" padding={2}>
          <SearchInput />
        </Flex>

        <SimpleGrid columns={4} gap="5px">
          <CharacterCard
            image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            name="Rick Sanchez"
            status="Alive"
            species="Human"
            gender="Male"
          />
          <CharacterCard
            image="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            name="Morty Smith"
            status="Alive"
            species="Human"
            gender="Male"
          />
          <CharacterCard
            image="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
            name="Summer Smith"
            status="Alive"
            species="Human"
            gender="Female"
          />
          <CharacterCard
            image="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
            name="Beth Smith"
            status="Alive"
            species="Human"
            gender="Female"
          />
          <CharacterCard
            image="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
            name="Jerry Smith"
            status="Alive"
            species="Human"
            gender="Male"
          />
          <CharacterCard
            image="https://rickandmortyapi.com/api/character/avatar/6.jpeg"
            name="Abadango Cluster Princess"
            status="Alive"
            species="Alien"
            gender="Female"
          />
          <CharacterCard
            image="https://rickandmortyapi.com/api/character/avatar/6.jpeg"
            name="Abadango Cluster Princess"
            status="Alive"
            species="Alien"
            gender="Female"
          />
          <CharacterCard
            image="https://rickandmortyapi.com/api/character/avatar/6.jpeg"
            name="Abadango Cluster Princess"
            status="Alive"
            species="Alien"
            gender="Female"
          />
          <CharacterCard
            image="https://rickandmortyapi.com/api/character/avatar/6.jpeg"
            name="Abadango Cluster Princess"
            status="Alive"
            species="Alien"
            gender="Female"
          />
          <CharacterCard
            image="https://rickandmortyapi.com/api/character/avatar/6.jpeg"
            name="Abadango Cluster Princess"
            status="Alive"
            species="Alien"
            gender="Female"
          />
          <CharacterCard
            image="https://rickandmortyapi.com/api/character/avatar/6.jpeg"
            name="Abadango Cluster Princess"
            status="Alive"
            species="Alien"
            gender="Female"
          />
          <CharacterCard
            image="https://rickandmortyapi.com/api/character/avatar/6.jpeg"
            name="Abadango Cluster Princess"
            status="Alive"
            species="Alien"
            gender="Female"
          />
        </SimpleGrid>
      </Content>
    </Flex>
  );
}
