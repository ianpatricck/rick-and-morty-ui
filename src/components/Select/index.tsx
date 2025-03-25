import {
  Portal,
  Select as ChakraSelect,
  createListCollection,
} from "@chakra-ui/react";

import SelectModule from "./Select.module.css";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type SelectProps = {
  placeholder: string;
  onChange: Dispatch<SetStateAction<string | null>>;
  setPage: Dispatch<SetStateAction<number>>;
  data: Array<{ label: string; value: string }>;
};

export default function Select({
  placeholder,
  onChange,
  setPage,
  data,
}: SelectProps) {
  const collection = createListCollection({
    items: data,
  });

  return (
    <ChakraSelect.Root
      className={SelectModule.select}
      collection={collection}
      size="sm"
      width="210px"
      mt={3}
      mr={3}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setPage(1);
        onChange(e.target.value);
      }}
    >
      <ChakraSelect.HiddenSelect />
      <ChakraSelect.Control>
        <ChakraSelect.Trigger>
          <ChakraSelect.ValueText
            placeholder={placeholder}
            fontSize={13}
            color="dimgray"
          />
        </ChakraSelect.Trigger>
        <ChakraSelect.IndicatorGroup>
          <ChakraSelect.Indicator />
        </ChakraSelect.IndicatorGroup>
      </ChakraSelect.Control>
      <Portal>
        <ChakraSelect.Positioner>
          <ChakraSelect.Content>
            {collection.items.map((item) => (
              <ChakraSelect.Item
                item={item}
                key={item.value}
                fontFamily="Montserrat"
                fontSize={12}
                p={2}
                color={item.value == "" ? "var(--gray)" : "dimgray"}
              >
                {item.label}
                <ChakraSelect.ItemIndicator />
              </ChakraSelect.Item>
            ))}
          </ChakraSelect.Content>
        </ChakraSelect.Positioner>
      </Portal>
    </ChakraSelect.Root>
  );
}
