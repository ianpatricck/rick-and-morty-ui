import Content from "./layouts/Content";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

// Componente que exibe mais informações
// de um usuário em específico.
export default function Character() {
  return (
    <Flex justifyContent="center" padding={25} backgroundColor="blue" h="100vh">
      <Content>
        <Flex
          direction={{ base: "column", md: "row" }}
          margin={10}
          backgroundColor="green"
          rounded="lg"
        >
          <Flex
            backgroundColor="brown"
            justifyContent="center"
            padding={{ base: 2, sm: 2, md: 0 }}
          >
            <Image
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="Rick Sanchez"
              height={{ base: "150px", sm: "200px", md: "300px", lg: "350px" }}
              width={{ base: "150px", sm: "200px", md: "300px" }}
              rounded={{ base: "full" }}
              roundedTopRight={{ md: "none" }}
              roundedBottomRight={{ md: "none" }}
              roundedBottomLeft={{ md: "lg" }}
              roundedTopLeft={{ md: "lg" }}
            />
          </Flex>

          <Box margin={2}>
            <Heading>Name: Rick Sanchez</Heading>
            <Text>Status: Alive</Text>
            <Text>Epsodes: 1230</Text>
            <Text>Location: Earth</Text>
          </Box>
        </Flex>
      </Content>
    </Flex>
  );
}
