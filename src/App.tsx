import { Button, ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
      <p>あいうえお</p>
    </ChakraProvider>
  )
}

export default App
