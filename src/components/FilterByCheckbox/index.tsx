import { Checkbox, CheckboxGroup, Fieldset, Flex, For } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

type CheckboxList = {
  index: string;
  value: string;
};

// Tipo das propriedades recebidas
type FilterByCheckboxProps = {
  statusList: CheckboxList[];
  genderList: CheckboxList[];
  states: { checkedStatus: string[]; checkedGender: string[] };
  setStates: {
    setCheckedStatus: Dispatch<SetStateAction<string[]>>;
    setCheckedGender: Dispatch<SetStateAction<string[]>>;
  };
};

// Componente que representa alguns filtros em formato de
// checkboxes que podem auxiliar na busca por personagens.
export default function FilterByCheckbox({
  statusList,
  genderList,
  states,
  setStates,
}: FilterByCheckboxProps) {
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
              <For each={statusList}>
                {(status) => (
                  <Checkbox.Root
                    key={status.index}
                    value={status.value}
                    backgroundColor="blue"
                    marginTop={0.5}
                    marginRight={2}
                    checked={
                      states.checkedStatus.includes(status.value) ? true : false
                    }
                    onCheckedChange={(e) => {
                      if (e.checked) {
                        setStates.setCheckedStatus((prev) => [
                          ...prev,
                          status.index,
                        ]);
                      } else {
                        setStates.setCheckedStatus(
                          states.checkedStatus.filter(
                            (item) => item !== status.index,
                          ),
                        );
                      }
                    }}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>{status.value}</Checkbox.Label>
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
              <For each={genderList}>
                {(gender) => (
                  <Checkbox.Root
                    key={gender.index}
                    value={gender.value}
                    backgroundColor="blue"
                    marginTop={0.5}
                    marginRight={2}
                    checked={
                      states.checkedGender.includes(gender.value) ? true : false
                    }
                    onCheckedChange={(e) => {
                      if (e.checked) {
                        setStates.setCheckedGender((prev) => [
                          ...prev,
                          gender.index,
                        ]);
                      } else {
                        setStates.setCheckedGender(
                          states.checkedGender.filter(
                            (item) => item !== gender.index,
                          ),
                        );
                      }
                    }}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>{gender.value}</Checkbox.Label>
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
