import SearchInput from "@/components/SearchInput";
import Content from "./layouts/Content";
import { Flex, Heading, SimpleGrid, Skeleton, Stack } from "@chakra-ui/react";
import CharacterCard from "@/components/CharacterCard";
import Pagination from "@/components/Pagination";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchData } from "@/services/api";
import { CharacterSchema } from "@/schemas/CharacterSchema";
import { Link } from "react-router";
import { useState } from "react";

// Página principal onde se encontra grande parte
// do conteúdo da aplicação
export default function Home() {
  const [page, setPage] = useState<number>(1);

  // Utiliza o react-query para fazer uma requisição à API.
  const {
    isPending,
    isError,
    data: characters,
    isFetching,
  } = useQuery({
    queryKey: ["characters", page],
    queryFn: () => fetchData("/character?page=" + page),
    placeholderData: keepPreviousData,
  });

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
          <SearchInput />
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
              Erro ao buscar parsonagens
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
