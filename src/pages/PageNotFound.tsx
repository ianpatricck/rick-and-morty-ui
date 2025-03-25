import { Flex, Heading } from "@chakra-ui/react";

export default function PageNotFound() {
  return (
    <Flex justifyContent="center" alignItems="center" height="80vh">
      <Heading size={{ sm: "md", md: "xl", xl: "2xl" }} color="dimgray">
        404 | Content Not Found
      </Heading>
    </Flex>
  );
}
