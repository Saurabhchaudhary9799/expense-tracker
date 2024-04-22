import React from 'react'
import { TbTransactionPound } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import { CiSettings } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { Box, Flex, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const SidebarOptions = () => {
  return (
    <VStack>
      <Link to={'/dashboard'} className='sidebar-options'>
        <Flex w='150px'   justifyContent='start' alignItems='center' gap='5px'><Box ><TbTransactionPound/></Box>Transactions</Flex></Link>
      <Link to={"/dashboard/graph"} className='sidebar-options'>
      <Flex w='150px' justifyContent='start' alignItems='center' gap='5px'><Box ><VscGraph/></Box>Graph</Flex>
      </Link>
      <Link to={"/dashboard/categories"} className='sidebar-options'>
      <Flex w='150px' justifyContent='start' alignItems='center' gap='5px'><Box ><BiCategory/></Box>Categories</Flex>
      </Link>
      <Link to={"/dashboard/trash"} className='sidebar-options'>
      <Flex w='150px'  justifyContent='start' alignItems='center' gap='5px'><Box ><FaTrash/></Box>Trash</Flex>
      </Link>
       <Link to={"/dashboard/settings"} className='sidebar-options'>
        <Flex w='150px'  justifyContent='start' alignItems='center' gap='5px'><Box ><CiSettings/></Box>Setting</Flex></Link>
    </VStack>
  )
}

export default SidebarOptions