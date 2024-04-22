import React, { useState } from 'react'
import { FormControl, FormLabel, Input, VStack ,Button } from "@chakra-ui/react";
import {motion} from 'framer-motion'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
   const [name , setName] = useState('');
   const [email , setEmail] = useState('');
   const [password , setPassword] = useState('');
   const [confirmPassword , setConfirmPassword] = useState('');

    const navigate = useNavigate();
   const handleSignup = async () =>{
    try {
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }}
        const  {data} = await axios.post('http://127.0.0.1:8000/api/v1/users/signup',{
            name ,email,password,confirmPassword
        },config);

        console.log(data);
        localStorage.setItem('userInfo',JSON.stringify(data))
        navigate('/dashboard');
        
    } catch (error) {
        console.log(error);
    }
   }
  return (
    <VStack p='2' spacing='4'>
        <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input type='text' placeholder="enter your name" value={name} onChange={(e)=> setName(e.target.value)} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input type='email' placeholder="enter your email address" value={email} onChange={(e)=> setEmail(e.target.value)} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input type='password' placeholder="enter your password" value={password} onChange={(e)=> setPassword(e.target.value)} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <Input type='password' placeholder="confirm your password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} />
      </FormControl>
      <Button as={motion.div} whileHover={{scale:1.1}} w='100%' onClick={handleSignup}  >
             Signup
      </Button>
    </VStack>
  )
}

export default Signup