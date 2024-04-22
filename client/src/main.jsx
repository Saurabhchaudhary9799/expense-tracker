import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './components/Context/ContextConfig.jsx'
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
       <UserProvider>
          <App />
        </UserProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
