import React, { useEffect } from "react";
import {
  Box,
  Center,
  Container,
  Flex,
  Image,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const navigate = useNavigate();
   
  useEffect(()=>{
    const user= localStorage.getItem('userInfo');
    if(user){
       navigate('/dashboard');
    }
  })
         
   
return (
    <>
      <Flex
        sx={{
         
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Center border="1px solid white" borderRadius='10px'>
          <Tabs
            position="relative"
            variant="unstyled"
            w="400px"
            
            
          >
            <TabList>
              <Tab w="50%">Login</Tab>
              <Tab w="50%">Signup</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Center>
      </Flex>
    </>
  );
};

export default RegisterPage;
