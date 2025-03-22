import { useWindowScreen } from "@/hooks/useWindowScreen";
import {
  ButtonGroup,
  Pagination as ChakraPagination,
  IconButton,
  PaginationRootProps,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

// Componente de paginação que fornece usabilidade ao usuário
// ao navegar pelos itens dos personagens.
export default function Pagination(props: PaginationRootProps) {
  const screenSize = useWindowScreen();

  return (
    <ChakraPagination.Root marginTop={2} backgroundColor="dimgray" {...props}>
      <ButtonGroup variant="ghost" size={{ base: "xs", sm: "sm", md: "md" }}>
        <ChakraPagination.PrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </ChakraPagination.PrevTrigger>

        {screenSize.width < 385 ? (
          <ChakraPagination.PageText />
        ) : (
          <ChakraPagination.Items
            render={(page) => (
              <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                {page.value}
              </IconButton>
            )}
          />
        )}

        <ChakraPagination.NextTrigger asChild>
          <IconButton>
            <LuChevronRight />
          </IconButton>
        </ChakraPagination.NextTrigger>
      </ButtonGroup>
    </ChakraPagination.Root>
  );
}
