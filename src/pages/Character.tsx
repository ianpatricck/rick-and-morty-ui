import { useParams } from "react-router";
import Content from "./layouts/Content";
import {
  Box,
  DataList,
  Flex,
  Heading,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/services/api";

// Componente que exibe mais informações de um personagem em específico.
export default function Character() {
  const { id } = useParams();

  // Utiliza o react-query para fazer a requição do personagem na API.
  const {
    isPending,
    isError,
    data: character,
  } = useQuery({
    queryKey: ["character"],
    queryFn: () => fetchData("/character/" + id),
  });

  return (
    <Flex justifyContent="center" padding={25} h="100vh">
      <Content>
        <Flex
          direction={{ base: "column", md: "row" }}
          margin={10}
          rounded="lg"
          backgroundColor="white"
          boxShadow="md"
        >
          {isPending ? (
            <Skeleton
              height={{
                base: "150px",
                sm: "200px",
                md: "300px",
                lg: "350px",
              }}
              width="100%"
            />
          ) : isError ? (
            <Heading color="var(--foreground)" p={5}>
              Character not found :(
            </Heading>
          ) : (
            <>
              <Flex justifyContent="center" padding={{ base: 2, sm: 2, md: 0 }}>
                <Image
                  src={character.image}
                  alt={character.name}
                  height={{
                    base: "150px",
                    sm: "200px",
                  }}
                  width={{
                    base: "150px",
                    sm: "200px",
                  }}
                  rounded={{ base: "full" }}
                  margin={5}
                />
              </Flex>

              <Box margin={3}>
                <Heading size="xl">{character.name}</Heading>

                <DataList.Root mt={3}>
                  <DataList.Item>
                    <DataList.ItemLabel>Status</DataList.ItemLabel>
                    <DataList.ItemValue>{character.status}</DataList.ItemValue>
                  </DataList.Item>

                  <DataList.Item>
                    <DataList.ItemLabel>Gender</DataList.ItemLabel>
                    <DataList.ItemValue>{character.gender}</DataList.ItemValue>
                  </DataList.Item>

                  <DataList.Item>
                    <DataList.ItemLabel>Episodes</DataList.ItemLabel>
                    <DataList.ItemValue>
                      {character.episode.length}
                    </DataList.ItemValue>
                  </DataList.Item>

                  <DataList.Item>
                    <DataList.ItemLabel>Location</DataList.ItemLabel>
                    <DataList.ItemValue>
                      {character.location.name}
                    </DataList.ItemValue>
                  </DataList.Item>

                  <DataList.Item>
                    <DataList.ItemLabel>Origin</DataList.ItemLabel>
                    <DataList.ItemValue>
                      {character.origin.name}
                    </DataList.ItemValue>
                  </DataList.Item>
                </DataList.Root>
              </Box>
            </>
          )}
        </Flex>
      </Content>
    </Flex>
  );
}
