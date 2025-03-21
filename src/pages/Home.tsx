import SearchInput from "@/components/SearchInput";
import Content from "./layouts/Content";
import { Flex, SimpleGrid, Skeleton, Stack } from "@chakra-ui/react";
import CharacterCard from "@/components/CharacterCard";
import Pagination from "@/components/Pagination";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/services/api";
import { CharacterSchema } from "@/schemas/CharacterSchema";

// Página principal onde se encontra grande parte
// do conteúdo da aplicação
export default function Home() {
  // Utiliza o react-query para fazer uma requição à API.
  const {
    isPending,
    isError,
    data: characters,
  } = useQuery({
    queryKey: ["characters"],
    queryFn: () => fetchData("/character?page=1"),
  });

  // Exibe uma mensagem de erro no console.
  if (isError) {
    console.error(isError);
  }

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

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap="5px">
          {/*Verifica se a requisição ainda está pendente. Caso sim, mostra o Skeleton Loading.*/}
          {isPending ? (
            <>
              {Array.apply(null, Array(20)).map(
                (_item: unknown, key: number) => (
                  <Stack gap="6" maxW="xs" key={key}>
                    <Skeleton height="200px" />
                  </Stack>
                ),
              )}
            </>
          ) : (
            <>
              {characters?.results.map(
                (character: CharacterSchema, key: number) => (
                  <CharacterCard
                    image={character.image}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    gender={character.gender}
                    key={key}
                  />
                ),
              )}
            </>
          )}
        </SimpleGrid>
      </Content>

      <Pagination />
    </Flex>
  );
}
