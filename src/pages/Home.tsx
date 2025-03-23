import SearchInput from "@/components/SearchInput";
import Content from "./layouts/Content";
import { Flex, Heading, SimpleGrid, Skeleton, Stack } from "@chakra-ui/react";
import CharacterCard from "@/components/CharacterCard";
import Pagination from "@/components/Pagination";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchData } from "@/services/api";
import { CharacterSchema } from "@/schemas/CharacterSchema";
import { Link } from "react-router";
import { ChangeEvent, useCallback, useState } from "react";
import { debounce } from "lodash";
import FilterInput from "@/components/FilterInput";

// Página principal onde se encontra grande parte
// do conteúdo da aplicação
export default function Home() {
  // Página atual
  const [page, setPage] = useState<number>(1);

  // Estado de armazenamento do personagem a se buscar.
  const [searchCharacter, setSearchCharacter] = useState<string>("");

  // Adicionando o debounce ao digitar o nome do personagem
  const debouncedSearch = useCallback(
    debounce((query) => {
      setPage(1);
      setSearchCharacter(query);
    }, 500),
    [],
  );

  // Utiliza o react-query para fazer uma requisição à API.
  const {
    isPending,
    isError,
    data: characters,
    isFetching,
  } = useQuery({
    queryKey: ["characters", page, searchCharacter],
    queryFn: async () => {
      if (!!searchCharacter.trim()) {
        return await fetchData(
          `/character?name=${searchCharacter}&page=${page}`,
        );
      }

      return await fetchData(`/character/?page=${page}`);
    },
    enabled: true,
    placeholderData: keepPreviousData,
  });

  // Atualizando a busca com o debounce
  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      backgroundColor="blue"
      padding={10}
    >
      {/*Armazena todo o conteúdo da Home*/}
      <Content>
        <Flex backgroundColor="green" justifyContent="center" padding={2}>
          <SearchInput onChange={handleSearchInput} />
        </Flex>

        <Flex backgroundColor="salmon" justifyContent="center" padding={2}>
          <FilterInput />
        </Flex>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap="5px">
          {/*Verifica se a requisição ainda está pendente. Caso sim, mostra o Skeleton Loading.*/}
          {isPending || isFetching ? (
            <>
              {Array.apply(null, Array(20)).map(
                (_item: unknown, key: number) => (
                  <Stack gap="6" maxW="xs" key={key}>
                    <Skeleton height="200px" />
                  </Stack>
                ),
              )}
            </>
          ) : isError ? (
            <Heading textAlign="center" margin={4}>
              Personagens não foram encontrados.
            </Heading>
          ) : (
            <>
              {characters?.results.map(
                (character: CharacterSchema, key: number) => (
                  <Link to={"/character/" + character.id} key={key}>
                    <CharacterCard
                      image={character.image}
                      name={character.name}
                      status={character.status}
                      species={character.species}
                      gender={character.gender}
                    />
                  </Link>
                ),
              )}
            </>
          )}
        </SimpleGrid>
      </Content>

      {/*Exibe o componente de páginação caso isError seja 'false'*/}

      {!!isPending ? (
        <Skeleton height="40px" width="40vw" mt={4} />
      ) : (
        !isError && (
          <Pagination
            count={characters?.info.pages}
            pageSize={1}
            page={page}
            defaultPage={1}
            onPageChange={(e) => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setPage(e.page);
            }}
          />
        )
      )}
    </Flex>
  );
}
