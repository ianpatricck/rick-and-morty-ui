import { Card, Flex, Image, Text } from "@chakra-ui/react";
import CharacterCardModule from "./CharacterCard.module.css";

type CharacterCardProps = {
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
};

// Componente que representa um card de personagem a ser apresentado
// ao realizar a pesquisa.
export default function CharacterCard({
  image,
  name,
  status,
  species,
  gender,
}: CharacterCardProps) {
  return (
    <Card.Root
      className={CharacterCardModule.card}
      boxShadow="md"
      _hover={{ boxShadow: "2xl", backgroundColor: "var(--lightgray)" }}
      maxWidth="sm"
      overflow="hidden"
      padding={2}
    >
      <Flex justifyContent="center">
        <Image src={image} alt={name} borderRadius="full" boxSize="150px" />
      </Flex>

      <Card.Body mt={3}>
        <Flex justifyContent="space-between">
          <Card.Title>{name}</Card.Title>
          <Text fontSize={11} color="var(--foreground)">
            {species}
          </Text>
        </Flex>
      </Card.Body>

      <Card.Footer mt={3}>
        <Text
          color="var(--foreground)"
          border=".12em solid var(--foreground)"
          borderRadius={2}
          p={2.1}
        >
          {gender}
        </Text>
        <Text
          color="white"
          backgroundColor={
            status == "Alive"
              ? "var(--success)"
              : status == "Dead"
                ? "var(--danger)"
                : "dimgray"
          }
          p={2.1}
          borderRadius={2}
        >
          {status}
        </Text>
      </Card.Footer>
    </Card.Root>
  );
}
