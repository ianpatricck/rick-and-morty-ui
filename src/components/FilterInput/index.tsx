//<h1>Status</h1>
//<h1>Gender</h1>

import { Checkbox, CheckboxGroup, Fieldset, Flex, For } from "@chakra-ui/react";

// Componente que representa alguns filtros que podem
// auxiliar na busca por personagens
export default function FilterInput() {
  return (
    <Fieldset.Root w="2xl" backgroundColor="pink">
      <Flex
        backgroundColor="red"
        justifyContent="space-between"
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          xl: "row",
        }}
      >
        <CheckboxGroup
          backgroundColor="brown"
          name="status"
          mb={{ base: 2, sm: 2, md: 2, xl: 0 }}
        >
          <Fieldset.Legend>Status</Fieldset.Legend>
          <Fieldset.Content>
            <Flex direction={{ base: "column", sm: "row" }}>
              <For each={["Alive", "Dead", "Unknown"]}>
                {(value) => (
                  <Checkbox.Root
                    key={value}
                    value={value}
                    backgroundColor="blue"
                    marginTop={0.5}
                    marginRight={2}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>{value}</Checkbox.Label>
                  </Checkbox.Root>
                )}
              </For>
            </Flex>
          </Fieldset.Content>
        </CheckboxGroup>

        <CheckboxGroup
          backgroundColor="brown"
          name="gender"
          mb={{ base: 2, sm: 2, md: 2, xl: 0 }}
        >
          <Fieldset.Legend>Gender</Fieldset.Legend>
          <Fieldset.Content>
            <Flex direction={{ base: "column", sm: "row" }}>
              <For each={["Female", "Male", "Genderless", "Unknown"]}>
                {(value) => (
                  <Checkbox.Root
                    key={value}
                    value={value}
                    backgroundColor="blue"
                    marginTop={0.5}
                    marginRight={2}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>{value}</Checkbox.Label>
                  </Checkbox.Root>
                )}
              </For>
            </Flex>
          </Fieldset.Content>
        </CheckboxGroup>
      </Flex>
    </Fieldset.Root>
  );
}
