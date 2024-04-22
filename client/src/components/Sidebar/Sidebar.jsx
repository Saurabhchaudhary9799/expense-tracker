import { Box, Flex, Hide } from '@chakra-ui/react'
import React from 'react'
import ProfileDetails from './ProfileDetails'
import SidebarOptions from './SidebarOptions'

const Sidebar = () => {
  return (
    <Hide breakpoint='(max-width: 600px)' >
      <Flex direction='column' gap='10px' h='100vh' >
           <Box borderBottom='1px solid white'><ProfileDetails/></Box>
        
           <Box><SidebarOptions/></Box>
      </Flex>
      </Hide>
  )
}

export default Sidebar