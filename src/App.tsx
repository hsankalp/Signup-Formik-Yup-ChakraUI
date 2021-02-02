import * as React from "react";
import { ChakraProvider, Grid, theme, Center, Box } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Registration from "./components/registration";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid height="100vh" p={3}>
      <Center>
        <Box position="absolute" right="16px" top="16px">
          <ColorModeSwitcher />
        </Box>
        <Registration />
      </Center>
    </Grid>
  </ChakraProvider>
);
