import { FormControl, FormLabel, Input, VStack ,Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {motion} from "framer-motion"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Login = () => {

    
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    
 
     const navigate = useNavigate();
     
      const handleLogin = async () =>{
        try {
            const config = {
                headers: {
                  'Content-Type': 'application/json'
                }}
            const  {data} = await axios.post('http://127.0.0.1:8000/api/v1/users/login',{
                email,password
            },config);
    
            
            localStorage.setItem('userInfo',JSON.stringify(data))
            navigate('/dashboard');
            
        } catch (error) {
            console.log(error);
        }
       }
     
     
    

  return (
    <VStack  p='2' spacing='4'>
      <FormControl isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input type="email" placeholder="enter your email address"  value={email} onChange={(e)=> setEmail(e.target.value)}/>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="enter your password" value={password} onChange={(e)=> setPassword(e.target.value)} />
      </FormControl>
      <Button as={motion.div} whileHover={{scale:1.1}} w='100%' onClick={handleLogin}>
             Login
      </Button>
    </VStack>
  );
};

export default Login;
