import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";

const ProviderWrapper = ({ children }: { children: ReactNode }) => (
  <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
);

// Renderizador customizado para os testes
const customRender = (ui: ReactElement, options?: any) => {
  return render(ui, { wrapper: ProviderWrapper, ...options });
};

export { customRender as render };
