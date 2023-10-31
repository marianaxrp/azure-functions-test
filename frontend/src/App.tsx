import React from "react";
import "./App.css";
import {
  Button,
  Center,
  ChakraProvider,
  Heading,
  Text,
} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Center display="flex" flexDir="column">
        <Heading mb={4}>Skeleton app</Heading>
        <Text fontSize="xl">This is a skeleton app just for funsies</Text>
        <Button size="lg" colorScheme="green" mt="24px">
          I don't do anything relevant
        </Button>
      </Center>
    </ChakraProvider>
  );
}

export default App;
