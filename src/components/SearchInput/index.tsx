import {
  Button,
  defineStyle,
  Field,
  Group,
  Input,
} from "@chakra-ui/react";

//Campo de busca dos personagens
export default function SearchInput() {
  return (
    <Field.Root w="2xl" backgroundColor="pink">
      <Group attached w="full">
        <Input className="peer" placeholder="" />
        <Field.Label css={floatingStyles}>Buscar personagem</Field.Label>
        <Button bg="bg.subtle" variant="outline">
          Submit
        </Button>
      </Group>
    </Field.Root>
  );
}

// Estilização para o efeito 'Floating Label'
const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "bg",
  px: "0.5",
  top: "-3",
  insetStart: "2",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    color: "fg.muted",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "fg",
    top: "-5",
    insetStart: "2",
  },
});
