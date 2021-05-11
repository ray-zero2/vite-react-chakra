import { Button, ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter } from "react-router-dom";

import theme from "./theme/theme";
import { Router } from "./router/Router";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router></Router>
        <Button colorScheme="teal">ボタン</Button>
        <p>あいうえお</p>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
