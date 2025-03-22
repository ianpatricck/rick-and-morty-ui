import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
};

// Componente que encapsula o conteúdo principal das páginas
export default function Content({ children }: ContentProps) {
  return (
    <Container maxW="80vw" backgroundColor="red">
      {children}
    </Container>
  );
}
