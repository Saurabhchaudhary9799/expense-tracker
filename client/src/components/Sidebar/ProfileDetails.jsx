import { Avatar, Box, Center, Flex, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useUser } from '../Context/ContextConfig'
import { useNavigate } from 'react-router-dom'


const ProfileDetails = () => {
  const navigate = useNavigate();
  const {currentUser} = useUser();
   
  useEffect(()=>{
    
    if(!currentUser){
      navigate("/");
    }
  },[])
  
  return (
    <Flex m='4' gap='10px' >
        <Box>
        <Avatar size='md' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
        </Box>
        <Center >
        <Text fontSize='xl'>{currentUser.name}</Text>
        </Center>
    </Flex>
  )
}

export default ProfileDetails