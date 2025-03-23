import { useParams } from "react-router";
import Content from "./layouts/Content";
import { Box, Flex, Heading, Image, Skeleton, Text } from "@chakra-ui/react";
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

  // Exibe uma mensagem de erro no console.
  if (isError) {
    console.error(isError);
  }

  return (
    <Flex justifyContent="center" padding={25} backgroundColor="blue" h="100vh">
      <Content>
        <Flex
          direction={{ base: "column", md: "row" }}
          margin={10}
          backgroundColor="green"
          rounded="lg"
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
          ) : (
            <>
              <Flex
                backgroundColor="brown"
                justifyContent="center"
                padding={{ base: 2, sm: 2, md: 0 }}
              >
                <Image
                  src={character.image}
                  alt={character.name}
                  height={{
                    base: "150px",
                    sm: "200px",
                    md: "300px",
                    lg: "300px",
                  }}
                  width={{
                    base: "150px",
                    sm: "200px",
                    md: "300px",
                    lg: "300px",
                  }}
                  rounded={{ base: "full" }}
                  roundedTopRight={{ md: "none" }}
                  roundedBottomRight={{ md: "none" }}
                  roundedBottomLeft={{ md: "lg" }}
                  roundedTopLeft={{ md: "lg" }}
                />
              </Flex>

              <Box margin={2}>
                <Heading>Name: {character.name}</Heading>
                <Text>Status: {character.status}</Text>
                <Text>Epsodes: {character.episode.length}</Text>
                <Text>Location: {character.location.name}</Text>
              </Box>
            </>
          )}
        </Flex>
      </Content>
    </Flex>
  );
}
