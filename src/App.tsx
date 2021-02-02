import * as React from "react";
import {
  Flex,
  ChakraProvider,
  theme,
  Center,
  Container,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Registration from "./components/registration";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container my={6}>
      <Flex direction="column">
        <ColorModeSwitcher alignSelf="flex-end" />
        <Center>
          <Registration />
        </Center>
      </Flex>
    </Container>
  </ChakraProvider>
);
