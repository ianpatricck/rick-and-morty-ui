import { defineStyle, Field, Group, Input, InputProps } from "@chakra-ui/react";
import SearchInputModule from "./SearchInput.module.css";

// Campo de busca dos personagens
export default function SearchInput(props: InputProps) {
  return (
    <Field.Root>
      <Group
        attached
        w={{ base: "full", sm: "full", xl: "2xl" }}
        className={SearchInputModule.input_group}
      >
        <Input className="peer" placeholder="" {...props} />
        <Field.Label
          css={floatingStyles}
          fontSize={{ base: "10pt", sm: "sm", md: "sm" }}
        >
          Search characters
        </Field.Label>
      </Group>
    </Field.Root>
  );
}

// Estilização para o efeito 'Floating Label'
const floatingStyles = defineStyle({
  pos: "absolute",
  px: "0.5",
  top: "-3",
  insetStart: "2",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    top: "-5",
    insetStart: "2",
  },
});
