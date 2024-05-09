import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react'

import Sidebar from '../components/Sidebar/Sidebar';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();

  useEffect(()=>{
      const userInfo = localStorage.getItem('userInfo');
      if(!userInfo){
          navigate("/");
      }
  },[])
   

  return (
     <Flex className="dashboard-section" position='relative' >
          <Box className='sidebar' borderRight='1px solid white'   ><Sidebar /> </Box>
          <Box flex='1' className='dashboard-description' ><DescriptionBox/></Box>
     </Flex>
  )
}

export default HomePage