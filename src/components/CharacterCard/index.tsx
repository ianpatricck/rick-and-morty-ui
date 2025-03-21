import { Card, Flex, Image, Text } from "@chakra-ui/react";

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
      maxWidth="sm"
      overflow="hidden"
      backgroundColor="gray"
      padding={2}
    >
      <Flex backgroundColor="yellow" justifyContent="center">
        <Image src={image} alt={name} borderRadius="full" boxSize="150px" />
      </Flex>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Text>{status}</Text>
        <Text>{species}</Text>
      </Card.Body>

      <Card.Footer>
        <Text>{gender}</Text>
      </Card.Footer>
    </Card.Root>
  );
}
